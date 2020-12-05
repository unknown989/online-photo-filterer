function download() {

	var effects = document.getElementById('img').style.filter;
	effects.replace(";"," ")
	var div = document.getElementById("cvs");
	/*div.height = document.getElementById("img").height;
	div.width = document.getElementById("img").width;*/
	div.height = window.real_img_height;
	div.width = window.real_img_width;
	var ctx = div.getContext("2d");
	ctx.filter = effects;

	var img = document.getElementById("img");

	ctx.drawImage(img,0,0,window.real_img_width,window.real_img_height);
	if(is.firefox()){
	var dt = div.toDataURL();
	document.getElementById("downloadlink").href = dt;
	
	document.getElementById("downloadlink").click();
	}
	else{
		var dt=div.toDataURL();
		function debugBase64(base64URL){
		    var win = window.open();
		    win.document.write('<iframe src="' + base64URL  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');}
		debugBase64(dt)	
	}

	/*var dt=div.toDataURL();
	function debugBase64(base64URL){
	    var win = window.open();
	    win.document.write('<iframe src="' + base64URL  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');}
	debugBase64(dt)	*/


}
