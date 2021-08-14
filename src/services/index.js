import {navigateTo} from '../../routes.js'
//import { loadPostOnFeed } from '../../pages/feed/index.js'

const db = firebase.firestore()

//Firebase auth
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

export const createNewAccount = (emailTwo, passwordTwo, nameOfUser) => {
   const newUser = firebase.auth().createUserWithEmailAndPassword(emailTwo, passwordTwo)
   .then(() => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: nameOfUser
    }).then(() => {
      return sendVerificationEmail()
    }).catch((error) => {
     
    });  
  })
    
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

export const keepLoggedUser = (persistence) => {
    firebase.auth().setPersistence(persistence)
     .then(() => {
      const provider = new firebase.auth();
      return firebase.auth().signInWithRedirect(provider);
     })
     .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
     });
     return keepLoggedUser
   };



   /*Sign-out */
   export const logOut = () => { 
     firebase.auth().signOut().then(() => {
     navigateTo('/login') 
     // Sign-out successful.
   }).catch((error) => {
     // An error happened.
   });
   return logOut
 };
 


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
  return firebase.auth().currentUser.sendEmailVerification()
 
}

/*firebase firestore */

export const publicationPost  = (publication) => {
  
  const user = firebase.auth().currentUser;
  const post = {
    text: publication,
    userId: user.uid,
    userName: user.displayName,
    userEmail: user.email,
    likes: [],
    comments: [],
  }
  console.log(user);

  const publiCollection = firebase.firestore()
  
  return publiCollection.collection('posts').add(post);
};


export const editPost = (id, valorNovo) => db.collection('posts').doc(id).update({
  text: valorNovo,
})
.then(()=> true)
.catch((error) => error);



export const postsCollection = () => db.collection('posts').get();
export const collectionPost = db.collection("posts");

/*User conectado */
export const currentUser =  firebase.auth().currentUser;

export const userConected = firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const uid = user.uid;
    const userName = user.displayName
    console.log(uid, userName)
    return userName
    // ...
  } else {
    // User is signed out
    // ...
  }
});

/*Like post */

export function modifyLikes (id, userId) {
  const promiseLike = collectionPost
  .doc(id)
  .get()
  .then((post) => {
    console.log(post)
    let likes = post.data().likes;
   if (likes.includes(userId)){
     likes = likes.filter(userLikedId => {
      return userLikedId != userId
     })
   } else {
      likes.push(userId)
   }
    
    return collectionPost
    .doc(id)
    .update({
      likes
    })
    
  })
  return promiseLike
}