// ==UserScript==
// @name		 Agar.io Extension Test
// @namespace	http://tampermonkey.net/
// @version	  0.1
// @description  Learning to make (agar.io) userscripts!
// @author	   Critical Split
// @match		http://agar.io/*
// @match		https://agar.io/*
// @match		http://agar.io/?gamepad
// @match		https://agar.io/?gamepad
// @require	  http://pastebin.com/raw/QrMULMQV
// @run-at	   document-start
// @grant		none
// ==/UserScript==

//waits for the page to load
window.onload = function() {

	//Add gamepad side-panel.
	$(".agario-promo").replaceWith('<div class="agario-panel agario-side-panel" style="padding-left: 15px; padding-bottom: 15px; padding-right: 15px;"><h4 style="text-align: center;">Gamepad Mode</h4><button class="btn btn-gamepad">Gamepad Mode</button><button class="btn btn-no-gamepad">Regular Mode</button></div>');
	$(".btn-gamepad").on('click', function () {window.location = 'http://www.agar.io/?gamepad'});
	$(".btn-gamepad").css({"width": "190px", "margin-bottom": "7.5px", "color": "#fff", "background-color": "#A901DB", "border-color": "#8904B1"});
	$(".btn-no-gamepad").on('click', function () {window.location = 'http://www.agar.io/'});
	$(".btn-no-gamepad").css({"width": "190px", "color": "#fff", "background-color": "#D7DF01", "border-color": "#AEB404"});

	//Move profile panel. 
	$(".btn-gamepad").parent().before($(".agario-profile-panel"));
	$(".agario-profile-panel").css({"float": "left"});

	//Remove crap.
	$("#agarYoutube").remove();
	$(".fb-like").remove();
	toggleSettings();
	$(".glyphicon").parent().remove();
	$(".btn-play").css({"width": "320.333px", "margin-left": "0px"});
	$("#tags-container").remove();
	$("#instructions").remove();
	$("hr").remove();
	$("small.text-muted").remove();

}