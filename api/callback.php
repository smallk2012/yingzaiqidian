<?php
class Callback{
	/*
	 * code 编码
	 * msg 信息
	 * data 数据
	 */
	public static function json($tip, $data = [], $msg = ""){
		$ar = array("code"=>$tip[0],"msg"=>($msg == "" ? $tip[1] : $msg),"data"=>(object)$data);
		return json_encode((object)$ar,JSON_UNESCAPED_UNICODE);
	}
	/*
	 * 请求方式
	 */ 
	private static $GET = "GET";
	private static $POST = "POST";
	/*
	 *判断需求字段是否存在 
	 */
	public static function isExist($fields, $ajaxType = ""){
		
		$ajaxType = $ajaxType == "" ? self::$GET : self::$POST;
		
		$bl = true;
		foreach($fields as $key){
			if(is_null(self::param($key,$ajaxType))){
				$bl = false;
					break;
			}
		}
		return $bl;
	}
	/**
	 * 获取参数
	 */
	public static function param($key, $ajaxType){
		$value = NULL;
		if($ajaxType == self::$GET){
			if(isset($_GET[$key])){
				$value = $_GET[$key];
			}
		}
		else{
			if(isset($_POST[$key])){
				$value = $_POST[$key];
			}
		}
		return $value;
	}
}
?>