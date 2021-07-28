export const loging = () => {
    const newRootElement = document.createElement('div');
    const contentnewElement = `
    <section class="section-exemple">
    <div class="shadow"></div>
    <div class="container-login">
        <div class="content-login">
            <section id="login-container" class="login-container"> <!--Container que engloba todo o login-->
                <h1>Login</h1>
                <form action="">
                    <label for="email">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="nome@email.com" autocomplete="off"> <!--name é utilizado pra resgatar o valor no backend-->
                    <label for="password">Senha</label>
                    <div class="input-icons-login">
                        <i class="fa fa-eye" aria-hidden="true" id="eye-one" class="hidden"></i>
                        <input type="password" name="password" class="password" placeholder="Digite sua Senha">
                    </div>
                    <a href="#" id="forgot-pass">Esqueceu a senha?</a> 
                </form>
                <input type="submit" value="Login" class="submit-btn">
                <div id="social-container">
                    <p>Ou faça login com sua conta do Google</p>
                    <i class="fa fa-google-plus-official fa-3x" aria-hidden="true"></i>
                </div>
                <div id="register-container" class="bottom-container">
                    <p>Ainda não tem uma conta?</p>
                    <a href="./pages/register/index.js">Cadastrar</a>
                    <a href="./pages/about/index.js">Phenomena</a>
                </div>
                </section>
        <!--</div>
        <div class="imgContainer">
            <img src="https://lottiefiles.com/36570-ah-a-ghost alt=">
        </div>
    </div>-->
</section>`;
  
newRootElement.innerHTML = contentnewElement;
};

