function Fire(){
    var config="";
    if(config=="")
    {
        config = {
        apiKey: "AIzaSyBKVWHcO5GSkJWhsgVnigoi3K-KqrR1FwU",
    authDomain: "guian-7a4ca.firebaseapp.com",
    databaseURL: "https://guian-7a4ca.firebaseio.com",
    storageBucket: "guian-7a4ca.appspot.com",
    messagingSenderId: "706419049915"
    };
    firebase.initializeApp(config);
    }
    return firebase;    
}; 