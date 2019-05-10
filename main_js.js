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
//firebase.auth.Auth.Persistence.

console.log(firebaseConfig);


var searchdiv = document.getElementById("search");
searchdiv.addEventListener('click',function (e) {
	console.log("search click");
});
var writediv = document.getElementById("write");
writediv.addEventListener('click',function (e) {
	console.log("write click");
});
var profilediv = document.getElementById("profile");
profilediv.addEventListener('click',function (e) {
	console.log("profile click");
});
profilediv.addEventListener('mouseover',function (e) {
	console.log("profile hover");
	profilediv.style.backgroundImage = "url('./profile/profile2.png')";
});
profilediv.addEventListener('mouseout',function (e) {
	console.log("profile hover out");
	profilediv.style.backgroundImage = "url('./profile/profile1.png')";
});

var hey = firebase.database().ref('/').once('value',function(snapshot){
	var help = snapshot.val();
	console.log(help.MovieList);
	
});
console.log(hey);
