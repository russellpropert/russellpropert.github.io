(function () {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const auth = firebase.auth();

  // get elements
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const login = document.getElementById("login");
  const signup = document.getElementById("signup");
  const logout = document.getElementById("logout");
  const loggedInStatus = document.getElementById("loggedInStatus");
  const googlelogin = document.getElementById("googlelogin");

  //TODO: Add Google Sign in
  googlelogin.addEventListener("click", (e) => {
    console.log("google sign in clicked");

    // TODO: Use firebase.auth.GoogleAuthProvider() to implement Google sign in
    // Hint: the user email address is in the results user object: result.user.email

    // This is where I found the code
    // https://firebase.google.com/docs/auth/web/google-signin?authuser=0
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('email');
    auth.signInWithPopup(provider)
      .catch(e => console.log(e.message));
  });

  // login
  login.addEventListener("click", (e) => {
    const promise = auth.signInWithEmailAndPassword(
      email.value,
      password.value
    );
    promise.catch((e) => console.log(e.message));
  });

  // signup
  signup.addEventListener("click", (e) => {
    // TODO: check for real email
    const promise = auth.createUserWithEmailAndPassword(
      email.value,
      password.value
    );
    promise.catch((e) => console.log(e.message));
  });

  // logout
  logout.addEventListener("click", (e) => {
    console.log('logout clicked');
    auth.signOut();
  });

  // login state
  auth.onAuthStateChanged((firebaseUser) => {
      console.log(firebaseUser ? firebaseUser : "User is not logged in");
      loggedInStatus.innerText = firebaseUser ?
        `You are logged in using the following email: ${firebaseUser.$b.email}` :
        "You are not yet logged in";
      logout.style.display = firebaseUser ? "inline" : "none";
      login.style.display = firebaseUser ? "none" : "inline";
      signup.style.display = firebaseUser ? "none" : "inline";
      email.style.display = firebaseUser ? "none" : "inline";
      password.style.display = firebaseUser ? "none" : "inline";
      googlelogin.style.display = firebaseUser ? "none" : "inline";
  });
})();
