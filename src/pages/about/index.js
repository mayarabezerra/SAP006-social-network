export const aboutUs = () => {
  const rootElement = document.createElement('div');
  const containerElement = ` <div class="content">
    <div class="glitch">
        <div class="glitch-img"></div>
        <div class="glitch-img"></div>
        <div class="glitch-img"></div>
        <div class="glitch-img"></div>
        <div class="glitch-img"></div>
        
        <div class="links-about">
            <a href= "/login" class="neon-button">Login</a>
            <a href="/register" class="neon-button">Cadastrar</a>
        </div>
    </div>

    <h2 class="content-title">PHENOMENA</h2>
    <p class="content-text">Phenomena é a rede social que reúne todos os fãs do gênero terror. 
        Faça o seu cadastro and let's get spooky.</p>
        <div class="click-link">
            <a href="https://thoughtcatalog.com/wp-content/uploads/2016/08/giphy2.gif" target="_blank" class="dont-click"> Não Clique</a>
        <div>   
   </div> `;

  rootElement.innerHTML = containerElement;

  return rootElement;
};
