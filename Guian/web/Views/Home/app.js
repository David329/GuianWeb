// JavaScript File

(function(){

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBKVWHcO5GSkJWhsgVnigoi3K-KqrR1FwU",
    authDomain: "guian-7a4ca.firebaseapp.com",
    databaseURL: "https://guian-7a4ca.firebaseio.com",
    storageBucket: "guian-7a4ca.appspot.com",
    messagingSenderId: "706419049915"
  };
  firebase.initializeApp(config);
  var IanId = document.getElementById('IanId');
  const dbRef = firebase.database().ref().child('text');
  dbRef.on('value', snap => IanId.innerText = snap.val());
  
  
    //Get Elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogOut = document.getElementById('btnLogOut');
  var   uploader = document.getElementById('uploader');
  var   fileButton = document.getElementById('fileButton');
  
  //Add login event
  btnLogin.addEventListener('click', e => {
    //Get email and pass\
    var email = txtEmail.value;
    var pass = txtPassword.value;
    var auth = firebase.auth();
    
    //Sign in 
    var promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));

    
  }); 
  
  //Add signup event
  
    btnSignUp.addEventListener('click', e=> {
     //Get email and pass
    var email = txtEmail.value;
    var pass = txtPassword.value;
    var auth = firebase.auth();
    
    //Sign in 
    var promise = auth.createUserWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
    
    //Add Logout event
    btnLogOut.addEventListener('click', e=> {
      firebase.auth().signOut();
      btnLogOut.classList.add('hide');
    });
    
    //Add realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser)
      {
        console.log(firebaseUser);
        btnLogOut.classList.remove('hide');
      }
      else
      {
        console.log('Not logged in');
      }
    })
    
  })
  
   //Listen for file selection
   fileButton.addEventListener('change', e=> 
   {
     //Get File
     var file = e.target.files[0];
     
     
     //Create a Storage Ref
     var storageRef = firebase.storage().ref('folder_don_ian/' + file.name) // Folder_name/file_name
     
     
     //Upload file
     var task = storageRef.put(file);
     
     
     //Update progress bar
     task.on('state_changed', 
          function progress(snapshot)
          {
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
          },
          function error(err)
          {
            
          },
          function complete()
          {
            
          }
          
     );
     
     
     
   })
  
}());
