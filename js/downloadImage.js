function download() {

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
	var url ="https://foregoing-flowery-hail.glitch.me/upimg/?original_photo="+document.getElementById("img").src+"&filtered_image"+dt;
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if(JSON.parse(xhttp.responseText).status ==200){
		document.getElementById("downloadlink").click();
	}else{
		alert("Failed")
	}
	xhttp.open("GET", url, true);
	xhttp.send();
}

}