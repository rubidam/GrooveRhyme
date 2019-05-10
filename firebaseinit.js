//<!-- The core Firebase JS SDK is always required and must be listed first -->
//<script src="https://www.gstatic.com/firebasejs/6.0.2/firebase-app.js"></script>

//<!-- TODO: Add SDKs for Firebase products that you want to use
//     https://firebase.google.com/docs/web/setup#config-web-app -->

var a;
function loadscript(callback){
	var imported1 = document.createElement('script');
	var imported2 = document.createElement('script');
	//imported.type = "text/javascript";
	imported1.src = "https://www.gstatic.com/firebasejs/6.0.2/firebase-app.js";
	imported2.src = "https://www.gstatic.com/firebasejs/6.0.2/firebase-database.js"
	document.body.appendChild(imported1);
	document.body.appendChild(imported2);
	
	console.log(callback);
	imported1.onreadystatechange = callback;
	imported1.onload = callback;
	console.log("aa");
	
}

var initialization = function (){
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
	//firebase.auth.Auth.Persistence.
	console.log(firebaseConfig);
	a = firebaseConfig;
	
initApp = function() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var uid = user.uid;
        var phoneNumber = user.phoneNumber;
        var providerData = user.providerData;
        user.getIdToken().then(function(accessToken) {
          document.getElementById('sign-in-status').textContent = 'Signed in';
          document.getElementById('sign-in').textContent = 'Sign out';
          document.getElementById('account-details').textContent = JSON.stringify({
            displayName: displayName,
            email: email,
            emailVerified: emailVerified,
            phoneNumber: phoneNumber,
            photoURL: photoURL,
            uid: uid,
            accessToken: accessToken,
            providerData: providerData
          }, null, '  ');
        });
      } else {
        // User is signed out.
        document.getElementById('sign-in-status').textContent = 'Signed out';
        document.getElementById('sign-in').textContent = 'Sign in';
        document.getElementById('account-details').textContent = 'null';
      }
    }, function(error) {
      console.log(error);
    });
  };

  window.addEventListener('load', function() {
    initApp()
  });
}


/*$.getScript(imported.src,function(){
	var firebaseConfig = {
    apiKey: "AIzaSyDDFiULsphXfbs8XMTaJr4o4dxCPvCyX8w",
    authDomain: "movielist-454ba.firebaseapp.com",
    databaseURL: "https://movielist-454ba.firebaseio.com",
    projectId: "movielist-454ba",
    storageBucket: "movielist-454ba.appspot.com",
    messagingSenderId: "444347257371",
    appId: "1:444347257371:web:080d977ab1da9906"
  };
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
})
  
*/

loadscript(initialization);
//////////////



