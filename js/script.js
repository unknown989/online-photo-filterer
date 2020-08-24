let valbrig = document.getElementById("slider-bright").value;
let valgray = document.getElementById("slider-gray").value;
let valsep = document.getElementById("slider-sepia").value;
let valopa = document.getElementById("slider-opacity").value;
let valsat = document.getElementById("slider-saturate").value;
let valcon = document.getElementById("slider-contrast").value;
let valblur = document.getElementById("slider-blur").value;
let isSepia = document.getElementById("sepia-check").checked;
let turnSepia = isSepia;
let isContrast = document.getElementById("contrast-check").checked;
let turnContrast = isContrast;
let sizes = []
let order = 0;
var success = true;
let defsvg = '<button class="btn" onclick="{}"><svg width="20px" height="20px" viewBox="0 0 16 16" class="bi bi-arrow-clockwise" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.17 6.706a5 5 0 0 1 7.103-3.16.5.5 0 1 0 .454-.892A6 6 0 1 0 13.455 5.5a.5.5 0 0 0-.91.417 5 5 0 1 1-9.375.789z"/><path fill-rule="evenodd" d="M8.147.146a.5.5 0 0 1 .707 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 1 1-.707-.708L10.293 3 8.147.854a.5.5 0 0 1 0-.708z"/></svg></button>'

function defaultImage() {
try{
document.getElementById("img").src = localStorage.getItem("filtered-image");
var nw = Math.floor((400*document.getElementById("img").width)/document.getElementById("img").height);
document.getElementById("img").height = 400;
document.getElementById("img").width = nw;
}catch{
	document.getElementById("img").src = "";
}
}

function imageShow() {
	var img = document.querySelector("input[id='upload']");
	var reader = new FileReader()
	reader.onload = function() {
		localStorage.setItem("filtered-image",reader.result);
		document.getElementById("img").src = reader.result;
		var nimg = new Image();
		nimg.onload = function() {
			var nw = Math.floor((400*nimg.width)/nimg.height);
			document.getElementById("img").width = nw;
			document.getElementById("img").height = 400;
			if(nw!= NaN || nw != nimg.width){
				success = true;
			}else{success=false}
			sizes[order] = {"order":order,"height":nimg.height,"width":nimg.width,"success":success,"newwidth":nw};
			order++;
		}
		nimg.src = reader.result;
		// var nw = Math.floor((400*document.getElementById("img").width)/document.getElementById("img").height);
		// document.getElementById("img").height = 400;
		// document.getElementById("img").width = nw;
		// console.log(nw)
	}
	reader.readAsDataURL(img.files[0])
}

function brightness() {
	valbrig = document.getElementById("slider-bright").value;
	document.getElementById("brightness").innerHTML = "Brightness :"+valbrig+"% "+defsvg.replace("{}","brigdef();");
	if(turnSepia){
		if (turnContrast) {
		document.getElementById("img").style = "filter:blur("+valblur+"px) sepia("+valsep+"%) contrast("+valcon+") saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
		}
		else{
		document.getElementById("img").style = "filter:blur("+valblur+"px) sepia("+valsep+"%) saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
	}
	}
	else{
		if (turnContrast) {
		document.getElementById("img").style = "filter:blur("+valblur+"px) contrast("+valcon+") saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
		}
		else{
		document.getElementById("img").style = "filter:blur("+valblur+"px) saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
	}
	}
	if(turnContrast){
		if (turnSepia) {
		document.getElementById("img").style = "filter:blur("+valblur+"px) sepia("+valsep+"%) contrast("+valcon+") saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
		}
		else{
		document.getElementById("img").style = "filter:blur("+valblur+"px) contrast("+valcon+") saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
	}
	}
	else{
		if (turnSepia) {
		document.getElementById("img").style = "filter:blur("+valblur+"px) sepia("+valsep+"%) saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
		}
		else{
		document.getElementById("img").style = "filter:blur("+valblur+"px) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
	}
	}
}

function grayscale() {
	valgray = document.getElementById("slider-gray").value;
	document.getElementById("grayscale").innerHTML = "Grayscale :"+valgray+"% "+defsvg.replace("{}","graydef();")
	if(turnSepia){
		if (turnContrast) {
		document.getElementById("img").style = "filter:blur("+valblur+"px) sepia("+valsep+"%) contrast("+valcon+") saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
		}
		else{
		document.getElementById("img").style = "filter:blur("+valblur+"px) sepia("+valsep+"%) saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
	}
	}
	else{
		if (turnContrast) {
		document.getElementById("img").style = "filter:blur("+valblur+"px) contrast("+valcon+") saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
		}
		else{
		document.getElementById("img").style = "filter:blur("+valblur+"px) saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
	}
	}
	if(turnContrast){
		if (turnSepia) {
		document.getElementById("img").style = "filter:blur("+valblur+"px) sepia("+valsep+"%) contrast("+valcon+") saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
		}
		else{
		document.getElementById("img").style = "filter:blur("+valblur+"px) contrast("+valcon+") saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
	}
	}
	else{
		if (turnSepia) {
		document.getElementById("img").style = "filter:blur("+valblur+"px) sepia("+valsep+"%) saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
		}
		else{
		document.getElementById("img").style = "filter:blur("+valblur+"px) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
	}
	}

}

function sepia() {
	valsep = document.getElementById("slider-sepia").value;
	document.getElementById("sepia").innerHTML = "Sepia :"+valsep+"% "+defsvg.replace("{}","sepdef();");
	// document.getElementById("img").style = "filter:blur("+valblur+"px) contrast("+valcon+") saturate("+valsat+"%) opacity("+valopa+"%) sepia("+valsep+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
	if(turnContrast){
	document.getElementById("img").style = "filter:blur("+valblur+"px) contrast("+valcon+") saturate("+valsat+"%) opacity("+valopa+"%) sepia("+valsep+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
	}
	else{
	document.getElementById("img").style = "filter:blur("+valblur+"px) sepia("+valsep+"%) saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
	}
}
function toggleSepia() {
	if (isSepia === true) {
	document.getElementById("sepia-div").style = "display:initial;";
	// document.getElementById("img").style = "filter:blur("+valblur+"px) contrast("+valcon+") saturate("+valsat+"%) opacity("+valopa+"%) sepia("+valsep+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";

	isSepia = false;
	turnSepia = true;
	if (turnContrast) {
		document.getElementById("img").style = "filter:blur("+valblur+"px) contrast("+valcon+") saturate("+valsat+"%) opacity("+valopa+"%) sepia("+valsep+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
		}
		else{
		document.getElementById("img").style = "filter:blur("+valblur+"px) saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
	}
	}
	else
	{
		document.getElementById("sepia-div").style = "display:none;";
		// document.getElementById("img").style = "filter:blur("+valblur+"px) contrast("+valcon+") saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
		isSepia = true;
		turnSepia = false;
		if (turnContrast) {
		document.getElementById("img").style = "filter:blur("+valblur+"px) contrast("+valcon+") saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
		}
		else{
		document.getElementById("img").style = "filter:blur("+valblur+"px) saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
	}
	}
}
function opacity() {
	valopa = document.getElementById("slider-opacity").value;
	document.getElementById("opacity").innerHTML = "Opacity :"+valopa+"% "+defsvg.replace("{}","opadef();")
	if(turnSepia){
		if (turnContrast) {
		document.getElementById("img").style = "filter:blur("+valblur+"px) sepia("+valsep+"%) contrast("+valcon+") saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
		}
		else{
		document.getElementById("img").style = "filter:blur("+valblur+"px) sepia("+valsep+"%) saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
	}
	}
	else{
		if (turnContrast) {
		document.getElementById("img").style = "filter:blur("+valblur+"px) contrast("+valcon+") saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
		}
		else{
		document.getElementById("img").style = "filter:blur("+valblur+"px) saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
	}
	}
	if(turnContrast){
		if (turnSepia) {
		document.getElementById("img").style = "filter:blur("+valblur+"px) sepia("+valsep+"%) contrast("+valcon+") saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
		}
		else{
		document.getElementById("img").style = "filter:blur("+valblur+"px) contrast("+valcon+") saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
	}
	}
	else{
		if (turnSepia) {
		document.getElementById("img").style = "filter:blur("+valblur+"px) sepia("+valsep+"%) saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
		}
		else{
		document.getElementById("img").style = "filter:blur("+valblur+"px) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
	}
	}
}
function saturate() {
	valsat = document.getElementById("slider-saturate").value;
	document.getElementById("saturate").innerHTML = "Saturate :"+valsat+"% "+defsvg.replace("{}","satdef();")
	if(turnSepia){
		if (turnContrast) {
		document.getElementById("img").style = "filter:blur("+valblur+"px) sepia("+valsep+"%) contrast("+valcon+") saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
		}
		else{
		document.getElementById("img").style = "filter:blur("+valblur+"px) sepia("+valsep+"%) saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
	}
	}
	else{
		if (turnContrast) {
		document.getElementById("img").style = "filter:blur("+valblur+"px) contrast("+valcon+") saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
		}
		else{
		document.getElementById("img").style = "filter:blur("+valblur+"px) saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
	}
	}
	if(turnContrast){
		if (turnSepia) {
		document.getElementById("img").style = "filter:blur("+valblur+"px) sepia("+valsep+"%) contrast("+valcon+") saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
		}
		else{
		document.getElementById("img").style = "filter:blur("+valblur+"px) contrast("+valcon+") saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
	}
	}
	else{
		if (turnSepia) {
		document.getElementById("img").style = "filter:blur("+valblur+"px) sepia("+valsep+"%) saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
		}
		else{
		document.getElementById("img").style = "filter:blur("+valblur+"px) saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
	}
	}
}
function contrast() {
	valcon = document.getElementById("slider-contrast").value;
	document.getElementById("contrast").innerHTML = "Contrast :"+valcon+"% "+defsvg.replace("{}","contdef();");
	if(turnSepia){
	document.getElementById("img").style = "filter:blur("+valblur+"px) contrast("+valcon+") saturate("+valsat+"%) opacity("+valopa+"%) sepia("+valsep+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
	}
	else{
	document.getElementById("img").style = "filter:blur("+valblur+"px) contrast("+valcon+") saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
	}
}
function toggleContrast() {
	if (isContrast === true) {
	document.getElementById("contrast-div").style = "display:initial;";
		if (turnSepia) {
		document.getElementById("img").style = "filter:blur("+valblur+"px) contrast("+valcon+") saturate("+valsat+"%) opacity("+valopa+"%) sepia("+valsep+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
		}
		else{
		document.getElementById("img").style = "filter:blur("+valblur+"px) contrast("+valcon+") saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
	}

	isContrast = false;
	turnContrast = true;
	}
	else
	{
		document.getElementById("contrast-div").style = "display:none;";
		// document.getElementById("img").style = "filter:blur("+valblur+"px) contrast("+valcon+") saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
		if (turnSepia) {
		document.getElementById("img").style = "filter:blur("+valblur+"px)saturate("+valsat+"%) opacity("+valopa+"%) sepia("+valsep+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
		}
		else{
		document.getElementById("img").style = "filter:blur("+valblur+"px)saturate("+valsat+"%) opacity("+valopa+"%) grayscale("+valgray+"%) brightness("+valbrig+"%)";
	}

		isContrast = true;
		turnContrast = false;
	}
}


function importImage() {
	document.getElementById("upload").click();
}

function brigdef() {
	document.getElementById("slider-bright").value = 100;
	brightness();
}
function contdef() {
	document.getElementById("slider-contrast").value = 0;
	contrast();
}

function satdef() {
	document.getElementById("slider-saturate").value = 100;
	saturate();
}
function sepdef() {
	document.getElementById("slider-sepia").value = 0;
	sepia();
}

function opadef() {
	document.getElementById("slider-opacity").value = 100;
	opacity();
}
function graydef() {
	document.getElementById("slider-gray").value = 0;
	grayscale();
}
function blurdef() {
	document.getElementById("slider-blur").value = 0;
	bluring();
}

brightness();
grayscale();
sepia();
opacity();
contrast();
saturate();
toggleContrast();
toggleSepia();