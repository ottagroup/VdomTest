<?php if(!defined("IS_INDEX")){echo 'Access Denied'; exit;}

// FLAT FILE DATABASE
class lib_ffdb{
	
	private $dbdata = array();
	
	// GET_ARRAY (get file and return array)
	public function get_array($file){		
		$handle = fopen(DATA.$file, "r");
		if($handle) {
			while(($line = fgets($handle)) !== false){
				$linedata = explode('=', $line, 2);
				if(isset($linedata[1])){
					$this->dbdata[trim($linedata[0])] = trim($linedata[1]);
				}
			}
		}else{
			echo 'ERROR: file not found.'; exit;
		} 
		fclose($handle);	
		
		return $this->dbdata;
	}
	
	
}
