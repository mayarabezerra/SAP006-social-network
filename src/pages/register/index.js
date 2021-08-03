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
             <!-- <img src="img/red-moon.jpg" alt="">-->
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
        alert('Cadastrado com sucesso, agora faça login') 
        msgError.setAttribute('style', 'display: none');
        msgError.innerHTML = '';
        createNewUserWithEmailAndPassword(emailTwo.value, passwordTwo.value); 
     } else {
         //alert('erro')
         msgError.setAttribute('style', 'display: block')
         msgError.innerHTML = '<strong> <label style="margin-top: 15px; font-size: 1.1rem; color: red; text-align: center"> Preencha corretamente...</label></strong>'
         msgSuccess.setAttribute('style', 'display: none')
         msgSuccess.innerHTML = '';
         console.log('erro')
     }
 };

const animation = bodymovin.loadAnimation({
    container: rootElement.querySelector('#imgContainer'),
    renderer: 'svg/canvas/html',
    loop: true,
    autoplay:true,
    path:'36570-ah-a-ghost.jason'
})

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
