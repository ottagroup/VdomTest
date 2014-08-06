<h1>Sub loading page</h1>

<p>This page kind of does the same as the main pages system.
However its a litte more complicated and is designed for loading elements into a page.<br>
Also note the url of the page when using the sub menu.<br>
This function does as much as posible automaticly, however the code inside ja/main.js needs to be edited in most cases.<br>
See view/subload.php and js/main.js</p>


<p>
<a id="main_1_btn" onclick="data2url('main=1'); togglepageelem('main_1',true); return false;" href="noscript.php">Sub loader 1</a>
 - 
<a id="main_2_btn" onclick="data2url('main=2'); togglepageelem('main_2',true); return false;" href="noscript.php">Sub loader 2</a> 
 -
<a id="main_3_btn" onclick="data2url('main=3'); togglepageelem('main_3',true); return false;" href="noscript.php">Sub loader 3</a> 
 -
<a id="main_4_btn" onclick="data2url('main=4'); togglepageelem('main_4',true); return false;" href="noscript.php">Sub loader error</a> 
</p>

<div id="main_1"></div> 
<div id="main_2"></div>
<div id="main_3"></div>
<div id="main_4"></div>
