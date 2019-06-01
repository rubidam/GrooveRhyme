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
movieName = movieName.split("%27").join("'");
console.log(movieName);
var title = document.getElementById("title");
title.innerHTML = movieName;

function createMovieName(value) {
    var movieNameElement = value.split(":");

    var moviePicture = "";
    for (var i = 0; i < movieNameElement.length; i++) {
        if (i > 0) {
            moviePicture = moviePicture + movieNameElement[i];
        }
        else {
            moviePicture = moviePicture + movieNameElement[i];
        }
    }

    return moviePicture;
}

function imgSrc() {
    var image = document.getElementById("image");
    var getstorageFirst = firebase.storage().ref().child(createMovieName(movieName) + ".jpg").getDownloadURL().then(function (url) {
        image.src = url;
    });
}

function imgLoading(){
	var image = document.getElementById("image");
	image.src = "./loading.gif";
}

function star() {
    var starp = document.getElementById("starp");
    var starm = document.getElementById("starm");
    var stars = document.getElementById("stars");
    var starv = document.getElementById("starv");
    var stara = document.getElementById("stara");
    var star = firebase.database().ref("/MovieList/" + movieName + "/Rating/").once('value', function (snapshot) {
        var dict = snapshot.val();
        var star = " ";
        for (var i = 0; i < dict.Production; i++) {
            star += " &#9733";
        }
        for (var i = 0; i < 5 - dict.Production; i++) {
            star += " &#9734";
        }
        starp.innerHTML = star;
        star = " ";
        for (var i = 0; i < dict.Synopsis; i++) {
            star += " &#9733";
        }
        for (var i = 0; i < 5 - dict.Synopsis; i++) {
            star += " &#9734";
        }
        stars.innerHTML = star;
        star = " ";
        for (var i = 0; i < dict.Music; i++) {
            star += " &#9733";
        }
        for (var i = 0; i < 5 - dict.Music; i++) {
            star += " &#9734";
        }
        stara.innerHTML = star;
        star = " ";
        for (var i = 0; i < dict.Visual; i++) {
            star += " &#9733";
        }
        for (var i = 0; i < 5 - dict.Visual; i++) {
            star += " &#9734";
        }
        starv.innerHTML = star;
        star = " ";
        for (var i = 0; i < dict.Acting; i++) {
            star += " &#9733";
        }
        for (var i = 0; i < 5 - dict.Acting; i++) {
            star += " &#9734";
        }
        starm.innerHTML = star;
    })
}
function insertCell() {
    
    var star = firebase.database().ref("/MovieList/" + movieName + "/ReviewList/").once('value', function (snapshot) {
        var table = document.getElementById("table");
        var dict = snapshot.val();
        var nameList = Object.keys(dict);
        for (var i = 0; i < nameList.length; i++) {
            
            console.log(nameList);
            var aspectList = Object.keys(dict[nameList[i]]);
			console.log(aspectList);
            for (var j = 0; j < aspectList.length; j++) {
				var row = table.insertRow(1),
                person = row.insertCell(0),
                aspect = row.insertCell(1),
                star = row.insertCell(2),
                review = row.insertCell(3);
				person.innerHTML = nameList[i];
                aspect.innerHTML = aspectList[j];
                star.innerHTML = dict[nameList[i]][aspectList[j]]["Rating"];
                review.innerHTML = dict[nameList[i]][aspectList[j]]["Review"];
            }
        }
        
    })
}


function makeTempDB(moviename) {
    var initaspect = {
        Rating: 0,
        Review: ""
    };

    var temp = firebase.database().ref('/review_temp/' + moviename);
	
    temp.set({
        "Production": initaspect,
        "Acting": initaspect,
        "Synopsis": initaspect,
        "Visual": initaspect,
        "Music": initaspect
    });
}

var next_move = "../writing/aspect/aspects.html?"

function postPressListener() {
    next_move = next_move + "name=" + movieName;
    makeTempDB(movieName);
    location.href = next_move;
};

imgLoading();
insertCell();
imgSrc();
star();