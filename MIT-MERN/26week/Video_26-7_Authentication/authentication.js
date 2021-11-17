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
  
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  // Get HTML elements
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const login = document.getElementById('login');
  const signup = document.getElementById('signup');
  const logout = document.getElementById('logout');

  // Login
  login.addEventListener('click', e => {
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => console.log(e.mesage));
  });

  // Signup
  signup.addEventListener('click', e => {
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => console.log(e.message));
  })

  // Logout
  logout.addEventListener('click', e => {
    auth.signOut();
  });

  // Login state
  auth.onAuthStateChanged(firebaseUser => {
      console.log(firebaseUser ? firebaseUser : 'User is not logged in.');
      login.style.display = firebaseUser ? 'none' : 'inline';
      signup.style.display = firebaseUser ? 'none' : 'inline';
      logout.style.display = firebaseUser ? 'inline' : 'none';
  });

}());