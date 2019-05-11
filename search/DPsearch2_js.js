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
    okPressListener();
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
    var category = document.getElementById("category");
    if (query != "") {
        category.value = query.split("=")[1].split("&")[0].toUpperCase();
    }
    else {
        category.value = "NONE";
    }
    console.log("applying enter");
    if (category.value == "NONE" || category.value == "") {
        console.log("if enter");
        var skip = document.getElementById("aspeskip");
        skip.disabled = true;
    }
}
apply();