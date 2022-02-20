function adduser()
{
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

        window.location = "kwitter_room.html";
}
var firebaseConfig = {
    apiKey: "AIzaSyAjDwhXUOSezv9Cv5b5Vu_mV8-akdt6DFk",
    authDomain: "chatbot-f70f8.firebaseapp.com",
    databaseURL: "https://chatbot-f70f8-default-rtdb.firebaseio.com",
    projectId: "chatbot-f70f8",
    storageBucket: "chatbot-f70f8.appspot.com",
    messagingSenderId: "206872496494",
    appId: "1:206872496494:web:8bd132234cb019b43c597f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

