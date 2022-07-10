// ===========================================================
//                 REPLACEMENT LOGOS
// ===========================================================
var url = chrome.extension.getURL('images/logo.png');
var yturl = chrome.extension.getURL('images/yt.png');

// ===========================================================
//                 GOOGLE LOGO
// ===========================================================
var mini = document.querySelector(".logo img");

if (mini !== null){
    mini.src = url
    mini.classList.add('motionsa')
}

var img = document.querySelector(".k1zIA.rSk4se img");

if (img !== null){
    img.src = url
    img.srcset = []
    img.classList.add('motionsa')
}

// ===========================================================
//                 YOUTUBE LOGO
// ===========================================================

var ytmini = document.querySelector(".style-scope .ytd-logo");

if (ytmini !== null){
    console.log(ytmini)
    var newImage = document.createElement('img');
    newImage.setAttribute("src", yturl)
    newImage.setAttribute("alt", yturl)
    newImage.setAttribute("style", "pointer-events: none;display: block;width: 100%;height: 30px;")
    newImage.classList.add('motionsa')

    ytmini.parentElement.replaceChild(newImage, ytmini);
}
