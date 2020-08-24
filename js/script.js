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
var success = true
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
	document.getElementById("brightness").innerHTML = document.getElementById("brightness").innerHTML.replace("{}",valbrig);
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
	document.getElementById("grayscale").innerHTML = document.getElementById("grayscale").innerHTML.replace("{}",valgray);
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
	document.getElementById("sepia").innerHTML = document.getElementById("sepia").innerHTML.replace("{}",valsep)
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
	document.getElementById("opacity").innerHTML = document.getElementById("opacity").innerHTML.replace("{}",valopa);
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
	document.getElementById("saturate").innerHTML = document.getElementById("saturate").innerHTML.replace("{}",valsat);
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
	document.getElementById("contrast").innerHTML = document.getElementById("contrast").innerHTML.replace('{}',valcon);
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

brightness();
grayscale();
sepia();
opacity();
contrast();
saturate();
toggleContrast();
toggleSepia();

function importImage() {
	document.getElementById("upload").click();
}


function defaultValue(elementId,sliderId,defaultVal,elementFunction) {
document.getElementById(elementId).addEventListener("click",function(e) {
	document.getElementById(sliderId).value = defaultVal;
	if (elementId.includes("bright")) {
		brightness();
	}
	else if(elementId.includes("opacity")) {
		opacity();
	}
	else if(elementId.includes("sepia")) {
		sepia();
	}
	else if(elementId.includes("saturate")) {
		saturate();
	}
	else if(elementId.includes("contrast")) {
		contrast();
	}else if(elementId.includes("blur")) {
		blur();
	}
	else{
		grayscale();
	}
})
}


defaultValue("brightnessdefault","slider-bright",100,brightness)
defaultValue("opacitydefault","slider-opacity",100,opacity)
defaultValue("sepiadefault","slider-sepia",0,sepia)
defaultValue("saturatedefault","slider-saturate",0,saturate)
defaultValue("contrastdefault","slider-contrast",0,contrast)
defaultValue("blurdefault","slider-blur",100,blur)
defaultValue("grayscaledefault","slider-gray",0,grayscale)