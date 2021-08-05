//import {navigateTo} from '../../routes.js';

export const feedConstruct =  () => {
    const newRootElement = document.createElement('div');
    const contentnewElement = `
    <section class="section-exemple-feed">
    <header>
    <nav>
      <a class="logo" href="/feed"><img src="./img/logo4.png" class="img-logo" alt=""></a>
      <div class="mobile-menu">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
      <ul class="nav-list">
        <li><a href="#">Perfil</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Terror</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </nav>
  </header>
  <main class="layout-feed">
        <div class="container-text-feed">
            <form>
               <div class="inline-img"> <img src="./img/avatar.png" class="img-avatar" alt=""> <label class="labels">Nome do phenomena</label></div><br>
                <div class="textarea-style">
                    <textarea name="textarea" id="textarea" class="textarea-feed" cols="37" rows="4" minlength="3" placeholder="Let's get spooky..."></textarea>
                </div><br>
               <buttom type="submit" class="feed-button">Enviar</buttom>
            </form>
        </div>
    </main>
    <section class="layout-feed-two">
    <div class="container-text-feed-two">
        
           <div class="inline-img-two"> <img src="./img/avatar.png" class="img-avatar" alt=""> <label class="labels">Nome do phenomena</label></div><br>
            <div class="textarea-style">
                <div class="publi-feed"></div>
            </div><br>
            <div class="container-stepfather">
            <div class="content-buttom">
           <buttom type="submit" class="like-buttom"><img src="./img/coracao.png" class="img-like" alt=""></buttom>
           <label>curtir<label>
           </div>
           <div class="content-buttom-two">
           <buttom>editar</buttom>
           <buttom>excluir</buttom>
          </div>
          </div>
    </div>
</section>
  </section>`;

 
newRootElement.innerHTML = contentnewElement; 

/*const btn = newRootElement.querySelector('.submit-btn');
console.log(btn);

btn.addEventListener('click', () => {
    navigateTo('/feed')
})*/
/*Function - class */

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = newRootElement.querySelector(mobileMenu);
    this.navList = newRootElement.querySelector(navList);
    this.navLinks = newRootElement.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();
return newRootElement

}