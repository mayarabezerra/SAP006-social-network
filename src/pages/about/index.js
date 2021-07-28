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
            <a href="./pages/login/index.js" class="neon-button">Login</a>
            <a href="./pages/register/index.js" class="neon-button">Cadastrar</a>
        </div>
    </div>
    <h2 class="content-title">PHENOMENA</h2>
    <p class="content-text">A rede social para todos os amantes do gênero terror. 
        Aqui você encontra o melhor conteúdo, e as pessoas mais assustadoras.</p>
    </div>`;

    rootElement.innerHTML = containerElement
}