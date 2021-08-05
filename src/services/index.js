import {navigateTo} from '../../routes.js'
//Firebase
export const loginOfUser = (email,password) => {
  const loginWithEmail = firebase
  .auth()
  .signInWithEmailAndPassword(email,password)
  .then((userCredential) => {
    const user = userCredential.user
    navigateTo('/feed')
    console.log('uhuuuuuu', user)
    //window.location.replace('/feed')
  })

  .catch((error) =>{
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('Email ou senha inválido');
    console.log('viiiish', errorCode, errorMessage);
  })
  return loginWithEmail
}

export const loginWithGoogle = () => {
const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/userinfo.email');
    firebase.auth().signInWithPopup(provider)
    .then(result => {
       navigateTo('/feed');
        console.log(result);
    }) .catch(err =>{
        alert('Erro ao logar');
        console.log(err);
    })
    return provider
}

export const createNewUserWithEmailAndPassword = (email, password) => {
   const newUser = firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('yasss')
      sendVerificationEmail();
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
          navigateTo('/feed');
          console.log(result);
      }) .catch(err =>{
          alert('Erro ao logar');
          console.log(err);
      })
      return providerRegister
  };

  /*Sign-out 
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });


export const reset = (email) => {
  const forgotPassword = firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      alert('E-mail enviado com sucesso!');
       })
    .catch(err =>{
      alert('Erro ao logar');
      console.log(err);
    })
      return forgotPassword
    }

    /*.catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
       })*/

 /*email autentication*/  

 export const sendVerificationEmail = () => {
  //Built in firebase function responsible for sending the verification email
  firebase.auth().currentUser.sendEmailVerification()
  .then(() => {
      console.log('Verification Email Sent Successfully !');
      //redirecting the user to the profile page once everything is done correctly
     navigateTo('/login');
  })
  .catch(error => {
      console.error(error);
  })
}

/*antigo createNewUser
export const createNewUserWithEmailAndPassword = (email, password) => {
   const newUser = firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      navigateTo('/login')
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
}; */


