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

$('html').click(function(e) {
	if(!$(e.target).hasClass("overlap")) {
		location.href = "./profilePage.html";
	}
});
function collectiondelete() {
	var para = getUrlVars();
	var colname = para['collection'].split('%20').join(' ');
	return firebase.database().ref('/UserProfile/MyCollection/' + colname + '/').once('value', function(snapshot){
		firebase.database().ref('/UserProfile/MyCollection/' + colname + '/').remove();
		location.href = "./profilePage.html";
	});
}
function initializeTable() {
  /*
    Initialize the courses in the right plane
  */
  var myTable = document.getElementById("myTable");
  var numRows = myTable.rows.length;
  for(var i=1;i<numRows;i++){
    myTable.deleteRow(1);
  }
}
function refreshList(name) {
	var resultTable = document.getElementById("myTable");
	var row = resultTable.insertRow(1);
	var col1 = row.insertCell(0);
	col1.setAttribute("class","overlap");
	col1.addEventListener("click",function(e){
		console.log(name);
		location.href = "../search/movieReview.html?" + name;
	})
	col1.innerHTML = name;
}
function makeTable(lst) {
	initializeTable();
	var len = lst.length;
	for (var i=len-1;i>=0;i--) {
		if(lst[i] == 'z'){
			continue;
		}
		refreshList(lst[i]);
	}
}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getMovieList() {
	var colname = para['collection'].split('%20').join(' ');
	return firebase.database().ref('/UserProfile/MyCollection/' + colname + '/').once('value', function(snapshot){
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
var movielist=[];
getMovieList();
