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

var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");
var s4 = document.getElementById("s4");
var s5 = document.getElementById("s5");
var rating = 0;
function star_rating(){
	

	s1.onclick = function () {
		s1.innerHTML = "&#9733";
		s2.innerHTML = "&#9734";
		s3.innerHTML = "&#9734";
		s4.innerHTML = "&#9734";
		s5.innerHTML = "&#9734";
		rating = 1;
	};
	s2.onclick = function () {
		s1.innerHTML = "&#9733";
		s2.innerHTML = "&#9733";
		s3.innerHTML = "&#9734";
		s4.innerHTML = "&#9734";
		s5.innerHTML = "&#9734";
		rating = 2;
	};
	s3.onclick = function () {
		s1.innerHTML = "&#9733";
		s2.innerHTML = "&#9733";
		s3.innerHTML = "&#9733";
		s4.innerHTML = "&#9734";
		s5.innerHTML = "&#9734";
		rating = 3;
	};
	s4.onclick = function () {
		s1.innerHTML = "&#9733";
		s2.innerHTML = "&#9733";
		s3.innerHTML = "&#9733";
		s4.innerHTML = "&#9733";
		s5.innerHTML = "&#9734";
		rating = 4;
	};

	s5.onclick = function () {
		console.log("s5s5!");
		s1.innerHTML = "&#9733";
		s2.innerHTML = "&#9733";
		s3.innerHTML = "&#9733";
		s4.innerHTML = "&#9733";
		s5.innerHTML = "&#9733";
		rating = 5;
	};
}
function parse_url(){
	var aspect = "";
	var currenturl = document.location.href;
	var queryflag = false;
	for (var i = 0; i< currenturl.length; i++){
		if (queryflag == true) {
			aspect = aspect + currenturl[i]; 
		}
		
		else if (currenturl[i] == '?') queryflag = true;
	}
	console.log(aspect);
	aspect = aspect.slice(7);
	return aspect;
}
function clickOK(){
	var OKbutton = document.getElementById("ok");
	var inputbox = document.getElementById("review_content");
	var aspect = parse_url();
	OKbutton.onclick = function(){
		var content = inputbox.value;
		var starrating = rating;
		console.log(content);
		var sendToServer = firebase.database().ref("/review_temp/"+aspect+"/").set({
			rating : starrating,
			review : content
		}, function(error){
			if (error){
				console.log("data update failed... :(");
			}
			else{
				console.log("Success!");
				window.history.back();
			}
		});
	}
}

function initialize(){
	var aspect = parse_url();
	var inputbox = document.getElementById("review_content");
	var init = firebase.database().ref('/review_temp/'+aspect+'/').once('value',function(snapshot){
		var rating = snapshot.val().rating;
		var content = snapshot.val().review;
		console.log(rating);
		console.log(content);
		if(rating == 1) s1.click();
		else if (rating == 2) s2.click();
		else if (rating == 3) s3.click();
		else if (rating == 4) s4.click();
		else if (rating == 5) s5.click();
		
		if (content != "") inputbox.value = content;
	});
}

function bindevent(){
	initialize();
	star_rating();
	clickOK();
}
bindevent();