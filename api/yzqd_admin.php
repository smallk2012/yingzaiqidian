<?php
header("Content-type: text/html; charset=utf-8"); 
session_start();
define('ROOT_PATH', dirname(__FILE__));
define('DB_HOST', 'localhost'); //数据库服务器地址
define('DB_USER', 'root');  //数据库用户名
define('DB_PWD', 'yzqd,.cc');//数据库密码
define('DB_NAME', 'yzqd');  //数据库名称
define('DB_PORT', '3306');  //数据库端口

require_once ROOT_PATH.'/CcMySql.php'; //自动加载 class 文件
require_once ROOT_PATH.'/controler.php'; //自动加载 class 文件


$Token = isset($_REQUEST['token'])?$_REQUEST['token']:NULL;  

class Controler 
{
	public function login(){
		echo 'dddd';
	}
	public function blog(){
		$lid = "lid";//标签ID
		$tid = "tid";//类型ID
		$uid = "uid";//用户ID
		$title = "title";//标题
		$cont = "cont";//内容
		$cTime = "cTime";//创建时间
		$eTime = "eTime";//编辑时间
		
		if(Callback::isExist(array("acc"))){
			echo 'ccc';
		}
		else{
			echo Callback::json(MsgTip::$param_err);
		}
	}
}

?>