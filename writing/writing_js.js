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

var textbox = document.getElementById("search_input");
console.log(poster);

function input_event(){
	//console.log("a");
	var inputvalue = document.getElementById("search_input");
	if(inputvalue.value == ""){
		var poster = document.getElementById("poster");
		poster.src = '';
		inputvalue.style.borderColor = "red";
		inputvalue.setAttribute("placeholder","You should write movie name");
		setTimeout(function(){
			inputvalue.style.borderColor = "#aaa";
			inputvalue.setAttribute("placeholder","Search your movie");
		}, 1100);
		return;
	}
	var movieName = inputvalue.value;
	var movieNameElement = movieName.split(":");
	var okButton = document.getElementById("ok");
	
	
	
	okButton.disabled = false;

	var moviePicture = "";
	for (var i = 0 ; i < movieNameElement.length ; i++){
		if (i > 0){
			moviePicture = moviePicture + movieNameElement[i];
		}
		else{
			moviePicture = moviePicture + movieNameElement[i];
		}
	}
	console.log(moviePicture);
	
	var newMoviePicture = "";
	var newMovieNameElement = moviePicture.split(" ");
	for (var i = 0 ; i < newMovieNameElement.length ; i++){
		if (i == newMovieNameElement.length - 1){
			if (newMovieNameElement[i] == "in" || newMovieNameElement[i] == "of" || newMovieNameElement[i] == "for" || newMovieNameElement[i] == "and"){
				newMoviePicture = newMoviePicture + newMovieNameElement[i];
			}
			else {
				var firstLetter = newMovieNameElement[i].charAt(0);
				newMoviePicture = newMoviePicture + firstLetter.toUpperCase() + newMovieNameElement[i].slice(1);
			}
		}
		else{
			if (newMovieNameElement[i] == "in" || newMovieNameElement[i] == "of" || newMovieNameElement[i] == "for" || newMovieNameElement[i] == "and"){
				newMoviePicture = newMoviePicture + newMovieNameElement[i] + " ";
			}
			else {
				var firstLetter = newMovieNameElement[i].charAt(0);
				newMoviePicture = newMoviePicture + firstLetter.toUpperCase() + newMovieNameElement[i].slice(1) + " ";
			}
			
		}
	}
	
	console.log(newMoviePicture);
	

	var poster = document.getElementById("poster");
	poster.src = 'loading.gif';
	var getstorage = firebase.storage().ref().child(newMoviePicture + ".jpg").getDownloadURL().then(function(url){
		console.log(url);
        poster.src = url;
    });
    
}


var searching = firebase.database().ref('/MovieList/').once('value',function(snapshot){
	var moviedic = snapshot.val();
	var movielist = Object.keys(moviedic);
	//console.log(movielist);
	
	$( function() {

	

    var accentMap = {
      "á": "a",
      "ö": "o"
    };
    var normalize = function( term ) {
      var ret = "";
      for ( var i = 0; i < term.length; i++ ) {
        ret += accentMap[ term.charAt(i) ] || term.charAt(i);
      }
      return ret;
    };
 
    $( "#search_input" ).autocomplete({
      source: function( request, response ) {
        var matcher = new RegExp( $.ui.autocomplete.escapeRegex( request.term ), "i" );
        response( $.grep( movielist, function( value ) {
          //value = value.label || value.value || value;
		  //console.log(movielist);
		  value = value.value || value;

          return matcher.test( value ) || matcher.test( normalize( value ) );
        }) );
      },
	
	
	  select: function(event,ui){
		event.preventDefault();
		var selectedObj = ui.item;
		$("#search_input").appendTo(".foo");
		$("#search_input").val(ui.item.value);

		if (event.keyCode != 13){
			input_event();
		}
		else if (event.keyCode == 13){
			input_event();
			//input.value = '';
		}
		$("#search_input").autocomplete("close");
		  return false;
	  }
    });
});
})

function makeTempDB(moviename){
	var initaspect = {
						Rating:0, 
						Review : ""
						};

	var temp = firebase.database().ref('/review_temp/'+moviename);
	/*var pushaspect = temp.push();
	pushaspect.set({"moviename" : moviename,
					"production" : initaspect,
					"acting" : initaspect,
					"synopsis" : initaspect,
					"visual" : initaspect,
					"music" : initaspect
	});
	*/
	temp.set({		"Production" : initaspect,
					"Acting" : initaspect,
					"Synopsis" : initaspect,
					"Visual" : initaspect,
					"Music" : initaspect
	});
}

next_move = "./aspect/aspects.html?"

function okPressListener(){
	var newTextValue = "";
	var textValue = textbox.value;
	var movieNameElement = textValue.split(" ");
	for (var i = 0 ; i < movieNameElement.length ; i++){
		if (i == movieNameElement.length - 1){
			if (movieNameElement[i] == "in" || movieNameElement[i] == "of" || movieNameElement[i] == "for" || movieNameElement[i] == "and"){
				newTextValue = newTextValue + movieNameElement[i];
			}
			else {
				var firstLetter = movieNameElement[i].charAt(0);
				newTextValue = newTextValue + firstLetter.toUpperCase() + movieNameElement[i].slice(1);
			}
		}
		else{
			if (movieNameElement[i] == "in" || movieNameElement[i] == "of" || movieNameElement[i] == "for" || movieNameElement[i] == "and"){
				newTextValue = newTextValue + movieNameElement[i] + " ";
			}
			else {
				var firstLetter = movieNameElement[i].charAt(0);
				newTextValue = newTextValue + firstLetter.toUpperCase() + movieNameElement[i].slice(1) + " ";
			}
			
		}
	}
	next_move = next_move + "name=" + newTextValue;
	makeTempDB(newTextValue);
	location.href = next_move;
};

function backspace(){
	location.href = "../main.html";
};

function initializepopupTable(table) {
  /*
    Initialize the courses in the right plane
  */
  var numRows = table.rows.length;
  for(var i=0;i<numRows;i++){
    table.deleteRow(0);
  }
}

function addrowmovietable(index,key){
	var movieList = document.getElementById("movielist_table");
	var row = movieList.insertRow(index);
	var col = row.insertCell(0);
	col.innerHTML = key;
	row.style.cursor = "pointer";
	row.addEventListener("click",function(e){
		var collectionButton = document.getElementById("collectionButton");
		collectionButton.click();
		var input = document.getElementById("search_input");
		input.value = key;
		var btn = document.getElementById("searchbutton");
		btn.click();
	});
}
function showMovieList(collectionName){
	var selectedname = document.getElementById("selected_colname");
	console.log(collectionName);
	selectedname.innerHTML = collectionName;
	var MovieList = document.getElementById("movielist_table");
	initializepopupTable(MovieList);
	var getMovieList = firebase.database().ref('/UserProfile/MyCollection/'+collectionName).once('value',function(snapshot){
		var data = snapshot.val();
		var keys = Object.keys(data);
		for (var i = 0;i<keys.length; i++){
			if(keys[i] != "z")
				addrowmovietable(i,keys[i]);
		}
	});
	var movieListdiv = document.getElementById("collection_movielist");
	movieListdiv.style.display = 'block';
}

function addrowcollectiontable(index,key){
	var collectionList = document.getElementById("collection_table");
	var row = collectionList.insertRow(index);
	var col = row.insertCell(0);
	col.innerHTML = key;
	row.style.cursor = "pointer";
	row.addEventListener("click",function(e){
		showMovieList(key);
	});
}

function showCollection(){
	var collectionList = document.getElementById("collection_table");
	initializepopupTable(collectionList);
	var getCollection = firebase.database().ref('/UserProfile/MyCollection/').once('value',function(snapshot){
		var data = snapshot.val();
		var keys = Object.keys(data);
		console.log(keys);
		for (var i = 0; i< keys.length; i++){
			addrowcollectiontable(i,keys[i]);
		}
	});
	var coldiv = document.getElementById("collection");
	coldiv.style.display = 'block';
}

function bindEvent(){
	var searchbutton = document.getElementById("searchbutton");
	var collectionButton = document.getElementById("collectionButton");
	var folderButton = document.getElementById("folderButton");
	var folderOpen = document.getElementsByClassName("far fa-folder-open");
	//console.log(folderOpen);
	
    searchbutton.onclick = function () {
		input_event();
	};
	
	collectionButton.onclick = function(){
		//console.log(folderOpen);
		if(folderOpen.length == 1){
			folderButton.className = "far fa-folder";
			var coldiv = document.getElementById("collection");
			var movieListdiv = document.getElementById("collection_movielist");
			coldiv.style.display = 'none';
			movieListdiv.style.display = 'none';
		}
		else if (folderOpen.length == 0){
			folderButton.className = "far fa-folder-open";
			showCollection();
		}
	}
}

bindEvent();