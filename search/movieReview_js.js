// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
var firebaseConfig = {
    apiKey: "AIzaSyDDFiULsphXfbs8XMTaJr4o4dxCPvCyX8w",
    authDomain: "movielist-454ba.firebaseapp.com",
    databaseURL: "https://movielist-454ba.firebaseio.com",
    projectId: "movielist-454ba",
    storageBucket: "movielist-454ba.appspot.com",
    messagingSenderId: "444347257371",
    appId: "1:444347257371:web:080d977ab1da9906"
};
firebase.initializeApp(firebaseConfig);

var para = document.location.href.split("?")[1];
var movieName = para.split("%20").join(' ');
console.log(movieName);
var title = document.getElementById("title");
title.innerHTML = movieName;

function imgSrc() {
    var image = document.getElementById("image");
    var getstorageFirst = firebase.storage().ref().child(movieName + ".jpg").getDownloadURL().then(function (url) {
        console.log("create : " + movieName);
        image.src = url;
    });
}

imgSrc();