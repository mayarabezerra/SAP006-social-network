import { reset } from '../../services/index.js';

export const forgot = () => {
  const rootForgot = document.createElement('div');
  const contentForgot = `
    <section class="section-exemple-three">
    <div class="shadow"></div>
    <div class="container-forgot">
        <div class="content-forgot">
            <section id="forgot-container" class="forgot-container"> 
                <h1 id="change-text">Redefinir senha</h1>
    
                <form action="">
                    <label for="email" id="labelEmail">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="nome@email.com" autocomplete="off">
</form>
        <button class="reset" id="reset-btn">Enviar</button>
        </section>
            </div>
            `;

  rootForgot.innerHTML = contentForgot;
  const btnReset = rootForgot.querySelector('#reset-btn');
  const changeText = rootForgot.querySelector('#change-text');

  btnReset.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    reset(email)
      .then(() => {
        changeText.innerHTML = 'Email enviado com sucesso';
      })
      .catch(() => {
        changeText.innerHTML = 'Ops algo deu errado';
      });
  });

  return rootForgot;
};
