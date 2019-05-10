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
var poster = firebase.storage().ref().bucket;
console.log(poster);
function okDisabled() {
    var poster = document.getElementById("poster");
    var ok = document.getElementById("ok");
    console.log(poster.onerror);
    if (poster.src == "file:///C:/Users/user/Desktop/GrooveRhyme/writing/default.jpg" ) {
        console.log("디폴트");
        ok.disabled = true;
    }
    else {
        console.log("검색");
        ok.disabled = false;
    }
}

function input_event(){
	console.log("a");
	var inputvalue = document.getElementById("search_input");
	var movieName = inputvalue.value;
	var movieNameElement = movieName.split(":");

	var moviePicture = "";
	for (var i = 0 ; i < movieNameElement.length ; i++){
		if (i > 0){
			moviePicture = moviePicture + movieNameElement[i];
		}
		else{
			moviePicture = moviePicture + movieNameElement[i];
		}
	}

	var poster = document.getElementById("poster");
	var getstorage = firebase.storage().ref().child(moviePicture + ".jpg").getDownloadURL().then(function(url){
		console.log(url);
        poster.src = url;
        okDisabled();
    });
    
}


var searching = firebase.database().ref('/MovieList/').once('value',function(snapshot){
	var moviedic = snapshot.val();
	var movielist = Object.keys(moviedic);
	console.log(movielist);
	
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

next_move = "./aspect/aspects.html?"

function okPressListener(){
	next_move = next_move + "name=" + textbox.value;
	location.href = next_move;
};
function backspace(){
	location.href = javascript.history.back();
};

function bindEvent(){
	var searchbutton = document.getElementById("searchbutton");
	
    searchbutton.onclick = function () {
        
		input_event();
		
	};
}

okDisabled();
bindEvent();