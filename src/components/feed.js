const actionFromPost = () => `
    <button class="btn-edit">editar</button>
    <button class="btn-salvar">Salvar</button>
    <button type="submit" id="deleteBtn" class="button-delete" data-item="delete">excluir</button>
`;

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
        <div data-postid ="${id}"  id="${id} "class="container-stepfather">
            <div class="content-buttom" data-thisuser ="${post.userId}">
                <button type="submit" class="like-buttom" id="like-button"> <img src="img/coracao (2).png" class="img-like" alt="" data-like="${id}"> </button>
                <label>curtidas ${post.likes.length}<label>
            </div>
            <div class="content-buttom-two">
                    ${post.userEmail === firebase.auth().currentUser.email ? actionFromPost() : ''}

                    <div class="popup-wrapper">
                        <div class="popup">
                            
                                <div class="popup-content">
                                    <h2 class="popup-text">Tem certeza que deseja excluir o post?</h2>
                                    <button  class="popup-yes" data-yes="confirm" data-id="${id}" id="yes-delete">Confirmar</button>
                                    <button class="popup-no" id="no-delete" data-cancel="cancel">Cancelar</button>
                                </div>
                        </div>
                     </div>
            </div>
        </div>    
    </section> `;
  newRootElement.innerHTML = postSection;
  return newRootElement;
};
