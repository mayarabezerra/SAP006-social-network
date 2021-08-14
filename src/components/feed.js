import { modifyLikes } from "../services/index.js";

export const addPostFeed = (id, post) => {
    const newRootElement = document.createElement('div');
    newRootElement.classList.add("container-text-feed-two");
    newRootElement.setAttribute('id', post.userId);
    const postSection = ` <section data-section>
        <div class="inline-img-two"> 
            <img src="./img/avatar.png" class="img-avatar" alt="">
            <label class="labels">${post.userName}</label> 
        </div><br>
        <div class="textarea-style">
            <div class="publi-feed">${post.text}</div>
        </div><br>
        <div class="container-stepfather">
            <div class="content-buttom">
            <button type="submit" class="like-buttom" id="like-button"> <img src="img/coracao (2).png" class="img-like" alt="" data-like="${id}"> </button>
            <label>curtidas ${post.likes.length}<label>
            </div>
        <div class="content-buttom-two">
            <button>editar</button>
            <button> excluir</button>
        </div>
        </section>`;

    newRootElement.innerHTML = postSection
    const btnRemove = newRootElement.querySelector("#remove");
    const section = newRootElement.querySelector("[data-section]");
    section.addEventListener("click", (e) => {
        const {target} = e;
        const dataLike = target.dataset.like;
        const dataRemove = target.dataset.remove
        if(dataLike) {
            console.log('cliquei no botão')
            modifyLikes (dataLike, post.userId) 
            .then((retornaSucess) => {
                console.log(retornaSucess);
            })
            .catch((error) => {
                console.log(error)
            })
        } 
    });

    
   
    /*Like section */
  
    /*const likeButtons = newRootElement.querySelector('#like-button');

    likeButtons.addEventListener("click", () => {
        modifyLikes()
    });*/
  

return newRootElement;
};