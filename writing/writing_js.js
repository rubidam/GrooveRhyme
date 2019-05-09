// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
var textbox = document.getElementById("search_input");

next_move = "./aspect/aspects.html?"

function okPressListener(){
	next_move = next_move + "name=" + textbox.value;
	location.href = next_move;
};
function backspace(){
	location.href = javascript.history.back();
};