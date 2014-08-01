// GEO VARS
var geoid = '';
var geo = 'off';
var geolat = '';
var geolon = '';

$(document).ready(function(){	
	$("#geostatus").html('Off');
});

// GEO LOCATION  (geo on off)
function geolocation(onoff){	
	if(geo == 'off'){		
		if(navigator.geolocation){
			geo = 'on';
			$("#geostatus").html('On');
			$("#geodata").html('Getting GPS data.....');
			geoid = navigator.geolocation.watchPosition(geoposition,geoerror);
		}else{
			geo = 'off';
			alert("Geolocation is not supported by this browser.");
		}		
	}else{
		geo = 'off';
		$("#geostatus").html('Off');
		navigator.geolocation.clearWatch(geoid);
	}
	return false;
}

// GEO POSITION (location is in pos)
function geoposition(pos){
	
	// round it up... we dont need to know what room someone is in.
	var tmp_geolat = pos.coords.latitude.toFixed(4);
	var tmp_geolon = pos.coords.longitude.toFixed(4);
	
	if(tmp_geolat != geolat || tmp_geolon != geolon){ // if pos changed
		
		geolat = (pos.coords.latitude).toFixed(4);
		geolon = (pos.coords.longitude).toFixed(4);
		
		// check php file for cookie and if pos matches a location.
		// if location not found... show dialog and ask user to say where it is.. home, work, etc
		
	}	
	
	$("#geodata").html("Latitude: "+geolat.toString()+" Longitude: "+geolon.toString());
	
	

	
}

// GEO ERROR
function geoerror(error){
	switch(error.code){
	case error.PERMISSION_DENIED:
	  alert("User denied the request for Geolocation.")
	  break;
	case error.POSITION_UNAVAILABLE:
	  alert("Location information is unavailable.")
	  break;
	case error.TIMEOUT:
	  alert("The request to get user location timed out.")
	  break;
	case error.UNKNOWN_ERROR:
	  alert("An unknown error occurred.")
	  break;
	}
}
