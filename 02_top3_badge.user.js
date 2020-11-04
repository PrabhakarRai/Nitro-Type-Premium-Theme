// ==UserScript==
// @name         Top-3 Badge
// @namespace    https://www.theprabhakar.in/
// @version      1.0
// @description  Part of Nitro Type Premium Series - Adds Top-3 Badge on Garage Page
// @author       Prabhakar Rai
// @match        https://www.nitrotype.com/garage
// @updateURL    https://github.com/PrabhakarRai/Nitro-Type-Premium-Theme/raw/main/02_top3_badge.user.js
// @downloadURL  https://github.com/PrabhakarRai/Nitro-Type-Premium-Theme/raw/main/02_top3_badge.user.js
// @grant        none
// ==/UserScript==

var _bucket_checker_ = null;

function look_for_bucket(){
    var a = document.getElementsByClassName('bucket bucket--f');
    if(a.length != 0 && a.length != undefined){
        add_the_badge(a);
        clearInterval(_bucket_checker_);
    }
}

function add_the_badge(a){
    var node = document.createElement("div");
    node.className = "bucket-media";
    node.innerHTML = '<img alt="Scoreboard Top 3" class="profile-badge" src="/dist/site/images/badges/badge-top3.png">';
    a[0].insertBefore(node, a[0].childNodes[0]);
}

_bucket_checker_ = setInterval(look_for_bucket, 200);
