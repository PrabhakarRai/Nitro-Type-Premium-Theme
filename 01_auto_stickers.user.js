// ==UserScript==
// @name         Auto Stickers
// @namespace    https://www.theprabhakar.in/
// @version      1.0
// @description  Part of Nitro Type Premium Theme - Posts Stickers Automatically in NT Race
// @author       Prabhakar Rai
// @match        https://www.nitrotype.com/race
// @updateURL    https://github.com/PrabhakarRai/Nitro-Type-Premium-Theme/raw/main/01_auto_stickers.user.js
// @downloadURL  https://github.com/PrabhakarRai/Nitro-Type-Premium-Theme/raw/main/01_auto_stickers.user.js
// @grant        none
// ==/UserScript==

/*
Variable frequency_of_stickers usages :
100 -> post sticker in every race i.e. 100% chance
 70 -> post sticker in 7 out of 10 races i.e. 70% chance
 50 -> post sticker every other race i.e. 50% chance
 33 -> post sticker in every thrid race i.e. 33% chance
*/
var frequency_of_stickers = 100;
/*
Variable sticker_choice usages :
0 -> Random choice from all available stickers
1 -> First sticker
2 -> Second sticker
3 -> Third sticker and so on
*/
var sticker_choice = 0;

var clt_intvl = null;
function look_for_b(){
    var a = document.getElementsByClassName('raceChat-pickerOpt');
    if(a.length != 0 && a.length != undefined){
        setTimeout(function() {
            click_the_b(a);
        }, 3900)
        clearInterval(clt_intvl);
    }
}

clt_intvl = setInterval(look_for_b, 300);

function click_the_b(a){
    if(Math.floor((Math.random() * 100) + 1) <= frequency_of_stickers){
        var total_choices = a.length;
        if(sticker_choice == 0){
            var current_choice = Math.floor((Math.random() * total_choices));
            a[current_choice].firstChild.click();
        }
        else{
            a[sticker_choice - 1].firstChild.click();
        }
    }
}
