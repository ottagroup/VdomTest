var visiblepageelem = new Array();

// PAGE ELEMENT VISIBILITY (check if visible and set/unset visibility)
function pageelemvisible(elem){
	var visiblepageelemindex = visiblepageelem.indexOf(elem);
	if(visiblepageelemindex == -1){ //invisible
		visiblepageelem.push(elem); // add to array
		return true;
	}else{ //visible
		visiblepageelem.splice(visiblepageelemindex,1); // remove from array
		return false;
	}	
}
		
// TOGGLE PAGE ELEMENT
function togglepageelem(elem){	
	if(pageelemvisible(elem)){
		$('#'+elem).slideUp("slow");
	}else{
		$('#'+elem).slideDown("slow");		
	}
}

// LOAD PAGE ELEMENT (triggered by url change from getpage)
// shows and hides elements (only triggers on change...)
function loadpageelem(getarray){	
	

	// webfileedit
	if(getarray['main']){		
	
		if(getarray['main'] == 'points'){					
			load2div('subload/test','main_points'); // only loads stuff to div... no effects (slide show etc)
			hidepageelem('main_','main_points'); //hide,ignore
			$('#main_points').slideDown("slow");	
					
		}else if(getarray['main'] == 'blabla'){					
			load2div('subload/test2','main_blabla'); // only loads stuff to div... no effects (slide show etc)
			hidepageelem('main_','main_blabla'); //hide,ignore
			$('#main_blabla').slideDown("slow");	
			
		}else if(getarray['main'] == 'datatest'){					
			load2div('data','main_datatest'); // only loads stuff to div... no effects (slide show etc)
			hidepageelem('main_','main_datatest'); //hide,ignore
			$('#main_datatest').slideDown("slow");			
		}
	}else{
		
	}
	
	
	for(var key in getarray) {
		console.log('key'+key);
	}
	

	return false;	
}

// HIDE PAGE ELEMENT (used by loadpageelem)
// if part of a group we use this to search and hide the other elements
function hidepageelem(elemhide, elemignore){ 
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
			
			//alert('ignore div => '+tmp_id);
			//$('#'+tmp_id).slideDown("slow");
		
		// if other div	
		}else{
			$('#'+tmp_id).slideUp("slow");			
		}
		console.log("search = "+$(this).attr('id'));
	}); 	
}
