<?php
// LOAD CORE
require_once '../core.php';

sleep(2.0); // delay to show the loading process
?>

<h1>Geo location page</h1>
<p>js/geolocation.js requests location permissions and displayed the latitude and longitude.<br>
The latitude and longitude is automaticly updated when your position changes.</p>
<p>This is currently for demo purposes only, and the data is not stored or used.</p>
<p>
<a onclick="geolocation();return false;" href="noscript.php">GEO Location <span id="geostatus"></span></a>
<div id="geodata"></div>
</p>
