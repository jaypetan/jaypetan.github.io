var gunType = ["classic", "sheriff", "spectre", "vandal", "phantom"];
var gunSkin = ["no skin", "red", "sakura", "prime", "glitchpop"];

window.onload = function(){
	var typeSel = document.getElementById("gunType");
	var skinSel = document.getElementById("gunSkin");
			
	for(var i = 0; i < gunType.length; i++){
        typeSel.options[typeSel.options.length] = new Option(gunType[i], gunType[i]);
    }
    for(var j = 0; j < gunSkin.length; j++){
        skinSel.options[skinSel.options.length] = new Option(gunSkin[j], gunSkin[j]);
    }
}