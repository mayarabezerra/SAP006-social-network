//Firebase
export const loginOfUser = (email,password) => {
  const loginWithEmail = firebase
  .auth()
  .signInWithEmailAndPassword(email,password)
  .then((userCredential) => {
    const user = userCredential.user
    console.log('uhuuuuuu', user)
    //window.location.replace('/feed')
  })

  .catch((error) =>{
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('viiiish', errorCode, errorMessage);
  })
  return loginWithEmail
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

export const createNewUserWithEmailAndPassword = (email, password) => {
   const newUser = firebase.auth().createUserWithEmailAndPassword( email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      //window.location.replace('dashboard.html')
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
      // ..
    });
  return newUser
};

export const registerWithGoogle = () => {
  const providerRegister = new firebase.auth.GoogleAuthProvider();
      providerRegister.addScope('https://www.googleapis.com/auth/userinfo.email');
      firebase.auth().signInWithPopup(providerRegister)
      .then(result => {
          console.log(result);
      }) .catch(err =>{
          alert('Erro ao logar');
          console.log(err);
      })
      return providerRegister
  }