// ==UserScript==
// @name         Agar.io Extension Test
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Learning to make (agar.io) userscripts!
// @author       Critical Split
// @match        http://agar.io/
// @require      http://pastebin.com/raw/QrMULMQV
// @run-at       document-start
// @grant        none
// ==/UserScript==

//waits for the page to load
window.onload = function() {

    $(".agario-promo").parent().remove();
    $("#agarYoutube").remove();
    $(".fb-like").remove();
    toggleSettings();
    $(".glyphicon").parent().remove();
    $(".btn-play").css({"width": "320.333px", "margin-left": "0px"});
    $("#tags-container").remove();
    $("#instructions").remove();
    $("hr").remove();
    $("small.text-muted").remove();    $("#settings").replaceWith('<div id="settings" class="checkbox" style="margin-top: 0px; margin-bottom: 0px;">   <div>       <button onclick="spectate(); return false;" class="btn btn-warning btn-spectate btn-needs-server" data-itr="spectate" style="float: left; margin-left: 0px;">Spectate</button>      <button onclick="logout(); return false;" class="btn btn-danger btn-logout" data-itr="logout" style="float: right; margin-left: 0px;">Logout</button>   </div>  <div>       <div id="locationKnown">            <select id="region" class="form-control" onchange="setRegion($(\'#region\').val());" required="">               <option selected="" disabled="" value="" data-itr="region_select"> -- Select a Region -- </option>              <option value="US-Atlanta" data-itr="region_north_america">North America (69978 players)</option>               <option value="BR-Brazil" data-itr="region_south_america">South America (31989 players)</option>                <option value="EU-London" data-itr="region_europe">Europe (45818 players)</option>              <option value="RU-Russia" data-itr="region_russia">Russia (6140 players)</option>               <option value="TK-Turkey" data-itr="region_turkey">Turkey (4747 players)</option>               <option value="JP-Tokyo" data-itr="region_east_asia">East Asia (2977 players)</option>              <option value="CN-China" data-itr="region_china">China (3064 players)</option>              <option value="SG-Singapore" data-itr="region_oceania">Oceania (3626 players)</option>          </select>       </div>      <div id="options" style="margin: 6px; font-size: 12px;">            <label><input type="checkbox" onchange="setSkins(!$(this).is(\':checked\'));"><span data-itr="option_no_skins">No skins</span></label>          <label><input type="checkbox" onchange="setNames(!$(this).is(\':checked\'));"><span data-itr="option_no_names">No names</span></label>          <label><input type="checkbox" onchange="setColors($(this).is(\':checked\'));"><span data-itr="option_no_colors">No colors</span></label>            <label><input type="checkbox" onchange="setShowMass($(this).is(\':checked\'));"><span data-itr="option_show_mass">Show mass</span></label>          <label><input type="checkbox" onchange="setDarkTheme($(this).is(\':checked\'));"><span data-itr="option_dark_theme">Dark theme</span></label>           <label><input type="checkbox" onchange="setSkipStats($(this).is(\':checked\'));"><span data-itr="option_skip_stats">Skip stats</span></label>       </div>  </div>  <br clear="both"></div>');
    $(".btn-logout").css({"width": "152.5px", "margin-bottom": "12px"});
    $(".btn-spectate").css({"width": "152.5px"});

    hasAdblock = false;

    if(hasAdblock){
       $('#adbg').css('background-image', "url('/blocker.png')");
    };

