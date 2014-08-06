<?php
/* AJAX/TEST.PHP
last update: 04-08-2014
*/

// LOAD CORE
require_once '../core.php';

sleep(2.0); // delay to show the loading process

// DATA ARRAY 
$data_array = array();

// FFDB
$lib = new lib();
$lib->load('ffdb'); 
$result = $lib->ffdb->get_array('testdb.txt');
$data_array['full'] = $result;

// LOAD AND GET VIEW 
$view = new view();
$html = $view->get('data',$data_array);

// OUTPUT HTML
echo $html;
?>
