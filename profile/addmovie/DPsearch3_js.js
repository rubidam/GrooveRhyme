// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.

function extractquery(loc){
	var query = ""
	var queryflag = 0;
	for (var i= 0; i< loc.length; i++){
		if(queryflag == 1){
			query = query + loc[i];
		}
		if (loc[i] == '?') queryflag = 1;
	}
	return query;
}

function aspectPressListener(){
	var nextloc = "./searchaspect/searchaspect.html?"
	var loc = document.location.href;
	var query = extractquery(loc);
	nextloc = nextloc + query;
	location.href = nextloc;
}

function skipPressListener() {
}
function okPressListener(){
	var nextloc = "./selectMovie.html?"
	var loc = document.location.href;
	var query = extractquery(loc);
	nextloc = nextloc + query;
	location.href = nextloc;
}
function apply() {
    var loc = document.location.href;
    var query = extractquery(loc);
    var splitquery;
    var aspeq;
    var list = [];
    var category = document.getElementById("skip");
    aspeq = query.split("=");
   
    if (query != "") {
        splitquery = query.split("=")[1].split("&")[0].toUpperCase();
        console.log("splitquery1 : " + splitquery);
        if (splitquery == "1") {
            splitquery = "NONE";
        }
        category.value = splitquery;
    }
    else {
        splitquery = "NONE";
        category.value = splitquery;
    }
    if (splitquery == "NONE") {
        for (var i = 0; i < aspeq.length - 1; i++) {
            list.push(aspeq[i].split("&")[1].toUpperCase());
        }
    }
    else {
        for (var i = 1; i < aspeq.length - 1; i++) {
            list.push(aspeq[i].split("&")[1].toUpperCase());
        }
    }
    
    var aspeskip = document.getElementById("aspeskip");
    var listjoin = list.join(", ");
    aspeskip.value = listjoin;
    console.log(listjoin);
}
var back = document.getElementById("backspace").addEventListener("click", function () {
    var loc = document.location.href;
    var query = extractquery(loc).split("&")[0];
    location.href = "./DPsearch2.html" + "?" + query;
})
apply();