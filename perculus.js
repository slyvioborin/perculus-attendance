// ==UserScript==
// @name         Perculus yoklama
// @namespace    https://github.com/slyvioborin/perculus-attendance/
// @version      0.1
// @description  perculus uygulamasında çıkan pop-up yoklama butonuna otomatik tıklar
// @author       Alperen Arslan
// @match        https://sanalsinif.marmara.edu.tr/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
  setInterval(function() {
    var buttons = document.getElementsByClassName("response-button");
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].innerText === "Buraday1m!") {
        var delay = Math.floor(Math.random() * 2000) + 1000;
        setTimeout(function() { buttons[i].click(); }, delay);
        break;
      }
    }
  }, 1000);

})();
