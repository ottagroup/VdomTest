<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>VdomTest</title>
<script type="text/javascript" src="assets/js/jquery.js"></script>
<script type="text/javascript" src="assets/js/jquery_ui.js"></script>
<script type="text/javascript" src="assets/js/core.js"></script>
<script type="text/javascript" src="assets/js/main.js"></script>
<script type="text/javascript" src="assets/js/geolocation.js"></script>
<link rel="stylesheet" type="text/css" href="assets/css/jquery_ui.css">
<link rel="stylesheet" type="text/css" href="assets/css/core.css">
</head>

<body>
<h3>VdomTest</h3>


<!--
These links use the core.js to load pages
#home loads ajax/home.php into id="home_page"
#test loads ajax/test.php into id="test_page"

Loading animations, visibility, errors etc are handled automaticly.
The default loading style is: .pageloading (see core.css)
The loading image needs to be: assets/img/loading.gif

The default error style is: .errorcell (see core.css)
-->
<a href="#home">Home</a> - <a href="#test">Test</a> 
<div id="home_page"></div>
<div id="test_page"></div>

<br>
<br>

<!--
GEO LOCATION
under construction
-->
<a onclick="geolocation();return false;" href="noscript.php">GEO Location <span id="geostatus"></span></a>
<div id="geodata"></div>

<br>
<br>

<!--
SUB LOADER
kind of hard to explain atm
but data2url.. edit the url of the page... and main.js loads stuff based on that.
The first thing in data2url acts as a group (main=points).. as in main being the group
when there are multiple elements with the same group (as bellow) it can swiths the visibility between both 

main.js is a mess atm.. but you only need to look at loadpageelem
-->
<a id="main_points_btn" onclick="data2url('main=points'); togglepageelem('main_points'); return false;" href="noscript.php">Sub loader</a>
 - 
<a id="main_blabla_btn" onclick="data2url('main=blabla'); togglepageelem('main_blabla'); return false;" href="noscript.php">Sub loader 2</a> 
 -
<a id="main_datatest_btn" onclick="data2url('main=datatest'); togglepageelem('main_datatest'); return false;" href="noscript.php">DATA TEST</a>
<div id="main_points"></div> 
<div id="main_blabla"></div>
<div id="main_datatest"></div>

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
