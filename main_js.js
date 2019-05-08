// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.

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
	profilediv.style.backgroundImage = "url('')";
});
profilediv.addEventListener('mouseout',function (e) {
	console.log("profile hover out");
	profilediv.style.backgroundImage = "url('./profile/profile1.png')";
});