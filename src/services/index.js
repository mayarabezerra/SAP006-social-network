//Firebase

function createNewUserWithEmail () {
    firebase.auth().createUserWithEmailAndPassword(inputEmail.value, inputPassword.value)
    .then((userCredential) => {
      var user = userCredential.user;
      //window.location.replace('dashboard.html')
      console.log(user)
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage)
      // ..
    });
  
};
