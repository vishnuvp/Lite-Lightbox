$(document).ready(
function() {

$("a[rel=ebox]").click(function(event){ if(launchBox($(this))) event.preventDefault();});

$(document).on('click','#ebox-x', function(){$("#ebox-container").fadeOut("slow",function(){$("#ebox-overlay *").remove();$("#ebox-overlay").remove();});});

$(document).keyup(function(e){
 if (e.keyCode == 27) { 
 $("#ebox-container").fadeOut("slow",function(){$("#ebox-overlay *").remove();$("#ebox-overlay").remove();});
 }   
});
}
);


function launchBox(jQOb) {
  
	var filename = jQOb.attr('href');
	var title = jQOb.text();
	var extn = filename.split('.').pop();
	var addOnMarkUp = "Easybox Failed To Load";
	if(extn == 'jpg' ||extn == 'png' ||extn == 'gif' ||extn == 'bmp') {
	  addonMarkUp = '<img src="'+ filename + '" alt="Image failed to load"/>';
	  $("#ebox-container").css('height','auto'); 
	}
	
	else if(extn == 'pdf') {
			   addonMarkUp = '<object height="95%" width="100%" type="application/pdf" data="'+ filename +'" id="pdf_content"><param value="'+ filename +'" name="src"/><param value="transparent" name="wmode"/><p>PDF failed to load</p></object>';
	}
	
	var markUp = '<div id="ebox-overlay"><div id="ebox-container"><div id="ebox-header">' + title + '<span id="ebox-x"></span></div><div id="ebox-content">' + addonMarkUp + '</div><div id="ebox-footer"></div></div></div>';
	$('body').prepend(markUp);
	
	$('#ebox-container, #ebox-overlay').fadeIn('slow',function(){
		$('#ebox-container *').fadeIn('200');
	});
	filename = "";
	return true;
	
	}
