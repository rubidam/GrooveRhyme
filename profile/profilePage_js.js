// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyDDFiULsphXfbs8XMTaJr4o4dxCPvCyX8w",
	authDomain: "movielist-454ba.firebaseapp.com",
	databaseURL: "https://movielist-454ba.firebaseio.com",
	projectId: "movielist-454ba",
	storageBucket: "movielist-454ba.appspot.com",
	messagingSenderId: "444347257371",
	appId: "1:444347257371:web:9b97aad58b2e7f75"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function openForm() {
	document.getElementById("myForm").style.display = "block";
}

function closeForm() {
	document.getElementById("myForm").style.display = "none";
  
}
function copy_review(name) {
	return firebase.database().ref('/UserProfile/MyReview/' + name).once('value', function(snapshot) {
		var v = snapshot.val();
		var newlog = firebase.database().ref('/review_temp/' + name);
		newlog.set(v);
		location.href = "../writing/aspect/aspects.html?name=" + name;
	});
}
/*********************review part**********************************/
function initializereviewTable() {
  /*
    Initialize the courses in the right plane
  */
  var myTable = document.getElementById("reviewTable");
  var numRows = myTable.rows.length;
  for(var i=0;i<numRows;i++){
    myTable.deleteRow(0);
  }
  myTable.insertRow(0);
}
function refreshreviewList(name) {
	console.log(name)
	/* parsing movie name */
	var movieNameElement = name.split(":");
	var moviePicture = "";
	for (var i = 0 ; i < movieNameElement.length ; i++){
		moviePicture = moviePicture + movieNameElement[i];
	}
	/* parsing movie name */
	console.log(moviePicture);
	var resultTable = document.getElementById("reviewTable");
	var row = resultTable.rows[maxreviewrow];
	
	var col1 = row.insertCell(row.cells.length);
	col1.addEventListener("click",function(e){
		console.log(name);
		copy_review(name);
	})
	
	var getstorage = firebase.storage().ref().child(moviePicture + ".jpg").getDownloadURL().then(function(url){
		console.log(url);
		col1.innerHTML = "<img src =" + url + " class = 'reviewelem' height = 200 width = 130 hspace = 7 "+ "title= 'Move to my review of "+name+"'>";
		
    });
	
	if(row.cells.length == 4){
		maxreviewrow +=1;
		resultTable.insertRow(maxreviewrow);
	}
	
}
function makereviewTable(lst) {
	initializereviewTable();
	var len = lst.length;
	for (var i=0;i<len;i++) {
		refreshreviewList(lst[i]);
	}
}

function getReviewList() {
	return firebase.database().ref('/UserProfile/MyReview/').once('value', function(snapshot){
		var myValue = snapshot.val();
		if (myValue != null) {
			var keys = Object.keys(myValue);
			reviewlist = keys;
			console.log(reviewlist);
		}
		makereviewTable(reviewlist);
	});
}
/*********************review part**********************************/
/*****************collection part**********************************/
function initializecollectionTable() {
  /*
    Initialize the courses in the right plane
  */
  var myTable = document.getElementById("collectionT");
  var numRows = myTable.rows.length;
  for(var i=1;i<numRows;i++){
    myTable.deleteRow(1);
  }
}
function refreshcollectionList(name) {
	var resultTable = document.getElementById("collectionT");
	var collection = document.getElementById("middle");
	var row = resultTable.insertRow(1);
	row.setAttribute('class','collection_tr');
	var col1 = row.insertCell(0);
	col1.setAttribute('class','collection_td');
	var col2 = row.insertCell(1);
	col2.setAttribute('class','collection_td');
	row.addEventListener("click",function(e){
		console.log(name);
		collection.style.display="block";
        getMovieList(col1.innerHTML);
        var addmoviesec = document.getElementById("addmoviesec");
        addmoviesec.style.display = "none";
        //location.href = "./profilePage.html?collection=" + name;
	})
	col1.innerHTML = name;
	var arrow = document.createElement("i");
	arrow.className="fas fa-angle-right";
	col2.appendChild(arrow);
	col2.style.textAlign = "center";
}

function makecollectionTable(lst) {
	initializecollectionTable();
	var len = lst.length;
	for (var i=len-1;i>=0;i--) {
		refreshcollectionList(lst[i]);
	}
}

function getCollectionList() {
	return firebase.database().ref('/UserProfile/MyCollection/').once('value', function(snapshot){
		var myValue = snapshot.val();
		if (myValue != null) {
			var keys = Object.keys(myValue);
			collectionlist = keys;
			console.log(collectionlist);
		}
		makecollectionTable(collectionlist);
	});
}
/*****************collection part**********************************/
var reviewlist=[];
var maxreviewrow = 0;
getReviewList();
var collectionlist=[];
getCollectionList();
var add_btn = document.getElementById("add");

add_btn.onclick = function() {
	var middlediv = document.getElementById("middle");
	input_box = document.getElementById("new_name");
	console.log(input_box.value);
	middlediv.style.left = "0%";
	firebase.database().ref('/UserProfile/MyCollection/' + input_box.value + '/').set({'z':1});
	input_box.value = '';
	
	closeForm();
	getCollectionList();
}

//////////////////////////backpart
function backback(){
	console.log("aaa");
	document.location.href = "../main.html";
}

function collectiondelete() {
	var collection = document.getElementById("middle");
	var colname = document.getElementById("collectionname").innerHTML;
	console.log(colname);
	
    return firebase.database().ref('/UserProfile/MyCollection/' + colname + '/').once('value', function (snapshot) {
        firebase.database().ref('/UserProfile/MyCollection/' + colname + '/').remove();
        //location.href = "./profilePage.html";
		collection.style.display = "none";
		getCollectionList();
    });
}
function addmovie() {
    var addmoviesec = document.getElementById("addmoviesec");
	var middlediv = document.getElementById("middle");
	//middlediv.style.left = "-15%";
    addmoviesec.style.display = 'block';
}
var addmovieok = document.getElementById("addmovieok");
function addmovieonclick() {
    addmovieok.onclick = function (e) {
        var middlediv = document.getElementById("middle");
        var search_input = document.getElementById("search_input");
        var collectionname = document.getElementById("collectionname")
        var update = firebase.database().ref('/UserProfile/MyCollection/' + collectionname.innerHTML);
        var entry = {};
        entry[search_input.value] = 1;
		middlediv.style.left = "0%";
        update.update(entry);
        refreshList(search_input.value);
        search_input.value = '';
        addmoviesec.style.display = 'none';
        var poster = document.getElementById("poster");
        poster.src = './new_default.jpg';

    }
}
function initializeTable() {
    /*
      Initialize the courses in the right plane
    */
    var myTable = document.getElementById("myTable");
    var numRows = myTable.rows.length;
	var colname = document.getElementById("collectionname");
    for (var i = 1; i < numRows; i++) {
        myTable.deleteRow(1);
    }
	colname.innerHTML = "";
}
function refreshList(name) {
    var resultTable = document.getElementById("myTable");
    var row = resultTable.insertRow(1);
    row.setAttribute('class', 'namerow');
    var col1 = row.insertCell(0);
    col1.setAttribute("class", "overlap");
    col1.setAttribute("colspan", "2");
    row.addEventListener("click", function (e) {
        console.log(name);
        //getMovieList(col1.innerHTML);
		location.href = "../search/movieReview.html?" + name;
    })
    col1.innerHTML = name;
}
function makeTable(lst) {
    //initializeTable();
    var len = lst.length;
    for (var i = len - 1; i >= 0; i--) {
        if (lst[i] == 'z') {
            continue;
        }
        refreshList(lst[i]);
    }
}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function getMovieList(colname) {
    //var colname = para['collection'].split('%20').join(' ');
    return firebase.database().ref('/UserProfile/MyCollection/' + colname + '/').once('value', function (snapshot) {
        var myValue = snapshot.val();
        if (myValue != null) {
            var keys = Object.keys(myValue);
            movielist = keys;
            console.log(movielist);
        }
        var tablehead = document.getElementById("collectionname");
        tablehead.innerHTML = colname;
        makeTable(movielist);
    });
}
var para = getUrlVars();
var movielist = [];

function popupTrue() {
    var loc = document.location.href;
    var loclist = []
    loclist = loc.split("");
    for (var i = 0; i < loclist.length; i++) {
        if (loclist[i] == "?") {
            getMovieList();
            return;
        }
    }
    //document.getElementById("middle").style.display = 'none';
}
var closebtn = document.getElementById("closeth");
var modal_layer = document.getElementById("modal_layer");
closebtn.addEventListener("click", function (e) {
    var collection = document.getElementById("middle");
	initializeTable();
	collection.style.left = "0%";
	collection.style.display = "none";
	
})
modal_layer.addEventListener("click", function (e) {
    var collection = document.getElementById("middle");
    initializeTable();
    collection.style.left = "0%";
	collection.style.display = "none";

})
popupTrue();
addmovieonclick();
function input_event() {
    //console.log("a");
    var inputvalue = document.getElementById("search_input");
    var movieName = inputvalue.value;
    var movieNameElement = movieName.split(":");
    var okButton = document.getElementById("ok");


    var moviePicture = "";
    for (var i = 0; i < movieNameElement.length; i++) {
        if (i > 0) {
            moviePicture = moviePicture + movieNameElement[i];
        }
        else {
            moviePicture = moviePicture + movieNameElement[i];
        }
    }
    console.log(moviePicture);

    var newMoviePicture = "";
    var newMovieNameElement = moviePicture.split(" ");
    for (var i = 0; i < newMovieNameElement.length; i++) {
        if (i == newMovieNameElement.length - 1) {
            if (newMovieNameElement[i] == "in" || newMovieNameElement[i] == "of" || newMovieNameElement[i] == "for" || newMovieNameElement[i] == "and") {
                newMoviePicture = newMoviePicture + newMovieNameElement[i];
            }
            else {
                var firstLetter = newMovieNameElement[i].charAt(0);
                newMoviePicture = newMoviePicture + firstLetter.toUpperCase() + newMovieNameElement[i].slice(1);
            }
        }
        else {
            if (newMovieNameElement[i] == "in" || newMovieNameElement[i] == "of" || newMovieNameElement[i] == "for" || newMovieNameElement[i] == "and") {
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
    var getstorage = firebase.storage().ref().child(newMoviePicture + ".jpg").getDownloadURL().then(function (url) {
        console.log(url);
        poster.src = url;
    });

}
var searching = firebase.database().ref('/MovieList/').once('value', function (snapshot) {
    var moviedic = snapshot.val();
    var movielist = Object.keys(moviedic);
    //console.log(movielist);

    $(function () {



        var accentMap = {
            "á": "a",
            "ö": "o"
        };
        var normalize = function (term) {
            var ret = "";
            for (var i = 0; i < term.length; i++) {
                ret += accentMap[term.charAt(i)] || term.charAt(i);
            }
            return ret;
        };

        $("#search_input").autocomplete({
            source: function (request, response) {
                var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
                response($.grep(movielist, function (value) {
                    //value = value.label || value.value || value;
                    //console.log(movielist);
                    value = value.value || value;

                    return matcher.test(value) || matcher.test(normalize(value));
                }));
            },


            select: function (event, ui) {
                event.preventDefault();
                var selectedObj = ui.item;
                $("#search_input").appendTo(".foo");
                $("#search_input").val(ui.item.value);

                if (event.keyCode != 13) {
                    input_event();
                    addmovieonclick();
                }
                else if (event.keyCode == 13) {
                    input_event();
                    //input.value = '';
                    addmovieonclick();
                }
                $("#search_input").autocomplete("close");
                return false;
            }
        });
    });
})