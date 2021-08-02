import {navigateTo} from '../../routes.js'
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
                <input type="submit" value="login" class="submit-btn">
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
        <!--</div>
        <div class="imgContainer">
            <img src="https://lottiefiles.com/36570-ah-a-ghost alt=">
        </div>
    </div>-->
</section>`;
  
newRootElement.innerHTML = contentnewElement;

const email = newRootElement.querySelector('#email');
const password = newRootElement.querySelector('.password');
const btn = newRootElement.querySelector('.submit-btn');
const logGoogle = newRootElement.querySelector('#btn-google');
const btnEye = newRootElement.querySelector('.fa-eye');

const labelEmail = newRootElement.querySelector('#labelEmail');
const labelPassword = newRootElement.querySelector('#labelPassword');

const msgError = newRootElement.querySelector('#msgError');
const msgSuccess = newRootElement.querySelector('#msgSuccess')

let validPassword = false;
let validEmail = false;

const validateEmail = (event) => {
    const input = event.currentTarget;
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailTest = regex.test(input.value)

    if(!emailTest) {
        btn.setAttribute('disabled', 'disabled');
        labelEmail.innerHTML = '<strong> <label style = "color: red"> *Insira um email valido*</label></strong>'
    } else {
        btnTwo.removeAttribute('disabled', 'disabled');
        labelEmail.innerHTML = 'Email';
    }
};

function validateLogin() {

    if(validPassword && validEmail){
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = 'Login válido'
    msgError.innerHTML = ''
    msgError.setAttribute('style', 'display: block')
    loginOfUser (email.value , password.value)
    navigateTo('/feed')
 }else{
    msgError.setAttribute('style, display: block')
    msgError.innerHTML = 'Preencha todos os campos corretamente'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style, display: block')
 }
 } 


email.addEventListener('input', validateEmail);

password.addEventListener('keyup', () => {
    
    if(password.value.length <= 8){
      labelPassword.setAttribute('style', 'color: red')
      labelPassword.innerHTML = 'Senha menor que 8 caractéres'
      password.setAttribute('style', 'border-color: red')
      validPassword = false;
    } else {
        labelPassword.setAttribute('style', 'color:green')
        labelPassword.innerHTML = 'Senha válida'
        password.setAttribute('style', 'border-color: green')
        validPassword = true;
     }
    
})

btn.addEventListener('click', validateLogin)

logGoogle.addEventListener('click' , () => {
    loginWithGoogle ();
})
 
 btnEye.addEventListener('click', () =>{
    let eyePassword = document.querySelector('.password')

     if(eyePassword.getAttribute('type') == 'password') {
        eyePassword.setAttribute('type', 'text')
    } else {
        eyePassword.setAttribute('type', 'password')
    }
    })

return newRootElement
};