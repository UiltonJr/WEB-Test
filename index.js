firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("register_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if (user != null) {
      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
    }
  } else {
    // No user is signed in.
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    document.getElementById("register_div").style.display = "none";
  }
});

function login() {
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    window.alert("Error: " + errorMessage);
  });
}

function logout() {
  firebase.auth().signOut().then(function () {
    // Sign-out successful.
  }).catch(function (error) {
    // An error happened.
  });
}
function register() {
  //window.alert(document.getElementById("btz").value);
  var nuserEmail = document.getElementById("email_field").value;
  var nuserPass = document.getElementById("password_field").value;
  firebase.auth().createUserWithEmailAndPassword(nuserEmail, nuserPass).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
} 