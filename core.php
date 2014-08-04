<?php
/* CORE SCRIPT, used in all php pages */

// SHOW ERRORS
ini_set('display_errors', 1); error_reporting(E_ALL);

// SET CHARSET
header('Content-Type: text/html; charset=utf-8');
// make sure you set forms to charset => <form action="action.php" accept-charset="utf-8">

// SET TIMEZOME 
date_default_timezone_set('America/Los_Angeles'); 

// SET DEFINES
define("IS_INDEX",true); // to protect includes
define('DS', DIRECTORY_SEPARATOR);
if(empty($_SERVER['DOCUMENT_ROOT'])){ // root fix for sertain servers
   $_SERVER['DOCUMENT_ROOT'] = dirname(dirname(__FILE__));   
}
define('ROOT', $_SERVER["DOCUMENT_ROOT"] . DS);   
define('LIB' , ROOT . 'lib' . DS);
define('VIEW', ROOT . 'view' . DS);
define('AJAX', ROOT . 'ajax' . DS);
define('ASSETS', ROOT . 'assets' . DS);
define('DATA', ROOT . 'data' . DS);

// LIB LOADER (this instead of autoloader to prevent issues with other scripts)
/*
class name need to be the same as the file name without the lib_
$lib = new lib();
$lib->load('someclassname');  loads => lib_someclassname
$lib->load('someclassname2');  loads => lib_someclassname2
to access the class => $lib->someclassname->somefunction(vars);
to access the class => $lib->someclassname2->somefunction(vars);
*/
class lib{ 	
	public function __construct(){	

	}
	public function load($className){
		$classFile = LIB . $className . ".php"; 
        if(file_exists($classFile)){
            include_once($classFile);	
			$class_name = "lib_" . $className;	
			$this->$className = new $class_name;		
        }else{
			echo "error including lib file"; exit;
		}
	}
}

// VIEW LOADER
/*
grabs the contents of a view file and returns it... 
data should be a array with data will be printed in the view file
$view = new view();
$data_array = array();
$data_array['test'] = 'abc123';
$html = $view->get(somefilename,$data_array);
*/
class view{
	public function __construct(){	

	}
	public function get($fileName, $data){
		$viewFile = VIEW . $fileName . ".php"; 
        if(file_exists($viewFile)){
			ob_start();
            include_once($viewFile);	
			return ob_get_clean();	
        }else{
			echo "error including view"; exit;
		}
	}	
}
?>
