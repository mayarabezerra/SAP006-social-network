export const whoWeAre = () => {
  const rootElement = document.createElement('div');
  const containerElement = ` <div class="about-section">
    <div class="inner-container">
        <div class="display-content">
            <h1>Sobre nós</h1>
            <a href="/feed"><img src="img/logo4.png" alt="movie-poster"></a>
        </div>
        <p class="text">
           A rede social 
            <a href="https://github.com/tenorionique/SAP006-social-network" target="_blank">Repo</a>
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
