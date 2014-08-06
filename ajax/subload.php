<?php
/* AJAX/TEST.PHP
last update: 01-08-2014
*/

// LOAD CORE
require_once '../core.php';

sleep(2.0); // delay to show the loading process

// DATA ARRAY 
$data_array = array();

/*
- set db connection
- use a lib to do stuff... like get contents or so
	$lib = new lib();
	$lib->load('getpage');  loads: lib_get
	$page_text = $lib->getpage->text('home');
	add $page_text to the $data_array so we can use it in the view	
*/
$data_array['page_text'] = 'TEST PAGE TEST 1234';

// LOAD AND GET VIEW 
$view = new view();
$html = $view->get('subload',$data_array);

// OUTPUT HTML
echo $html;
?>
