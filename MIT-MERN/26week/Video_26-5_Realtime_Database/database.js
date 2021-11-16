(function() {

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBSSy3PQ2wLw9Wn3-Dy9uDnCOEKIysZs0Q",
    authDomain: "mit-mern-week-26.firebaseapp.com",
    projectId: "mit-mern-week-26",
    storageBucket: "mit-mern-week-26.appspot.com",
    messagingSenderId: "820208714185",
    appId: "1:820208714185:web:4308df87f8120e7802e818"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Handle on Firebase db
  const db = firebase.database();

  const message = document.getElementById('message');
  const write   = document.getElementById('write');
  const read    = document.getElementById('read');
  const status  = document.getElementById('status');

  // Write
  write.addEventListener('click', e => {
    const messages = db.ref('messages');

    // Simple ID -- Ok for example. Do not use in production.
    const id = (new Date).getTime();

    // Write to db
    messages.child(id).set({'message' : message.value})
    .then(function() {
      status.innerHTML = 'Wrote to DB!';
    });
  });

  //Read
  read.addEventListener('click', e => {
    status.innerHTML = '';
    const messages = db.ref('messages');

    // Read from db
    messages.once('value')
    .then(function(dataSnapshot) {
      const data = dataSnapshot.val();
      const keys = Object.keys(data);

      // Write results to HTML
      keys.forEach(key => {
        console.log(data[key]);
        status.innerHTML += JSON.stringify(data[key]) + '<br>';
      });
    });
  });
}());