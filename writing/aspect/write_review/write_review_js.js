// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");
var s4 = document.getElementById("s4");
var s5 = document.getElementById("s5");

s1.onclick = function () {
    s1.innerHTML = "&#9733";
    s2.innerHTML = "&#9734";
    s3.innerHTML = "&#9734";
    s4.innerHTML = "&#9734";
    s5.innerHTML = "&#9734";
}
s2.onclick = function () {
    s1.innerHTML = "&#9733";
    s2.innerHTML = "&#9733";
    s3.innerHTML = "&#9734";
    s4.innerHTML = "&#9734";
    s5.innerHTML = "&#9734";
}
s3.onclick = function () {
    s1.innerHTML = "&#9733";
    s2.innerHTML = "&#9733";
    s3.innerHTML = "&#9733";
    s4.innerHTML = "&#9734";
    s5.innerHTML = "&#9734";
}
s4.onclick = function () {
    s1.innerHTML = "&#9733";
    s2.innerHTML = "&#9733";
    s3.innerHTML = "&#9733";
    s4.innerHTML = "&#9733";
    s5.innerHTML = "&#9734";
}

s5.onclick = function () {
    console.log("s5s5!");
    s1.innerHTML = "&#9733";
    s2.innerHTML = "&#9733";
    s3.innerHTML = "&#9733";
    s4.innerHTML = "&#9733";
    s5.innerHTML = "&#9733";
}