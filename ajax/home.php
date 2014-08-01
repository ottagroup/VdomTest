<?php
/* AJAX/HOME.PHP
last update: 01-08-2014
*/

// LOAD CORE
require_once '../core.php';

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
$data_array['page_text'] = 'HOME PAGE TEST 1234';

// LOAD AND GET VIEW 
$view = new view();
$html = $view->get('home',$data_array);

// OUTPUT HTML
echo $html;
?>
