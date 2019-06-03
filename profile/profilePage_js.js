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
		col1.innerHTML = "<img src =" + url + " class = 'reviewelem' height = 200 width = 130 hspace = 7>";
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
  var myTable = document.getElementById("collectionTable");
  var numRows = myTable.rows.length;
  for(var i=1;i<numRows;i++){
    myTable.deleteRow(1);
  }
}
function refreshcollectionList(name) {
	var resultTable = document.getElementById("collectionTable");
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
	input_box = document.getElementById("new_name");
	console.log(input_box.value);
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

    location.href = "../search/DPsearch1.html";
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
	collection.style.display = "none";
	
})
modal_layer.addEventListener("click", function (e) {
    var collection = document.getElementById("middle");
    initializeTable();
    collection.style.display = "none";

})
popupTrue();
