//Firebase
export const loginOfUser = (email,password) => {
  firebase
  .auth()
  .signInWithEmailAndPassword(email,password)
  .then((userCredential) => {
    let user = userCredential.user
    console.log('uhuuuuuu', user)
    //window.location.replace('/feed')
  })

  .catch((error) =>{
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log('viiiish', errorCode, errorMessage);
  })
}

export const loginWithGoogle = () => {
const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/userinfo.email');
    firebase.auth().signInWithPopup(provider)
    .then(result => {
        console.log(result);
    }) .catch(err =>{
        alert('Erro ao logar');
        console.log(err);
    })
    return provider
}

/*function createNewUserWithEmail () {
    firebase.auth().createUserWithEmailAndPassword(email, password)
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
  
};*/
