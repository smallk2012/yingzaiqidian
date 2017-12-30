<?php
class Callback{
	/*
	 * code
	 * 200正常返回
	 * 40000无效请求
	 */
	public static function json($ar){
		if(!is_array($ar)){
			$ar = self::ar(-100,"格式不对");
		}
		return json_encode((object)$ar,JSON_UNESCAPED_UNICODE);
	}
	
	public static function ar($code,$msg,$data = []){
		return array("code"=>$code,"msg"=>$msg,"data"=>(object)$data);
	}
	
}
?>