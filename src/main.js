/* Este é o ponto de entrada da sua aplicação

import { myFunction } from './lib/index.js';

myFunction();*/

//NÃO SEI SE ISSO DEVE FICAR NA MAIN
let btnEyeOne = document.querySelector('#eye-one');
let btnEyeTwO = document.querySelector('#eye-two');

btnEyeOne.addEventListener('click', () => {
    let inputPassword = document.querySelector('.password')

    if(inputPassword.getAttribute('type') == 'password') {
        inputPassword.setAttribute('type', 'text')
    } else {
        inputPassword.setAttribute('type', 'password')
    }
});

btnEyeTwO.addEventListener('click', () => {
    let inputPasswordTwO = document.querySelector('.password-two')

    if(inputPasswordTwO.getAttribute('type') == 'password') {
        inputPasswordTwO.setAttribute('type', 'text')
    } else {
        inputPasswordTwO.setAttribute('type', 'password')
    }
})


function login() {
    if (firebase.auth().currentUser) {
        firebase.auth().signOut()
    }
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    firebase
    .auth()
    .signInWithEmailandPassword(email, password)
    .then( () => {
        swal.fire({
            icon: 'sucess',
            tittle: 'login realizado com sucesso',
        }) .then ( () => {
            setTimeout (() => {
                window.location.replace('teste.html')
            }, 1000)
        })
    }) 
    .catch((error) => {
        swal.fire ({
            icon: 'error' ,
            title: error.message,
        })
    })
}
