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
	var row = resultTable.insertRow(1);
	var col1 = row.insertCell(0);
	col1.setAttribute('class','collection_td');
	var col2 = row.insertCell(1);
	col2.setAttribute('class','collection_td');
	col1.addEventListener("click",function(e){
		console.log(name);
		location.href = "./collection.html?collection=" + name;
	})
	col2.addEventListener("click",function(e){
		console.log(name);
		location.href = "./collection.html?collection=" + name;
	})
	col1.innerHTML = name;
	col2.innerHTML = ">";
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

var collectionlist=[];
getCollectionList();
