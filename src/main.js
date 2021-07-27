/* Este é o ponto de entrada da sua aplicação

import { myFunction } from './lib/index.js';

myFunction();*/

//NÃO SEI SE ISSO DEVE FICAR NA MAIN

const btnEye = document.querySelectorAll('.fa-eye');



for(const eye of btnEye) {
    eye.addEventListener("click", () =>{
        const inputPassword = document.querySelectorAll('.password')
        for(const transformPassword of inputPassword){
            if (transformPassword.getAttribute('type') == 'password') {
                transformPassword.setAttribute('type', 'text')
            } else {
                transformPassword.setAttribute('type', 'password')
            }
        };
    });
        
}


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
