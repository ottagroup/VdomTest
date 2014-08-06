/* JS/CORE.JS
- core script, containing all main functions for other js.
last update: 01-08-2014
*/

// DEF VARS
var ajax_dir = "/ajax/";

// PAGE VARS
var lastpage = "";
var loadedpages = new Array();
var current_page = "";
var pageget_array = new Array(); // contains url data (key=var)

	// DOC READY
	$(document).ready(function(){	
		// get page	
		var page = getpage(window.location.hash);	
		// set bold
		$('a[href="'+page+'"]').addClass('active');
		// set menu clicks
		$('#page_menu a').on('click', function(event){
			loadpage(this.hash);
		});		
		// load page
		loadpage(page);	
	});
	
	// GET PAGE (on load and url change)
	function getpage(page_hash){
		var page = '#home';
		// check extra page data
		if(page_hash.indexOf("&") >= 0){		
			var page_array = page_hash.split('&');
			page = page_array[0];				
			// check if its a loaded page
			var pagename = page.substr(1);
			if(loadedpages.indexOf(pagename) != -1){var pageloaded = true;}else{var pageloaded = false;}			
			// store aditional data...
			pageget_array = [];
			for(var i = 1; i < page_array.length; i++){			
				pagedata_array = page_array[i].split('=');
				var pagekey = pagedata_array[0];
				var pageval = pagedata_array[1];			
				pageget_array[pagekey] = pageval;											
			}
			// load page elements (if page is loaded)		
			if(pageloaded){loadpageelem(pageget_array);}		
		}else{
			if(page_hash){page = page_hash;}
		}	
		current_page = page;
		return page;
	}
	
	// PAGE LOAD DONE (if page is loaded)
	function pageloaddone(){
		loadpageelem(pageget_array);	
	}
	
	// CHECK URL
	function checkpageurl(){
		var page = getpage(window.location.hash);
		if(page && page != lastpage){
			loadpage(page);
		}
	}
	window.onhashchange = checkpageurl;
	
	// LOADPAGE
	function loadpage(page){	
		if(page != lastpage){ //change page	
			if(lastpage != ""){			
				$('#page_menu a[href="'+lastpage+'"]').removeClass('active');
				$(lastpage+"_page").slideUp("slow");	
			}
			$('#page_menu a[href="'+page+'"]').addClass('active');				
			lastpage = page;
			var pagename = page.substr(1);
			if(loadedpages.indexOf(pagename) == -1){ 
				pageloaded = false;	
				$(page+"_page").slideDown("slow");		
				loadedpages.push(pagename);			
				get2div([pagename,'page='+page,page+"_page",'','',false,true,'pageloading',pageloaddone]);			
			}else{$(page+"_page").slideDown("slow");}		
		}
	}
	
	// DATA2URL (add a get to the url.. &key=var)
	function data2url(data_array){		
		// check if multiple
		if(data_array.indexOf("&") >= 0){			
			var page_array = data_array.split('&');
			for(var i = 1; i < data_array.length; i++){		
				pagedata_array = page_array[i].split('=');
				var pagekey = pagedata_array[0];
				var pageval = pagedata_array[1];				
				if(pageget_array[pagekey] == pageval){ // if the same
					delete pageget_array[pagekey];
				}else{							
					pageget_array[pagekey] = pageval; // overwrite or add data
				}
			}		
		}else{
			pagedata_array = data_array.split('=');
			var pagekey = pagedata_array[0];
			var pageval = pagedata_array[1];				
			if(pageget_array[pagekey] == pageval){ // if the same
				delete pageget_array[pagekey];
			}else{							
				pageget_array[pagekey] = pageval; // overwrite or add data
			}
		}		
		// add hash data to string
		var hash_data = "";
		for(var key in pageget_array) {
			hash_data += '&'+key+'='+pageget_array[key];
		}
		// update url	
		window.location.hash = current_page+hash_data;	
		return false;	
	}

// GET2DIV VARS
var errorarrayindex = new Array();
var errorarraydata = new Array();
var working = false;
var workingarray = new Array();
	
	// GET2DIV (ajax get with loading animation and error handeling)
	// just loads, doesnt check visibility, loaded etc
	function get2div(arraydata){ // target, data, div, errorclass, errormsg, cache, async, loadstyle, callback, callbackdata	
		if(working){ //if bussy add to queue
			workingarray.push(arraydata);
			return;
		}
		working = true;
	
		if(arraydata.length < 4){ // if error link (get array from list)
			var index = errorarrayindex.indexOf(arraydata[0]);
			arraydata = errorarraydata[index];
			errorarrayindex.splice(index,1);
			errorarraydata.splice(index,1);
		}	
		
		var target = arraydata[0]; var data = arraydata[1]; var div = arraydata[2];
		var errorclass = arraydata[3]; var errormsg = arraydata[4];
		var cache = arraydata[5]; var async = arraydata[6];
		var loadstyle = arraydata[7];	
		var callback = arraydata[8];
		var callbackdata = arraydata[9];	
		
		if(typeof(target)==='undefined'){alert("Target not defined: "+target); return false;}	
		if(typeof(div)==='undefined'){alert("No return element: "+div); return false;}
		if(typeof(errormsg)==='undefined'){errormsg = false;}	
		if(typeof(errorclass)==='undefined'){errorclass = '';}else{errorclass = 'class="'+errorclass+'"';}
		cache = cache || false;	
		async = async || true;	
		loadstyle = loadstyle || false;
		callback = callback || false;
		
		if(loadstyle){$(div).html('<div class="'+loadstyle+'"><img src="assets/img/loading.gif"></div>');	
		}else{$(div).html('<div class="loading"><img src="assets/img/loading.gif"></div>');}
		
		if(typeof(data)==='undefined'){data = "";}else{data = "?"+data;}	
		$.ajax({
			type: "GET",
			url: ajax_dir+target+".php"+data,
			timeout: 25000,
			cache: cache,
			async: async,
			success: function(response){
				$(div).html(response);			
			},
			error: function(x, t, m){
				// store error					
				var errorindex = target+'/'+div;					
				if(errorarrayindex.indexOf(errorindex) == -1){ //if new					
					errorarrayindex.push(errorindex);						
					errorarraydata.push(arraydata);
				}
				if(errormsg){$(div).html('<div '+errorclass+'><a href="#" onclick="get2div([\''+errorindex+'\']);return false;">'+errormsg+'</a></div>');}
				else{$(div).html('<div class="errorcell"><a href="/" onclick="get2div([\''+errorindex+'\']);return false;"><h1>Error loading page content</h1><p>Please refresh the page or click here to try again<p></a></div>');}
			},
			complete: function(x, t){
				if(callback){callback(callbackdata);}
				if(workingarray.length > 0){ //if jobs in queue					
					var tmparraydata = workingarray[0];
					workingarray.splice(0,1);
					working = false;
					get2div(tmparraydata);
				}else{working = false;}				
			}
		});	
		
		return false;
	}

// TOGGLEDDIV AND SHOW/HIDE-DIV VARS
var toggleddivs = new Array();

	// SHOWDIV HIDEDIV (hides/shows show and hide class inside of div)
	function showdiv(div){	
		$('#'+div+" .hide").hide(); $('#'+div+" .show").fadeIn("slow");
		var toggledindex = toggleddivs.indexOf(div);
		if(toggledindex != -1){
			toggleddivs.splice(toggledindex,1);
		}
		return false;
	}
	function hidediv(div){	
		$('#'+div+" .show").hide(); $('#'+div+" .hide").fadeIn("slow");
		toggleddivs.push(div);
		return false;
	}
	
	//TOGGLEDIV (extends showdiv and hidediv)
	function togglediv(div){
		if(toggleddivs.indexOf(div) == -1){ 
			hidediv(div);
		}else{
			showdiv(div);
		}
		return false;
	}


// LOAD2DIV VARS
var loadeddivs = new Array();

// LOAD2DIV (simply loads stuff to a div and prevents unnecessary reloading)
function load2div(target,div,get,cache){
	if(typeof(cache)==='undefined'){cache = true;}else{cache = false;}
	if(cache){
		if(loadeddivs.indexOf(div) == -1){	
			loadeddivs.push(div);	
			if(typeof(get)==='undefined'){get = '';}	
			get2div([target,get,'#'+div,'','',false,true]);		
		}
	}else{
		if(typeof(get)==='undefined'){get = '';}	
		get2div([target,get,'#'+div,'','',false,true]);	
	}
	return false;	
}

// TOGGLE PAGE ELEMENT
function togglepageelem(elem,boldbtn){	
	if(typeof(boldbtn)==='undefined'){boldbtn = false;}else{boldbtn = true;}
	if($('#'+elem).is(':visible')){ //hide
		$('#'+elem).slideUp("slow");		
		if(boldbtn){$('#'+elem+'_btn').removeClass('bold');}	
	}else{ // show
		$('#'+elem).slideDown("slow");	
		if(boldbtn){$('#'+elem+'_btn').addClass('bold');}
	}
}

// HIDE PAGE ELEMENT (used by loadpageelem)
// if part of a group we use this to search and hide the other elements
function hidepageelems(elemhide, elemignore){ 
	$('[id^='+elemhide+']').each(function(){	
		// we loop true all, divs, buttons etc	
		var tmp_id = $(this).attr('id');			
		// if ignore button
		if(tmp_id == elemignore+'_btn'){
			$('#'+tmp_id).addClass('bold'); //bold					
		// if other button
		}else if((tmp_id.substr(-3)) == 'btn'){
			$('#'+tmp_id).removeClass('bold'); //remove bold			
		// if ignore div
		}else if(tmp_id == elemignore){
			$('#'+tmp_id).slideDown("slow");		
		// if other div	
		}else{
			$('#'+tmp_id).slideUp("slow");			
		}
	}); 	
}

// TOOLTIP (set tooltip on items with tooltip class)
$(document).tooltip({items: ".tooltip"});
