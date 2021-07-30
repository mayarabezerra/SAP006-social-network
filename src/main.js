 //Este é o ponto de entrada da sua aplicação

//import { myFunction } from './lib/index.js';

//myFunction();

//NÃO SEI SE ISSO DEVE FICAR NA MAIN

/*
const nameOfRegister = document.getElementById('name');
const labelName = document.querySelector('#label-name');

const btnEye = document.querySelectorAll('.fa-eye');

const inputEmail = document.querySelector('#input-email');
const labelEmail = document.querySelector('#label-email');

const inputPassword = document.querySelector('#input-password');
const labelPassword = document.querySelector('#label-password');

const confirmPassWord = document.querySelector('#confirm-password');
const labelConfirmPassword = document.querySelector('#label-confirm-password')

const btnRegisterNewUser = document.querySelector('#btn-register');

nameOfRegister.addEventListener('keyup', ()=> {
    if (nameOfRegister.value.lenght <= 2) {
        labelName.setAttribute('style', 'color: red')
    } else {
        labelName.setAttribute('style', 'color:green')
    }
});



for(const eye of btnEye) {
    eye.addEventListener("click", () =>{
        const eyePassword = document.querySelectorAll('.password')
        for(const transformPassword of eyePassword){
            if (transformPassword.getAttribute('type') == 'password') {
                transformPassword.setAttribute('type', 'text')
            } else {
                transformPassword.setAttribute('type', 'password')
            }
        };
    });       
}



btnRegisterNewUser.addEventListener('click', function() {
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
  
});



//autenticação login
const email = document.getElementById('email');
const senha = document.querySelector('.password');
const btnSubmit = document.querySelector('.submit-btn');
btnSubmit.addEventListener('click', () => {
    firebase.auth().signInWithEmailAndPassword(email.value, senha.value)
  .then((userCredential) => {
    var user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error.code, error.message);
  });
});

    const validateEmail = (event) => {
    const input = event.currentTarget;
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailTest = regex.test(input.value);

    if(!emailTest) {
        btnRegisterNewUser.setAttribute("disabled", "disabled");
        input.nextElementSibling.classList.add('error');
    } else {
        btnRegisterNewUser.removeAttribute("disabled");
        input.nextElementSibling.classList.remove('error');
    }
}

inputEmail.addEventListener('input', validateEmail); 
*/