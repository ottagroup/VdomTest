<?php
/* AJAX/HOME.PHP
last update: 01-08-2014
*/

// LOAD CORE
require_once '../core.php';

sleep(2.0); // delay to show the loading processs
?>
<h1>Session page</h1>
<div style="background-color:#CCC; width:200px; height:100px; text-align:center; padding-top:90px;">Picture</div>
<p><div id="session_text" style="overflow-y:scroll; white-space:pre"></div></p>

<script type="text/javascript">
// id (for div that gets inserted), text, delay
addtext(['start','this is the start text of a session.']);
addtext(['1','this is some more text.',2]);
addtext(['2','and this here is even more text.',4]);

addtext(['3','blabla blabla']);
addtext(['4','blabla blabla']);
addtext(['5','blabla blabla']);
addtext(['6','blabla blabla']);
addtext(['7','blabla blabla']);
addtext(['8','blabla blabla']);
addtext(['9','blabla blabla']);
addtext(['10','blabla blabla']);

/*
This text would be loaded using a ajax get (function still missing).
And addtext would be triggered by a callback from the ajax get.
*/
</script> 
