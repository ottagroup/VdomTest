<?php if(!defined("IS_INDEX")){echo 'Access Denied'; exit;}

class lib_validation{
	
	public function __construct(){
		
    }
	
	// UUID
	public function uuid($uuid){	
		if(preg_match("/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i", $uuid)){
			return TRUE;
		}
		return FALSE;
	}
	
	// NUMBER
	public function number($num){
		if(is_numeric($num)){
			return TRUE;
		}
		return FALSE;		
	}
	
	// ASCII 
	public function ascii($data){
		if(!mb_detect_encoding($data, 'ASCII', true)){
			return FALSE;				
		}
		return TRUE;
	}
	
	// ABC
	public function abc($data){		
		if(preg_match("/^[a-zA-Z]+$/", $data) && $data != ""){return TRUE;}
		return FALSE;
	}
	
	// ABC09
	public function abc09($data){		
		if(preg_match("/^[a-zA-Z0-9]+$/", $data) && $data != ""){return TRUE;}
		return FALSE;
	}
}
