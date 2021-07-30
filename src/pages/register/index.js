import {navigateTo} from '../../routes.js'
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
                                  <i class="fa fa-eye" aria-hidden="true" id="eye-two" class="hidden"style="display: block;
                                  text-align: right;
                                  margin-top: 1px;
                                  cursor: pointer;"></i>
                                  <input type="password" name="password"  class="password" id="confirm_password" placeholder="Confirmar senha">
                              </div>
                              
                          </form>
                          <input type="submit" value="Cadastrar" class="register_btn" id="btn-register">
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
         <!--<div class="imgContainer">
              <img src="img/red-moon.jpg" alt="">
          </div>-->
      </div>
  </section>
    `

 rootElement.innerHTML = contentRegister
 const registerGoogle = rootElement.querySelector('#btngoogle')
 const emailTwo = rootElement.querySelector('#email_two')
 const passwordTwo = rootElement.querySelector('#input_password')
 const btnTwo = rootElement.querySelector('.register_btn')
 const name = rootElement.querySelector('#name')
 const confirmPas = rootElement.querySelector('#confirm_password')

 btnTwo.addEventListener('click' , () => {
    createNewUserWithEmailAndPassword (name.value, emailTwo.value, passwordTwo.value, confirmPas.value)
    navigateTo('/feed')
})

registerGoogle.addEventListener('click' , () => {
    registerWithGoogle ()
    navigateTo('/feed');
})


 return rootElement
}






/*
const inputEmail = document.querySelector('#input-email');
//const labelEmail = document.querySelector('#label-email');
const btnRegisterNewUser = document.querySelector('#btn-register')

const validateEmail = (event) => {
    const input = event.currentTarget;
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailTest = regex.test(input.value)

    if(!emailTest) {
        btnRegisterNewUser.setAttribute("disabled", "disabled");
        input.nextElementSibling.classList.add('error');
    } else {
        btnRegisterNewUser.removeAttribute("disabled");
        input.nextElementSibling.classList.remove('error');
    }

    return emailTest;
}

inputEmail.addEventListener('input', validateEmail);

*/
