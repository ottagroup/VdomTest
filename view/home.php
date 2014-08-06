<h1>Home page</h1>
<p>
This page is loaded by js/core.js.<br>
This and the other pages are loaded automaticly based on links and divs on index.php.
</p>
<p>The link with href=&quot;#home&quot; loades ajax/home.php into the div with id=&quot;home_page&quot;.
</p>
<p>  The text you see here however is not in ajax/home.php but is loaded from a view file view/home.php.
  <br>
The view file system is there to split html/contents and php code.<br>
ajax/home.php processes all data and sends the result in a array to view/home.php.<br>
view/home.php simply prints the data from the data[] array.</p>
<p>Using a view file is optional and the file can be specified. <br>
Alternatively it can be used to get html blocks that are used true out the system.</p>

<?php echo $data['page_text']; ?>
