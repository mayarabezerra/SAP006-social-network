/* istanbul ignore file */
import { getFirebase } from './firebase.js';

const db = getFirebase().firestore();
export const sendVerificationEmail = () => getFirebase().auth().currentUser.sendEmailVerification();

export const createNewAccount = (emailTwo, passwordTwo, nameOfUser) => {
  const newUser = getFirebase().auth().createUserWithEmailAndPassword(emailTwo, passwordTwo)
    .then(() => {
      const user = getFirebase().auth().currentUser;
      user.updateProfile({
        displayName: nameOfUser,
      }).then(() => sendVerificationEmail())
        .catch((error) => {
          const errorError = error.code;
          return errorError;
        });
    });
  return newUser;
};

export const registerWithGoogle = () => {
  const providerRegister = new firebase.auth.GoogleAuthProvider();
  providerRegister.addScope('https://www.googleapis.com/auth/userinfo.email');
  return firebase.auth().signInWithPopup(providerRegister);
};

/* Login */

export const loginOfUser = (email, password) => {
  const loginWithEmail = getFirebase()
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })

    .catch((error) => {
      const errorMessage = error.message;
      return errorMessage;
    });
  return loginWithEmail;
};

export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/userinfo.email');
  return firebase.auth().signInWithPopup(provider);
};

/* Observe User Logged */
export const observer = (cb) => {
  firebase.auth().onAuthStateChanged(cb);
};

/* Keep Logged */

export const keepLoggedUser = (persistence) => {
  firebase.auth().setPersistence(persistence)
    .then(() => {
      const provider = new firebase.Auth();
      return firebase.auth().signInWithRedirect(provider);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const newLocal = (errorCode, errorMessage);
      return newLocal;
    });
  return keepLoggedUser;
};

/* Sign-out */

export const logOut = () => {
  getFirebase().auth().signOut()
    .catch((error) => {
      const errorCode = error.code;
      return errorCode;
    });
  return logOut;
};

/* Sign-out */

export const reset = (email) => {
  const forgotPassword = firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      console.log('caiu no sucesso');
    })
    .catch((err) => {
      const errorCode = err.code;
      return errorCode;
    });
  return forgotPassword;
};

/* Firebase Firestore */

export const publicationPost = (publication) => {
  const user = firebase.auth().currentUser;
  const post = {
    text: publication,
    userId: user.uid,
    userName: user.displayName,
    userEmail: user.email,
    likes: [],
    comments: [],
  };

  const publiCollection = firebase.firestore();

  return publiCollection.collection('posts').add(post);
};

/* Edit */

export const editPost = (id, valorNovo) => db.collection('posts').doc(id).update({
  text: valorNovo,
})
  .then(() => true)
  .catch((error) => error);

export const postsCollection = () => db.collection('posts').get();
export const collectionPost = db.collection('posts');

/* Delete */

export const deletePublication = (id) => {
  firebase
    .firestore()
    .collection('posts')
    .doc(id)
    .delete()
    .then(() => {
      console.log('caiu no sucesso');
    })
    .catch((erro) => {
      const errorCode = erro.code;
      return errorCode;
    });
};

/* Like post */

export function modifyLikes(id, userId) {
  const promiseLike = collectionPost
    .doc(id)
    .get()
    .then((post) => {
      let likes = post.data().likes;
      if (likes.includes(userId)) {
        likes = likes.filter((userLikedId) => userLikedId !== userId);
      } else {
        likes.push(userId);
      }

      return collectionPost
        .doc(id)
        .update({
          likes,

        });
    });
  return promiseLike;
}
