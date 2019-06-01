// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.

var profilediv = document.getElementById("profile");
var searchdiv = document.getElementById("search");
searchdiv.addEventListener('click',function (e) {
	console.log("search click");
});
searchdiv.addEventListener('mouseover', function (e) {
    searchdiv.style.textShadow = "3px 3px 3px black";
    searchdiv.style.backgroundColor = "#3e606f";
    searchdiv.style.color = "#eee"
    writediv.style.textShadow = "none";
    writediv.style.backgroundColor = "#eee";
    writediv.style.color = "#3e606f";
    profilediv.style.backgroundColor = "#eee";
});
var writediv = document.getElementById("write");
writediv.addEventListener('click',function (e) {
	console.log("write click");
});
writediv.addEventListener("mouseover", function (e) {
    profilediv.style.backgroundColor = "#3e606f";
    writediv.style.textShadow = "3px 3px 3px black";
    writediv.style.backgroundColor = "#3e606f";
    writediv.style.color = "#eee";
    searchdiv.style.textShadow = "none";
    searchdiv.style.backgroundColor = "#eee";
    searchdiv.style.color = "#3e606f";
});
profilediv.addEventListener('click',function (e) {
	console.log("profile click");
});
profilediv.addEventListener('mouseover',function (e) {
	console.log("profile hover");
    profilediv.style.backgroundImage = "url('./profile/profile2.png')";
    profilediv.style.backgroundColor = "#3e606f";
    writediv.style.textShadow = "none";
    writediv.style.backgroundColor = "#3e606f";
    writediv.style.color = "#eee";
});
profilediv.addEventListener('mouseout',function (e) {
	console.log("profile hover out");
    profilediv.style.backgroundImage = "url('./profile/profile1.png')";
    profilediv.style.backgroundColor = "#eee";
    writediv.style.textShadow = "3px 3px 3px black";
    writediv.style.backgroundColor = "#eee";
    writediv.style.color = "#3e606f";
});


