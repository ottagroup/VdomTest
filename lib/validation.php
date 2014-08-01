<?php if(!defined("IS_INDEX")){echo 'Access Denied'; exit;}

class lib_validation{
	
	public function __construct(){
		
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
