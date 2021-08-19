import { modifyLikes, deletePublication, editPost, observer} from '../services/index.js';

export const addPostFeed = (id, post) => {
  const newRootElement = document.createElement('div');
  newRootElement.classList.add('container-text-feed-two');
  newRootElement.setAttribute('id', id);
  const postSection = ` <section class="text-test" data-section>
        <div class="inline-img-two"> 
            <img src="./img/avatar.png" class="img-avatar" alt="">
            <label data-userlog="${post.userId}"class="labels">${post.userName}</label> 
        </div><br>
        <div class="textarea-style">
            <textarea class="publi-feed">${post.text}</textarea>
        </div><br>
        <div data-postid ="${id}"class="container-stepfather">
            <div class="content-buttom">
                <button type="submit" class="like-buttom" id="like-button"> <img src="img/coracao (2).png" class="img-like" alt="" data-like="${id}"> </button>
                <label>curtidas ${post.likes.length}<label>
            </div>
            <div class="content-buttom-two">
                    <button class="btn-edit">editar</button>
                    <button class="btn-salvar">Salvar</button>
                    <button type="submit" id="deleteBtn" class="button-delete" data-item="delete">excluir</button>
                    <div class="popup-wrapper">
                        <div class="popup">
                            <div class="popup-close">x
                            </div>
                                <div class="popup-content">
                                    <h2 class="popup-text">Tem certeza que deseja excluir o post?</h2>
                                    <button  class="popup-yes" data-yes="confirm" id="yes-delete">Confirmar</button>
                                    <button class="popup-no" id="no-delete">Cancelar</button>
                                </div>
                        </div>
                     </div>
            </div>
        </div>    
    </section>
            `;
  newRootElement.innerHTML = postSection;

  const btnEdit = newRootElement.querySelector('.btn-edit');
  const btnSalvar = newRootElement.querySelector('.btn-salvar');
  const textArea = newRootElement.querySelector('.publi-feed');

  btnEdit.addEventListener('click', () => {
    textArea.removeAttribute('disabled');
    textArea.focus();
  });

  btnSalvar.addEventListener('click', () => {
    textArea.setAttribute('disabled', '');
    editPost(id, textArea.value);
  });

 /*function visibilityOfUser = () => {
    if (user !== firebase.auth().currentUser.email) ????? `  {
    btnEdit.hidden = false;
    btnSalvar.hidden = false;
 } else {
    btnEdit.hidden = true;
    btnSalvar.hidden = true;
 }
} visibilityOfUSer();
 */
 

  const section = newRootElement.querySelector('[data-section]');
  const popup = newRootElement.querySelector('.popup-wrapper');
  const btnYes = newRootElement.querySelector('#yes-delete');
  const selectedPosts = document.querySelectorAll('.container-text-feed-two');

  /* Listeners */

  section.addEventListener('click', (e) => {
    const { target } = e;
    const dataLike = target.dataset.like;
    if (dataLike) {
      console.log('cliquei no botão');
      modifyLikes(dataLike, post.text)
        .then((retornaSucess) => {
          console.log(retornaSucess);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });

    for (let post of selectedPosts) {
    post.addEventListener('click', (e) => {
      const postId = post.getAttribute('id');
      console.log(postId);
      const target = e.target;
      const userLogged = target.dataset.userlog;
      const identification = target.dataset.postid;
      const targetDataSet = target.dataset.item;

      if ( observer() === userLogged) {
        newRootElement.querySelector('#deleteBtn').style.display = 'none'
      }

      if (targetDataSet == "delete") {
        popup.style.display = 'block'
        console.log('clicou');
      }

      popup.addEventListener('click', event => {
        const classNameOfClickedElement = event.target.classList[0]
        const classNames = ['popup-close','popup-wrapper', 'popup-no']
        const shouldClosePopup = classNames.some(className => 
          className === classNameOfClickedElement);
        if (shouldClosePopup) {
          popup.style.display = 'none';
        };
      });

      btnYes.addEventListener('click', event => {
        const {target} = event;
        const dataConfirm = target.dataset.yes;
        console.log(dataConfirm);
        if(dataConfirm == 'confirm'){
          deletePublication(postId)
          post.remove()
          popup.style.display = 'none';
          console.log('post apagado');
        };       
      })
    });
  }

  return newRootElement;
};
