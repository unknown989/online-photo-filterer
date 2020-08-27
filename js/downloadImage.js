function download() {
	console.log("Running...")
	var effects = document.getElementById('img').style.filter;
	effects.replace(";"," ")
	var div = document.getElementById("cvs");
	div.height = document.getElementById("img").height;
	div.width = document.getElementById("img").width;
	var ctx = div.getContext("2d");
	ctx.filter = effects;

	var img = document.getElementById("img");

	ctx.drawImage(img,0,0,img.width,img.height);

	var dt = div.toDataURL()

	document.getElementById("downloadlink").href = dt;
	
	document.getElementById("downloadlink").click();

}