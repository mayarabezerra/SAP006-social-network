export const whoWeAre = () => {
  const rootElement = document.createElement('div');
  const containerElement = ` <div class="about-section">
    <div class="inner-container">
        <div class="display-content">
            <h1>Sobre nós</h1>
            <a href="/feed"><img src="img/logo4.png" alt="logo"></a>
        </div>
        <p class="text">
        Esta rede social homenageia o filme de terror  <a href="https://www.imdb.com/title/tt0087909/" target="_blank">Phenomena</a>, dirigido por Dario Argento. Criamos essa rede com intuito de unir a comunidade fã do genero terror, que há muito tempo não encontra um espaço para compartilhar sobre a temática. Se você se encaixa nesse perfil, está no lugar certo. Foi desenvolvido por três mulheres durante o bootcamp da Laboratória. Saiba mais sobre o nosso projeto clicando 
        <a href="https://github.com/tenorionique/SAP006-social-network" target="_blank">aqui</a>
        </p>
        <div class="skills">
            <a href="https://github.com/Giuthamie" target="_blank">Giuliana Thamiê</a>
            <a href="https://github.com/mayarabezerra" target="_blank">Mayara Brayner</a>
            <a href="https://github.com/tenorionique" target="_blank">Monique Doretto</a>
        </div>
    </div>
</div>`;

  rootElement.innerHTML = containerElement;

  return rootElement;
};
