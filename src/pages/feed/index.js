import { publicationPost, postsCollection, logOut, editPost } from '../../services/index.js';

import { addPostFeed } from '../../components/feed.js';
import { navigateTo } from '../../routes.js';

export const feedConstruct = () => {
  // const user = currentUser
  // console.log(user)

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
      <li><a href="#">Sobre</a></li>
      <li><a href="#">Terror</a></li>
      <li id="signOut"><a href="#">Logout</a></li>
    </ul>
  </nav>
  </header>
  <main class="layout-feed">
      <div class="container-text-feed">
          <form>
             <div class="inline-img"> <img src="./img/avatar.png" class="img-avatar" alt=""> 
            <label class="labels">Nome</label></div><br>
              <div class="textarea-style">
                  <textarea name="textarea" id="textarea" class="textarea-feed" cols="37" rows="4" minlength="3" placeholder="Let's get spooky..."></textarea>
              </div><br>
             <buttom type="submit" id="submit-text"class="feed-button">Enviar</buttom>
          </form>
      </div>
  </main>
  <section class="layout-feed-two" id="container-post">
  </section>
  </section>`;

  newRootElement.innerHTML = contentnewElement;

  const submitText = newRootElement.querySelector('#submit-text');

  /* Function - class */

  class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = newRootElement.querySelector(mobileMenu);
      this.navList = newRootElement.querySelector(navList);
      this.navLinks = newRootElement.querySelectorAll(navLinks);
      this.activeClass = 'active';

      this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = '')
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
          }s`);
      });
    }

    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }

    addClickEvent() {
      this.mobileMenu.addEventListener('click', this.handleClick);
    }

    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }

  const mobileNavbar = new MobileNavbar(
    '.mobile-menu',
    '.nav-list',
    '.nav-list li',
  );
  mobileNavbar.init();

  /* Feed */
  const containerPosts = newRootElement.querySelector('.layout-feed-two');
  console.log(containerPosts)

  const txtArea = newRootElement.querySelector('.publi-feed');
  console.log(txtArea)

  containerPosts.addEventListener('click', (event) => {
    //console.log(event.target)
    
    if(event.target.classList.contains('button-delete')) {
      const gigante = (event.target.parentNode.parentNode.parentNode.querySelector('.popup-wrapper'))
      gigante.style.display = 'block'
      const classNameOfClickedElement = event.target.classList[0]
      console.log(classNameOfClickedElement)
      const classNames = ['popup-close','popup-wrapper', 'popup-no']
      const shouldClosePopup = classNames.some(className => 
        className === classNameOfClickedElement);
      if (shouldClosePopup) {
        gigante.style.display = 'none';
      };
    }

    if(event.target.classList.contains('btn-edit')) {
      const txtArea = newRootElement.querySelector('.publi-feed');
      txtArea.removeAttribute('disabled');
      txtArea.focus();
    }
    if(event.target.classList.contains('btn-salvar')) {
      const txtArea = newRootElement.querySelector('.publi-feed');
      postsCollection().then((snap) => {snap.docs.map((item) =>
        editPost(item.id, txtArea.value));
        txtArea.setAttribute('disabled', '')
      });
    }
  })

  const loadPostOnFeed = () => {
    newRootElement.querySelector('#container-post').innerHTML = 'Carregando...';

    postsCollection().then((snap) => {
      newRootElement.querySelector('#container-post').innerHTML = '';
      snap.docs.map((item) => {
        newRootElement.querySelector('#container-post').appendChild(addPostFeed(item.id, item.data()));
      });
    });
  };
  loadPostOnFeed();

  submitText.addEventListener('click', () => {
    const publication = newRootElement.querySelector('#textarea').value;
    publicationPost(publication).then(() => {
      console.log('deu bom');
      newRootElement.querySelector('#textarea').value = '';
      loadPostOnFeed();
    });
  });

  /* Sign-Out */

  const logOutButton = () => {
    newRootElement.querySelector('#signOut').addEventListener('click', (event) => {
      event.preventDefault();
      logOut()
        .then(() => {
          navigateTo('/login');
        });
    });
  };
  logOutButton();

  return newRootElement;
};