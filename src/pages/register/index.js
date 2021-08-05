//import {navigateTo} from '../../routes.js'
import {createNewUserWithEmailAndPassword} from '../../services/index.js'
import {registerWithGoogle} from '../../services/index.js'

export const registerUsuario = () => {
    const rootElement = document.createElement('div');
    const contentRegister = `
    <section class="section-exemple-two">
      <div class="shadow-two"></div>
      <div class="container-register">
          <div class="content-register">
              <section class="three-section">
                      <section id="register-container" class="register-container"> 
                          <h1>Cadastrar</h1>
                          <div class="msg-error"></div>
                          <div class="msg-success"></div>
                          <form action="" id="register-now">
                              <label for="text" id="label-name">Nome e Sobrenome</label>
                              <input type="text" name="name" id="name" placeholder="Exemplo: Regan McNeil" >
                              <label for="email" id="label-email">E-mail</label>
                              <input type="email" name="email" id="input-email" placeholder="nome@email.com" autocomplete="off">
                              
                              <label for="password" id="label-password">Senha</label>
                              <div class="input-icons-register">
                                  <i class="fa fa-eye" aria-hidden="true" id="eye-one" class="hidden" style="display: block;
                                  text-align: right;
                                  margin-top: 1px;
                                  cursor: pointer;"></i>
                                  <input type="password" name="password" class="password" id="input_password" placeholder="Digite sua Senha">
                              </div>
                              <label for="password" id="label-confirm-password" >Confirmar senha</label>
                              <div class="input-icons-register">
                                  <i class="fa fa-eye" aria-hidden="true" id="eye-two" class="hidden" style="display: block;
                                  text-align: right;
                                  margin-top: 1px;
                                  cursor: pointer;"></i>
                                  <input type="password" name="password"  class="password" id="confirm_password" placeholder="Confirmar senha">
                              </div>
                              
                          </form>
                          <button type="submit" class="register_btn" id="btn-register" disabled="disabled">Cadastrar</button>
                          <div id="social-container">
                              <p>Cadastrar com sua conta do Google</p>
                              <button class="fa fa-google-plus-official fa-3x" aria-hidden="true" id="btngoogle"></button>
                          </div>
                          <div id="register-container">
                              <p>Já tem uma conta?</p>
                              <a href="/login">Login</a>
                              <a href="/">Phenomena</a>
                          </div>
                          </section>
              </section>
          </div>
         <div class="imgContainer">
         <svg class="skull" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" viewBox="0 0 61.1 99.1" xml:space="preserve">
         <defs>
           <mask id="skullMask" maskUnits="userSpaceOnUse" x="0" y="0" width="61" height="99">
               <rect id='rect' x="0" y="100" fill='#ffffff' width="61.1" height="99.1">
                 <animate attributeType="XML" attributeName="y" from="100" to="-100" dur="4s" repeatCount="indefinite"/>
               </rect>
           </mask>
           <g id='skull'>
             <path d="M17.9 38.6c0 0-5.1 1.5-7.4 3.8s-1.3 6.8-1.3 6.8 1.5 3.2 4.3 3.8 3.6-0.6 3.6-0.6 5-1.2 7.1-4.1c2.1-2.9 0-6.3 0-6.3S24 36.7 17.9 38.6z"/>
             <path d="M43.3 38.6c0 0 5.1 1.5 7.4 3.8s1.3 6.8 1.3 6.8 -1.5 3.2-4.3 3.8 -3.6-0.6-3.6-0.6 -5-1.2-7.1-4.1c-2.1-2.9 0-6.3 0-6.3S37.2 36.7 43.3 38.6z"/>
             <path d="M30.6 51.3l-3.2 8.8c0 0-0.4 4 3.2 4s3.2-3.7 3.2-3.7L30.6 51.3z"/>
             <path d="M18.8 71v6.2c0 0 0.9 1.7 1.6 0V71C20.4 71 19.7 70 18.8 71z"/>
             <path d="M24.1 72v6.2c0 0 0.9 1.7 1.6 0V72C25.7 72 25 71 24.1 72z"/>
             <path d="M29.8 72.6v6.2c0 0 0.9 1.7 1.6 0v-6.2C31.4 72.6 30.7 71.6 29.8 72.6z"/>
             <path d="M35.2 72.2v6.2c0 0 0.9 1.7 1.6 0v-6.2C36.8 72.2 36.1 71.2 35.2 72.2z"/>
             <path d="M40.7 71v6.2c0 0 0.9 1.7 1.6 0V71C42.3 71 41.6 70 40.7 71z"/>
             <g id="skull">
               <path d="M29.6 1C29.9 1 30 1 30 1l0 0 0 0c0 0 0.1 0 0.4 0 2 0 9 0.2 15.8 3.4 8.7 4 13.3 10.9 13.8 20.7 0.6 11.9-3.6 19.8-3.6 19.9l-0.3 0.5 0.3 0.5 3.1 5c-0.5 3.8-2.2 6.4-2.7 7.1l-11.6 5.7L44.8 64l0 0.6L44.2 74l0 0.2 0.1 0.2c0.1 0.4 0.6 1.7 1.7 1.7 1 0 1.6-1.1 1.8-1.6l0.1-0.2 0-0.2 0.2-7.7 3.7-1.8L50 80.3c-8.9 9.1-16.6 10.9-17.4 11.1h-4.8C21.4 90 12.6 81.7 11 80.2L9.2 64.6l3.6 1.9 0.5 7.8 0 0.2 0.1 0.2c0.2 0.3 0.7 1.3 1.7 1.3 0.9 0 1.4-0.8 1.6-1.5l0-0.2 0-0.2 -0.5-9.4 0-0.6 -0.5-0.3 -12.2-6c-1.4-2.5-1.9-5.9-2-6.9L4.6 46l0.2-0.4 -0.1-0.4c-4.4-13.9-3.6-20-3.6-20l0-0.1V25c0-9.7 4.3-16.7 12.8-20.7C20.6 1.2 27.6 1 29.6 1L29.6 1M29.6 0C25.9 0 0.1 0.9 0.1 25c0 0-0.9 6.2 3.7 20.5l-3.2 5.2c0 0 0.4 4.7 2.3 7.9l12.5 6.2 0.5 9.4c0 0-0.2 0.8-0.7 0.8 -0.2 0-0.5-0.2-0.8-0.8l-0.6-8.3 -5.8-3 2.1 17.8c0 0 10.2 10.2 17.6 11.8h5c0 0 8.4-1.5 18.2-11.7l2-17.8 -5.8 2.8 -0.2 8.3c0 0-0.4 0.9-0.8 0.9 -0.2 0-0.5-0.3-0.8-1l0.5-9.3 11.8-5.8c0 0 2.6-3.2 3.1-8.1l-3.3-5.3c0 0 4.3-8.1 3.8-20.4C59.9 0.8 34.1 0 30.5 0c-0.3 0-0.4 0-0.4 0S29.9 0 29.6 0L29.6 0z"/>
             </g>
           </g>
         </defs>
         <use xlink:href="#skull" fill="#810504" mask="url(#skullMask)"/>
       </svg>
       
       </div>
          </div>
      </div>
  </section>
    `

 rootElement.innerHTML = contentRegister

 
 const nameOfUser = rootElement.querySelector('#name');
 const labelOfName = rootElement.querySelector('#label-name');
 const emailTwo = rootElement.querySelector('#input-email');
 const labelEmail = rootElement.querySelector('#label-email');
 const passwordTwo = rootElement.querySelector('#input_password');
 const labelPasswordTwo = rootElement.querySelector('#label-password');
 const passwordConfirm = rootElement.querySelector('#confirm_password');
 const labelPasswordConfirm = rootElement.querySelector('#label-confirm-password');
 const btnTwo = rootElement.querySelector('.register_btn');
 const btnEye = rootElement.querySelectorAll('.fa-eye');
 const registerGoogle = rootElement.querySelector('#btngoogle');
 const msgError= rootElement.querySelector('.msg-error');
 const msgSuccess = rootElement.querySelector('.msg-success');
 let nameValid = false;
 let passwordValid = false;
 let confirmPasswordValide = false;

/*Function */

 const validateEmail = (event) => {
     const input = event.currentTarget;
     const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     const emailTest = regex.test(input.value)

     if(!emailTest) {
         btnTwo.setAttribute('disabled', 'disabled');
         labelEmail.innerHTML = '<strong> <label style = "color: red"> *Insira um email valido*</label></strong>'
     } else {
         btnTwo.removeAttribute('disabled', 'disabled');
         labelEmail.innerHTML = 'Email';
     }
 };

 function isItValid() {
     if (nameValid && passwordValid && confirmPasswordValide) {
        msgSuccess.setAttribute('style', 'display: block')
        alert('Confirme o e-mail recebido e depois faça login') 
        msgError.setAttribute('style', 'display: none');
        msgError.innerHTML = '';
        createNewUserWithEmailAndPassword(emailTwo.value, passwordTwo.value); 
     } else {
         msgError.setAttribute('style', 'display: block')
         msgError.innerHTML = '<strong> <label style="margin-top: 15px; font-size: 1.1rem; color: red; text-align: center"> Preencha corretamente...</label></strong>'
         msgSuccess.setAttribute('style', 'display: none')
         msgSuccess.innerHTML = '';
         console.log('erro')
     }
 };

/*Listeners */

nameOfUser.addEventListener('keyup', () =>{
     if (nameOfUser.value.length <= 5) {
        labelOfName.innerHTML = '<strong> <label style = "color: red"> *Insira no mínimo 5 caracteres*</label></strong>'
        btnTwo.setAttribute('disabled', 'disabled');
        nameValid = false;
     } else {
        labelOfName.innerHTML = 'Nome e Sobrenome';
        btnTwo.removeAttribute('disabled', 'disabled');
        nameValid = true;
     }
 });

emailTwo.addEventListener('input', validateEmail);

passwordTwo.addEventListener('keyup', () =>{
    if (passwordTwo.value.length <= 8) {
       labelPasswordTwo.innerHTML = '<strong> <label style = "color: red"> *Insira no mínimo 8 caracteres*</label></strong>'
       passwordValid = false;
    } else {
       labelPasswordTwo.innerHTML = 'Senha';  
       passwordValid = true;
    }
});

passwordConfirm.addEventListener('keyup', () =>{
    if (passwordTwo.value != passwordConfirm.value) {
        labelPasswordConfirm.innerHTML = '<strong> <label style = "color: red"> *As senhas não conferem*</label></strong>'
        confirmPasswordValide = false;
    } else {   
        labelPasswordConfirm.innerHTML = 'Confirmar senha';  
        confirmPasswordValide = true;
    }
});

btnTwo.addEventListener('click', isItValid)

registerGoogle.addEventListener('click' , () => {
    registerWithGoogle ()
})

btnEye.forEach(btn  =>{
    btn.addEventListener('click', ()=> {
        const eyePassword = document.querySelectorAll('.password')
        eyePassword.forEach( btnT => {
        if(btnT.getAttribute('type') == 'password') {
            btnT.setAttribute('type', 'text')
        } else {
            btnT.setAttribute('type', 'password')
        }
    })})   
});

return rootElement;
}
