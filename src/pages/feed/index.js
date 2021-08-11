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
             <div class="inline-img"> <img src="./img/avatar.png" class="img-avatar" alt=""> 
            <label class="labels">Nome do phenomena</label></div><br>
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

submitText.addEventListener('click', () => {

const newPost = (id, name, email) => {
  const text = newRootElement.querySelector('#textarea').value;
  const post = {
    text,
    userId: id,
    userName: name,
    userEmail: email,
    likes: 0,
    comments: [],
};
const collectionOfPosts = firebase.firestore().collection('posts');
collectionOfPosts.add(post).then(res => {
  newRootElement.querySelector('#textarea').value = ""
  loadPostOnFeed()
})
};

const getUserLoggedFirebase = (userLoggedIn) => {
const userCollection = firebase.firestore().collection('users');
userCollection.get().then((snap) => {
  snap.forEach((user) => {
    if (userLoggedIn === user.data().id) {
      newPost(user.data().id, user.data().name, user.data().email)
    }
  });
});
};
const userLoggedIn = firebase.auth().currentUser;
if (userLoggedIn !== 'null') {
getUserLoggedFirebase(userLoggedIn.uid)
}
});

const addPostFeed = (post) => {
const postSection = `<div class="container-text-feed-two" id="${post.userId}"> <div class="inline-img-two"> <img src="./img/avatar.png" class="img-avatar" alt=""><label class="labels">${post.userName}</label> </div><br>
<div class="textarea-style">
    <div class="publi-feed">${post.text}</div>
</div><br>
<div class="container-stepfather">
<div class="content-buttom">
<buttom type="submit" class="like-buttom"> <img src="img/coracao.png" class="img-like" alt=""></buttom>
<label>curtir<label>
</div>
<div class="content-buttom-two">
<buttom>editar</buttom>
<buttom>excluir</buttom>
</div>
</div>`;

newRootElement.querySelector('#container-post').innerHTML += postSection
};

const loadPostOnFeed = () => {
const postsCollection = firebase.firestore().collection('posts');

newRootElement.querySelector('#container-post').innerHTML = 'Carregando...';

postsCollection.get().then((snap) => {
  newRootElement.querySelector('#container-post').innerHTML = '';
  snap.docs.map(item  => {
    addPostFeed(item.data())
  })
  
  
});
};
loadPostOnFeed();

return newRootElement

}