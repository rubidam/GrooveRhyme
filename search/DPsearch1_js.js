// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.

function categoryPressListener(){
	console.log("hehehe");
	location.href = "./choosecategory/category.html";
	return 0;
}
function skipPressListener(){
	console.log("ggg");
	location.href = "DPsearch2.html";
	return 0;
}

function bindeventlistner(){
	var category = document.getElementById("category");
	var skip = document.getElementById("skip");
	console.log("Bindbind");
	
	category.onclick = function(){
		console.log("hehehe");
		location.href = "./choosecategory/category.html";
		return 0;;
	};
	skip.onclick = function(){
		console.log("ggg");
	location.href = "DPsearch2.html";
	return 0;
	};
	
}
console.log("aaaaaa");
bindeventlistner();