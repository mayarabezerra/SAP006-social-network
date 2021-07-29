import {createNewUserWithEmail} from '../../services/index.js'

export const registerUsuario = () => {
    const rootElement = document.createElement('div');
    const contentRegister = `
    <section class="section-exemple-two">
      <div class="shadow-two"></div>
      <div class="container-register">
          <div class="content-register">
              <section class="three-section">
                      <section id="register-container" class="register-container"> <!--Container que engloba todo o login-->
                          <h1>Cadastrar</h1>
                          <form action="" id="register-now">
                              <label for="text" id="label-name">Nome e Sobrenome</label>
                              <input type="text" name="name" id="name" placeholder="Exemplo: Regan McNeil" >
                              <label for="email" id="label-email">E-mail</label>
                              <input type="email" name="email" id="input-email" placeholder="nome@email.com" autocomplete="off" required> 
                              
                             <!--
                                 <label for="email">Confirmar e-mail</label>
                              <input type="email" name="email" id="email-two" placeholder="nome@email.com" autocomplete="off" required> 
                             --> 
                              <label for="password" id="label-password">Senha</label>
                              <div class="input-icons-register">
                                  <i class="fa fa-eye" aria-hidden="true" id="eye-one" class="hidden" style="display: block;
                                  text-align: right;
                                  margin-top: 1px;
                                  cursor: pointer;"></i>
                                  <input type="password" name="password" class="password" id="input-password" placeholder="Digite sua Senha">
                              </div>
                              <label for="password" id="label-confirm-password">Confirmar senha</label>
                              <div class="input-icons-register">
                                  <i class="fa fa-eye" aria-hidden="true" id="eye-two" class="hidden"style="display: block;
                                  text-align: right;
                                  margin-top: 1px;
                                  cursor: pointer;"></i>
                                  <input type="password" name="password" class="password" id="confirm-password" placeholder="Confirmar senha">
                              </div>
                              
                          </form>
                          <input type="submit" value="Cadastrar" class="register-btn" id="btn-register">
                          <div id="social-container">
                              <p>Cadastrar com sua conta do Google</p>
                              <i class="fa fa-google-plus-official fa-3x" aria-hidden="true"></i>
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
 return rootElement
}


