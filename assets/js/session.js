// ADD TEXT VARS
var addtext_bussy = false;
var addtext_array = new Array();
	
	// ADD TEXT
	function addtext(arraydata){	
		if(addtext_bussy){ //if bussy add to queue
			addtext_array.push(arraydata);
			return;
		}
		addtext_bussy = true;
		
		var id = arraydata[0];
		var text = arraydata[1];
		
		var delay = arraydata[2];
		delay = delay || 1;	
		delay = delay * 1000;
		
		$("#session_text").append( '<div id="'+id+'"></div>' ); // add div		
		var elem = $('#'+id);
		var text_len = text.length;
		elem.text('|');
		var char = 0;
		var timeout;
		
		(function type_anim() {   
			var humanize = Math.round(Math.random() * (200 - 30)) + 1;
			timeout = setTimeout(function(){
				char++;
				var type = text.substring(0, char);
				elem.text(type + '|');
					
				if(char == text_len){ // finished
					elem.text(elem.text().slice(0, -1)); 					
					
					if(addtext_array.length > 0){ //if jobs in queue					
						var tmp_addtext_array = addtext_array[0];
						addtext_array.splice(0,1);						
						setTimeout(function(){addtext_bussy = false; addtext(tmp_addtext_array);}, delay);
						
					}else{addtext_bussy = false;}	
									
					$('#session_text').scrollTop($('#session_text')[0].scrollHeight);								
					clearTimeout(timeout);
				}else{
					type_anim();	
				}
			}, humanize);
		}());
	}
