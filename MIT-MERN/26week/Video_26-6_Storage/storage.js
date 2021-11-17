(function() {
  const firebaseConfig = {
    apiKey: "AIzaSyBSSy3PQ2wLw9Wn3-Dy9uDnCOEKIysZs0Q",
    authDomain: "mit-mern-week-26.firebaseapp.com",
    databaseURL: "https://mit-mern-week-26-default-rtdb.firebaseio.com",
    projectId: "mit-mern-week-26",
    storageBucket: "mit-mern-week-26.appspot.com",
    messagingSenderId: "820208714185",
    appId: "1:820208714185:web:4308df87f8120e7802e818"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Create root reference
  const storage = firebase.storage();
  const storageRef = storage.ref();

  //get UI elements
  const file     = document.getElementById('file');
  const upload   = document.getElementById('upload');
  const download = document.getElementById('download');
  const status   = document.getElementById('status');
  const image    = document.getElementById('image');

  // upload file
  upload.addEventListener('click', e => {
    // Create file reference
    const ref = storageRef.child('picture');
    console.log(file.files);
    let photo = file.files[0];

    // Upload
    ref.put(photo).then(function(snapshot) {
      console.log('Uploaded a blob of file!');
      status.innerHTML = 'Uploaded blob or file!'
    });
  });

  // download file
  download.addEventListener('click', e => {
    // File reference
    const ref = storage.ref('picture');

    ref.getDownloadURL().then(function(url) {
      // Insert URL into an <img> tag to "download"
      image.src = url;
      console.log(url);
      status.innerHTML = 'Downloaded blob or file.'
    }).catch(function(error){console.log(error)});
  });

}());