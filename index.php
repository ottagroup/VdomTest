<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>VDomina JP Alpha 0.5</title>
<script type="text/javascript" src="assets/js/jquery.js"></script>
<script type="text/javascript" src="assets/js/jquery_ui.js"></script>
<script type="text/javascript" src="assets/js/core.js"></script>
<script type="text/javascript" src="assets/js/main.js"></script>
<script type="text/javascript" src="assets/js/geolocation.js"></script>
<script type="text/javascript" src="assets/js/session.js"></script>
<link rel="stylesheet" type="text/css" href="assets/css/jquery_ui.css">
<link rel="stylesheet" type="text/css" href="assets/css/core.css">
<link rel="stylesheet" type="text/css" href="assets/css/main.css">
</head>

<body>
<div id="header">
    <div id="left">
    	<h1>VDomina JP Alpha 0.5</h1>
    </div>
    <div id="right">
    	<div style="background-color:#CCC">
        	Welcome name   <br>     
            You have<div id="points"></div>points so far     
            <script type="text/javascript">
                load2div('points','points');
            </script>           
        </div>    	
    </div>
</div>
        
<div id="menu">
	<span id="page_menu">
        <a href="#home">Home</a>
        <a href="#geo">Geo</a>
        <a href="#shdivs">Show/hide divs</a> 
        <a href="#subload">Sub loading</a> 
        <a href="#data">FFDB data</a> 
        <a href="#session">Session</a> 
        <a href="#i_dont_exist">Error</a>
    </span>
	<a onclick="load2div('points','points','',false); return false;" href="noscript.php">Reload points</a>
</div>    
 
<div id="content">
    <div id="home_page"></div>
    <div id="geo_page"></div>
    <div id="shdivs_page"></div>
    <div id="subload_page"></div>
    <div id="data_page"></div>
    <div id="session_page"></div>
    <div id="i_dont_exist_page"></div>
</div>

<div id="footer">&nbsp;</div>



<!--
Main dialog
used for all jquery_ui dialog messages
title, contents and visibility get handled by the java code
-->
<div id="main_dialog" title="Main dialog" style="display:none;"></div>

<!--
Loading image
this is only here as a pre-load (its not used by any java code)
-->
<div style="display:none"><img src="assets/img/loading.gif"></div>   

</body>
</html>
