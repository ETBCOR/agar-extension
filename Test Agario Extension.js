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

	//Edit the size of of spectate and login button. 
	$("#settings").replaceWith('<div id="settings" class="checkbox" style="margin-top: 0px; margin-bottom: 0px;">   <div>	   <button onclick="spectate(); return false;" class="btn btn-warning btn-spectate btn-needs-server" data-itr="spectate" style="float: left; margin-left: 0px;">Spectate</button>	  <button onclick="logout(); return false;" class="btn btn-danger btn-logout" data-itr="logout" style="float: right; margin-left: 0px;">Logout</button>   </div>  <div>	   <div id="locationKnown">			<select id="region" class="form-control" onchange="setRegion($(\'#region\').val());" required="">			   <option selected="" disabled="" value="" data-itr="region_select"> -- Select a Region -- </option>			  <option value="US-Atlanta" data-itr="region_north_america">North America (69978 players)</option>			   <option value="BR-Brazil" data-itr="region_south_america">South America (31989 players)</option>				<option value="EU-London" data-itr="region_europe">Europe (45818 players)</option>			  <option value="RU-Russia" data-itr="region_russia">Russia (6140 players)</option>			   <option value="TK-Turkey" data-itr="region_turkey">Turkey (4747 players)</option>			   <option value="JP-Tokyo" data-itr="region_east_asia">East Asia (2977 players)</option>			  <option value="CN-China" data-itr="region_china">China (3064 players)</option>			  <option value="SG-Singapore" data-itr="region_oceania">Oceania (3626 players)</option>		  </select>	   </div>	  <div id="options" style="margin: 6px; font-size: 12px;">			<label><input type="checkbox" onchange="setSkins(!$(this).is(\':checked\'));"><span data-itr="option_no_skins">No skins</span></label>		  <label><input type="checkbox" onchange="setNames(!$(this).is(\':checked\'));"><span data-itr="option_no_names">No names</span></label>		  <label><input type="checkbox" onchange="setColors($(this).is(\':checked\'));"><span data-itr="option_no_colors">No colors</span></label>			<label><input type="checkbox" onchange="setShowMass($(this).is(\':checked\'));"><span data-itr="option_show_mass">Show mass</span></label>		  <label><input type="checkbox" onchange="setDarkTheme($(this).is(\':checked\'));"><span data-itr="option_dark_theme">Dark theme</span></label>		   <label><input type="checkbox" onchange="setSkipStats($(this).is(\':checked\'));"><span data-itr="option_skip_stats">Skip stats</span></label>	   </div>  </div>  <br clear="both"></div>');
	$(".btn-logout").css({"width": "152.5px", "margin-bottom": "12px"});
	$(".btn-spectate").css({"width": "152.5px"});

	//Make sure when you login it re-enables settings menu. 
	$(".btn-login.btn-fb").replaceWith('<button onclick="toggleSettings(); facebookLogin(); return false;" class="col-lg-12 col-md-12 btn btn-primary btn-login btn-fb" style=""><span class="social social-facebook fb-icon"></span><span class="btn-text" data-itr="menu_login_facebook">Sign in with Facebook</span></button>');
	$("gplusLogin").replaceWith('<button onclick="toggleSettings();" id="gplusLogin" class="col-lg-12 col-md-12 btn btn-primary btn-gplus btn-login"><span class="gplus-icon"></span><span class="btn-text" data-itr="menu_login_google">Sign in with Google</span></button>');

	//zoom
	window.agar.minScale = -30;

	//draws grid, true = yes, and false = no
	window.agar.drawGrid = false;

}