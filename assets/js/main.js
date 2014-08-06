/*
FUNCTIONS THAT CAN BE USED HERE.

- load2div('target', div);
loads stuff into a div (with loading animation, error handeling etc)
target = the location of the php file inside the ajax folder (without .php extension) ex: folder/test

- hidepageelements('search','ignore');
hides all divs that match the search except for the ignore
includes button styling (buttons on the page need to end with _btn)
search = part of the div to seach for
ignore = the full name of the div to ignore
*/

// LOAD PAGE ELEMENT (triggered sub-hash url change, not triggered is no sub-hash present)
function loadpageelem(getarray){	
	
	if(getarray['main']){	
		if(getarray['main'] == '1'){					
			load2div('subload/1','main_1'); 
			hidepageelems('main_','main_1'); 
					
		}else if(getarray['main'] == '2'){					
			load2div('subload/2','main_2');
			hidepageelems('main_','main_2'); 
		
		}else if(getarray['main'] == '3'){					
			load2div('subload/3','main_3');
			hidepageelems('main_','main_3'); 
			
			
		}else if(getarray['main'] == '4'){	// error demo.. loading a page that doesnt exist				
			load2div('idontexist','main_4'); 
			hidepageelems('main_','main_4');
		
		}
	}else{
		
	}
	return false;	
}
