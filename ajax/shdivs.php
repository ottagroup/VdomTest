<?php
// LOAD CORE
require_once '../core.php';

sleep(2.0); // delay to show the loading process
?>

<h1>Show/hide divs page</h1>
<p>A simple way to hide/show part of a page.</p>

<p>
<div id="showhide_parrent">
	<div class="show">       
		<p>This text is inside a sub div with the class show.<br>             
        When you <a onclick="hidediv('showhide_parrent');return false;"><b>click here</b></a> the div with the class show will be hidden and the div with the class hide will be shown.
        Or in other words, the show div gets replaced by the hide div.<br>   
        This could be for example used to show and hide control panels.</p> 
    </div>
    
    <div class="hide">
    	<p>This text is inside a sub div with the class hide.
    	<a onclick="showdiv('showhide_parrent');return false;"><b>Click here</b></a> to show the show div again</p>
    </div>
</div>
</p>

<p>To show/hide the divs outside of the parrent div <a onclick="togglediv('showhide_parrent');return false;"><b>click here</b></a>.</p>
