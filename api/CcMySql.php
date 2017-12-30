<?php
class CcMySql{
	private static $_instance = null;
	private $dbConn;
	public $sql = '';//最后执行的sql语句
	
	private function __construct() {
		$this -> $dbConn = new mysqli(DB_HOST, DB_USER, DB_PWD, DB_NAME, DB_PORT);
		//这句话保证数字类型输出不是字符串
		$this -> $dbConn -> options($this -> dbConn, MYSQLI_OPT_INT_AND_FLOAT_NATIVE, true);
		$this -> dbConn -> query("set names utf8");
		date_default_timezone_set('Asia/Shanghai');
	}
	/**
	 * 禁止通过复制的方式实例化该类
	 */
	private function __clone() {
	}
	
	/**
	 * 关闭数据库
	 */
	private function close() {
		mysqli_close($this -> dbConn);
	}
	/**
	 * 获取影响的行数
	 */
	private function rowNum(){
		return mysqli_affected_rows($this -> dbConn);
	}
	/**
	 * 获取最后一条记录ID
	 */
	private function insertId() {
		return mysqli_insert_id($this -> dbConn);
	}
	/*
	 * 转换字段
	 * 当$type = key时 $fields = array("key" => "$value");
	 * 当$type = value时 $fields = array("key" => "$value") = array("$value");
	 * $fields数组时默认结构array("key" => "$value")
	 * htmlspecialchars转义符函数
	 * 返回拼接字段
	 */
	 private function getfield($fields, $index = ""){
		$field = "*";
		if(is_array($fields)){
			$field = "";
			foreach($fields as $key=> $value){
				switch ($index) {
					case 'key':
						$field .= $key .",";
						break;
					case 'value':
						$field .= "\"".htmlspecialchars($value)."\",";
						break;
					default:
						$field .= $key."=\"".htmlspecialchars($value)."\",";
						break;
				}
			}
			$field = rtrim($field,",");
		}
		else{
			$field = $fields;
		}
		return $field;
	}
	/*
	 * 单例
	 */
	public static function DB() {
		if (self::$_instance == null) {
			self::$_instance = new self();
		}
		return self::$_instance;
	}
	/*
	 * 查询
	 * $fields = 字符串 / array("key" => "value")
	 * 返回数组
	 */
	 public function query($table, $fields = "*", $where = "", $order = "", $limit = "") {
		$rows = array();
			
		$where = $where == "" ? $where : " WHERE $where";
		$order = $order == "" ? $order : " ORDER BY $order";
		$limit = $limit == "" ? $limit : " LIMIT $limit";
		
		$field = $this->getfield($fields,"key");
		$this -> sql ="SELECT $field FROM $table $where $order $limit";
		$result = $this -> dbConn -> query($this -> sql);
		
		if($result){
			while ($row = mysqli_fetch_object($result)) {
				$rows[] = $row;
			}
		}
		
		return $rows;
	}
	/*
	 * 插入
	 * $fields = array("key" => "value")
	 */
	public function insert($table, $fields, $where){
		$list = $this -> query($table, $fields, $where);
		$num = count($list);
		if($num > 0){
			$iid = -1;
		}else{
			$field = $this->getfield($fields, "key");
			$values = $this->getfield($fields, "value");
			
			$this->sql = "INSERT INTO $table($field) VALUES($values)";
			$result = $this -> dbConn -> query($this -> sql);
			$iid = $this ->insertId();
		}
		
		return $iid;
	}
	/*
	 * 更新
	 * $fields = array("key" => "value")
	 * 返回影响行数
	 */
	public function update($table, $fields, $where = ""){
		$where == "" ? $where : " WHERE $where";
		
		$field = $this->getfield($fields);
		$this->sql = "UPDATE $table SET $field".$where;
		$result = $this -> dbConn -> query($this -> sql);
		$num = $this ->rowNum();
		if($num == 0){
			$list = $this -> query($table,$fields,$where);
			$num = count($list);
			if($num > 0){
				$num = -1;//重复更新
			}
		}
		return $num;
	}
	/*
	 * 删除
	 * $fields = array("key" => "value")
	 * 返回影响行数
	 */
	public function del($table, $fields, $where = "",$bl = FALSE){
		$num = 0;
		if($bl){
			$where = $where == "" ? $where : " WHERE $where";
			$this->sql = "DELETE FROM $table".$where;
			$result = $this -> dbConn -> query($this -> sql);
			$num = $this ->rowNum();
		}
		else{
			$num = $this->update($table,$fields,$where);
		}
		return $num;
	}
	/*
	 * 分页
	 * $fields = array("key" => "value") 或 *
	 * 返回对象
	 */
	public function pagination($pageNo, $pageSize, $table, $fields = "*", $where = "", $order = ""){
		$pageNo = $pageNo ? $pageNo : 1;
		$pageSize = $pageSize ? $pageSize : 20;
		
		$list = $this->query($table,$fields,$where,$order);
		$num = count($list);
		$pageCount = ceil($num / $pageSize);
		$offset = ($pageNo - 1) * $pageSize;
		
		$limit ="$offset , $pageSize";
		
		$list = $this->query($table,$fields,$where,$order,$limit);
		
		$obj["pageCount"] = $pageCount;
		$obj["list"] = $list;
		return $obj;
	}
	/*
	 * 单条数据
	 * $fields = array("key" => "value")或 *
	 */
	public function oneData($table, $fields="*", $where=""){
		$list = $this->query($table, $fields, $where);
		$num = $this ->rowNum();
		$obj = $num > 0 ? $list[0] : array();
		return (object)$obj;
	}
}
?>