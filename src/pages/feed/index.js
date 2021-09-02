import {
  publicationPost, postsCollection, logOut, editPost, modifyLikes, deletePublication,
} from '../../services/index.js';
import { addPostFeed } from '../../components/feed.js';
import { navigateTo } from '../../routes/navigation.js';

export const feedConstruct = () => {
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
      <li><a href="/who">Sobre</a></li>
      <li><a href="https://www.indiewire.com/feature/best-horror-movies-all-time-scary-films-1202012183/" target="_blank">Terror</a></li>
      <li id="signOut"><a href="#">Logout</a></li>
    </ul>
  </nav>
  </header>
  <main class="layout-feed">
      <div class="container-text-feed">
          <form id="formid">
             <div class="inline-img">
                <label class="labels">Let's get spooky...</label>
            </div><br>
              <div class="textarea-style">
                  <textarea name="textarea" id="textareaid" class="textarea-feed" cols="37" rows="4" minlength="3" placeholder="Escreva seu texto aqui" required></textarea>
              </div><br>
             <button type="submit" id="submit-text"class="feed-button">Enviar</button>
          </form>
      </div>
  </main>
  <section class="layout-feed-two" id="container-post">
  </section>
  </section>`;
  newRootElement.innerHTML = contentnewElement;
  const submitText = newRootElement.querySelector('#formid');
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
        const value = link;
        if (value.style.animation) {
          value.style.animation = '';
        } else {
          value.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
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
  const loadPostOnFeed = () => {
    newRootElement.querySelector('#container-post').innerHTML = 'Carregando...';
    postsCollection().then((snap) => {
      newRootElement.querySelector('#container-post').innerHTML = '';
      snap.docs.forEach((item) => {
        newRootElement.querySelector('#container-post').appendChild(addPostFeed(item.id, item.data()));
      });
    });
  };
  loadPostOnFeed();
  containerPosts.addEventListener('click', (event) => {
    if (event.target.classList.contains('button-delete')) {
      const feedAddPostSelect = event.target.parentNode.parentNode.parentNode.querySelector('.popup-wrapper');
      feedAddPostSelect.style.display = 'block';
    }
    if (event.target.classList.contains('popup-no')) {
      const classNameOfClickedElement = event.target.parentNode.parentNode;
      if (classNameOfClickedElement) {
        const feedAddPostSelect = event.target.parentNode.parentNode.parentNode;
        feedAddPostSelect.style.display = 'none';
      }
    }
    if (event.target.classList.contains('popup-yes')) {
      const feedAddPostSelect = event.target.parentNode.parentNode.parentNode;
      feedAddPostSelect.style.display = 'none';
      const { target } = event;
      const dataConfirm = target.dataset.yes;
      const dataId = target.dataset.id;
      if (dataConfirm === 'confirm') {
        const theParent = document.querySelector(`.container-text-feed-two#${dataId}`);
        deletePublication(dataId);
        theParent.remove();
      }
    }
    if (event.target.classList.contains('btn-edit')) {
      const txtArea = event.target.parentNode.parentNode.parentNode.parentNode.querySelector('.publi-feed');
      txtArea.removeAttribute('disabled');
      txtArea.focus();
    }
    if (event.target.classList.contains('btn-salvar')) {
      const txtArea = event.target.parentNode.parentNode.parentNode.parentNode.querySelector('.publi-feed');
      const getId = event.target.parentNode.parentNode.dataset.postid;
      editPost(getId, txtArea.value);
      txtArea.setAttribute('disabled', '');
    }
    if (event.target.classList.contains('img-like')) {
      const dataLikes = event.target.dataset.like;
      if (dataLikes) {
        modifyLikes(dataLikes, firebase.auth().currentUser.uid)
          .then(() => {
            loadPostOnFeed();
          })
          .catch((error) => {
            const errorCode = error.code;
            return errorCode;
          });
      }
    }
  });
  submitText.addEventListener('submit', (event) => {
    event.preventDefault();
    const publication = newRootElement.querySelector('#textareaid').value;
    publicationPost(publication).then(() => {
      newRootElement.querySelector('#textareaid').value = '';
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
