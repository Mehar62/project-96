//YOUR FIREBASE LINKS

  var firebaseConfig = {
    apiKey: "AIzaSyDUwvdtF7hrj35VQ_aZNNLdSNAV3dopVQE",
    authDomain: "chat-32bd6.firebaseapp.com",
    databaseURL: "https://chat-32bd6-default-rtdb.firebaseio.com",
    projectId: "chat-32bd6",
    storageBucket: "chat-32bd6.appspot.com",
    messagingSenderId: "46999947827",
    appId: "1:46999947827:web:a8f6be714cb4ca48947146"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();




function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      
      document.getElementById("msg").value = "";
}

function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location = "index.html";
}