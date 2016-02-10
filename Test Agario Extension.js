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
    $("small.text-muted").remove();