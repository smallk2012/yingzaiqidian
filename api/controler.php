<?php
	//时区
	date_default_timezone_set("Asia/Shanghai");
	//跨域
	//header("Access-Control-Allow-Origin: *");
	//编码
	header('Content-type: text/html;charset=utf-8');
	
	require_once './msgtip.php';
	require_once './callback.php';
	
	$C = 'Controler';
	$M = isset($_REQUEST['m'])?$_REQUEST['m']:NULL;  
	
	if($M != NULL && method_exists($C, $M)) 
	{
		$fun = new $C();  
    	$fun->$M();
	}
	else{
		echo Callback::json(MsgTip::$fail);
	}
?>