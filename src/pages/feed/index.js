

import { publicationPost, postsCollection, logOut } from '../../services/index.js'
import { addPostFeed } from '../../components/feed.js'

export const feedConstruct = () => {
<<<<<<< HEAD
   //const user = currentUser
   //console.log(user)
  
=======
 /* const user = currentUser
  console.log(user)

  if (user !== null ) {
    keepLoggedUser()
    console.log(user)
  }else {
    logOut()
  }*/



>>>>>>> c96d6332a29e6197b53100680888e4bcf8d8ccc0
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
      <li id="signOut"><a href="#">Logout</a></li>
    </ul>
  </nav>
  </header>
  <main class="layout-feed">
      <div class="container-text-feed">
          <form>
             <div class="inline-img"> <img src="./img/avatar.png" class="img-avatar" alt=""> 
<<<<<<< HEAD
            <label class="labels">Nome</label></div><br>
=======

            <label class="labels">${userConected}</label></div><br>

>>>>>>> c96d6332a29e6197b53100680888e4bcf8d8ccc0
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


  /*Feed */


  submitText.addEventListener('click', () => {
    const publication = newRootElement.querySelector('#textarea').value;
    publicationPost(publication).then(() => {
      console.log('deu bom')
      newRootElement.querySelector('#textarea').value = ""
      loadPostOnFeed()
    });
  });



  const loadPostOnFeed = () => {


    newRootElement.querySelector('#container-post').innerHTML = 'Carregando...';

    postsCollection().then((snap) => {
      newRootElement.querySelector('#container-post').innerHTML = '';
      snap.docs.map(item => {
        newRootElement.querySelector('#container-post').appendChild(addPostFeed(item.id, item.data()))

      })


    });
  };
  loadPostOnFeed();

  /*Sign-Out*/

<<<<<<< HEAD
  const logOutButton = () => {
    newRootElement.querySelector('#signOut').addEventListener('click', (event) => {
      event.preventDefault();
      logOut();
    });
  };
  logOutButton();
=======
const logOutButton = () => {
  newRootElement.querySelector('#signOut').addEventListener('click', (event) => {
    event.preventDefault();
    logOut();
  });

};
logOutButton();
>>>>>>> c96d6332a29e6197b53100680888e4bcf8d8ccc0


  return newRootElement;

}
