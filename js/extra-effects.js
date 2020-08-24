function bluring() {
	valblur = document.getElementById("slider-blur").value;

	document.getElementById("blur").innerHTML = document.getElementById("blur").innerHTML.replace("{}",valblur);
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

bluring();
