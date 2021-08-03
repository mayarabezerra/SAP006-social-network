//import {navigateTo} from '../../routes.js'
import{loginOfUser} from '../../services/index.js'
import {loginWithGoogle} from '../../services/index.js'
export const loginUsuario = () => {
    const newRootElement = document.createElement('div');
    const contentnewElement = `
    <section class="section-exemple">
    <div class="shadow"></div>
    <div class="container-login">
        <div class="content-login">
            <section id="login-container" class="login-container"> <!--Container que engloba todo o login-->
                <h1>Login</h1>
                <div id="msgError" class="text-error"></div>
                <div id="msgSuccess" class="text-success"></div>
                <form action="">
                    <label for="email" id="labelEmail">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="nome@email.com" autocomplete="off"> <!--name é utilizado pra resgatar o valor no backend-->
                    <label for="password" id="labelPassword">Senha</label>
                    <div class="input-icons-login">
                        <i class="fa fa-eye" aria-hidden="true" id="eye-one" class="hidden"></i>
                        <input type="password" name="password" class="password" placeholder="Digite sua Senha">
                    </div>
                    <a href="#" id="forgot-pass">Esqueceu a senha?</a> 
                </form>
                <button type="submit" class="register_btn" id="submit-btn" disabled="disabled">Login</button>
                <div id="social-container">
                    <p>Ou faça login com sua conta do Google</p>
                    <button class="fa fa-google-plus-official fa-3x" aria-hidden="true" id="btn-google" ></button>
                </div>
                <div id="register-container" class="bottom-container">
                    <p>Ainda não tem uma conta?</p>
                    <a href="/register">Cadastrar</a>
                    <a href="/">Phenomena</a>
                </div>
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
</section>`;
newRootElement.innerHTML = contentnewElement;
const email = newRootElement.querySelector('#email');
const password = newRootElement.querySelector('.password');
const btn = newRootElement.querySelector('#submit-btn');
const logGoogle = newRootElement.querySelector('#btn-google');
const btnEye = newRootElement.querySelector('.fa-eye');
const labelEmail = newRootElement.querySelector('#labelEmail');
const labelPassword = newRootElement.querySelector('#labelPassword');
const msgError = newRootElement.querySelector('#msgError');
const msgSuccess = newRootElement.querySelector('#msgSuccess')
let validPassword = false;

const validateEmail = (event) => {
    const input = event.currentTarget;
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailTest = regex.test(input.value)
    if(!emailTest) {
        btn.setAttribute('disabled', 'disabled');
        labelEmail.innerHTML = '<strong> <label style = "color: red"> *Insira um email valido*</label></strong>'
    } else {
        btn.removeAttribute('disabled', 'disabled');
        labelEmail.innerHTML = 'Email';
    }
};

function validateLogin() {
    if(validPassword){
    loginOfUser (email.value , password.value)
    
 }else{
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong><Label style="margin-top: 15px; font-size: 1.1rem; color: red; text-align: center">Preencha todos os campos corretamente</label></strong>'
    msgSuccess.setAttribute('style', 'display: none')
    msgSuccess.innerHTML = '';
 }
 };
 

email.addEventListener('input', validateEmail);

btn.addEventListener('click', validateLogin);

password.addEventListener('keyup', () => {
    if(password.value.length <= 8){
        labelPassword.setAttribute('style', 'color: red')
        labelPassword.innerHTML = '<strong><label>Senha menor que 8 caracteres</label></strong>'
        password.setAttribute('style', 'border-color: red')
        validPassword = false;
    } else {
        labelPassword.setAttribute('style', 'color:green')
        labelPassword.innerHTML = '<strong><label>Senha válida</label></strong>'
        password.setAttribute('style', 'border-color: green')
        validPassword = true;
     }
});

logGoogle.addEventListener('click' , () => {
    loginWithGoogle ();
});

btnEye.addEventListener('click', () =>{
    let eyePassword = document.querySelector('.password')
     if(eyePassword.getAttribute('type') == 'password') {
        eyePassword.setAttribute('type', 'text')
    } else {
        eyePassword.setAttribute('type', 'password')
    }
    });

return newRootElement
};


