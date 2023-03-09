if (window.location.href.indexOf("sanalsinif.marmara.edu.tr") > -1) {
  setInterval(function() {
    var buttons = document.getElementsByClassName("response-button");
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].innerText === "Buradayım!") {
        buttons[i].click();
        break;
      }
    }
  }, 1000);
}