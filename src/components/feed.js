
import { modifyLikes, deletePublication, observer} from "../services/index.js";

export const addPostFeed = (id, post) => {
    const newRootElement = document.createElement('div');
    newRootElement.classList.add("container-text-feed-two");
    newRootElement.setAttribute('id', id);
    const postSection = ` <section class="text-test" data-section>
        <div class="inline-img-two"> 
            <img src="./img/avatar.png" class="img-avatar" alt="">
            <label data-userlog="${post.userId}"class="labels">${post.userName}</label> 
        </div><br>
        <div class="textarea-style">
            <div class="publi-feed">${post.text}</div>
        </div><br>
        <div data-postid ="${id}"class="container-stepfather">
            <div class="content-buttom">
            <button type="submit" class="like-buttom" id="like-button"> <img src="img/coracao (2).png" class="img-like" alt="" data-like="${id}"> </button>
            <label>curtidas ${post.likes.length}<label>
            </div>
        <div class="content-buttom-two">
            <button>editar</button>
            <button type="submit" id="deleteBtn" class="button-delete" data-item="delete">excluir</button>
            <div class="popup-wrapper">
            <div class="popup">
                <div class="popup-close">x</div>
                <div class="popup-content">
                    <h2 class="popup-text">Tem certeza que deseja excluir o post?</h2>
                    <button  class="popup-yes" data-yes="confirm" id="yes-delete">Confirmar</button>
                    <button class="popup-no" id="no-delete">Cancelar</button>
                </div>
            </div>
        </div>
            
        </div>
        </section>`;

    newRootElement.innerHTML = postSection
    
    
    const section = newRootElement.querySelector("[data-section]");
    const popup = newRootElement.querySelector('.popup-wrapper');
    const btnYes = newRootElement.querySelector("#yes-delete");
    const selectedPosts = document.querySelectorAll('.container-text-feed-two');

    /*Listeners */

    section.addEventListener("click", (e) => {
        const {target} = e;
        const dataLike = target.dataset.like;
        if(dataLike) {
            console.log('cliquei no botão')
            modifyLikes (dataLike, post.text) 
            .then((retornaSucess) => {
                console.log(retornaSucess);
            })
            .catch((error) => {
                console.log(error)
            })
        } 
        
    });

    for (let post of selectedPosts) {
        post.addEventListener('click', (e) =>{
            const postId = post.getAttribute('id')
            console.log(postId)
            const target = e.target
            const userLogged = target.dataset.userlog
            const identification = target.dataset.postid
            const targetDataSet = target.dataset.item

            if( observer() === userLogged) {
                newRootElement.querySelector("#deleteBtn").style.display = "none"
            }

            if (targetDataSet == "delete") {
                popup.style.display = 'block'
                console.log('clicou');
            }

            popup.addEventListener('click', event => {
                const classNameOfClickedElement = event.target.classList[0]
                const classNames = ['popup-close','popup-wrapper', 'popup-no']
                const shouldClosePopup = classNames.some(className => 
                    className === classNameOfClickedElement)
            
                if(shouldClosePopup){
                    popup.style.display = 'none'
                };
            });

            btnYes.addEventListener('click', event => {
               const {target} = event;
               const dataConfirm = target.dataset.yes;
               console.log(dataConfirm)
               if(dataConfirm == 'confirm'){
                deletePublication(postId)
                post.remove()
                popup.style.display = 'none';
                console.log('post apagado');
               }
               
            })
        });
    }
        
return newRootElement;
};


/*if (targetDataSet == "delete") {
            popup.style.display = 'block'
            btnYes.addEventListener("click", () => {
                deletePublication(postId)
                
            })
            } else {
                popup.addEventListener('click', event => {
                    const classNameOfClickedElement = event.target.classList[0]
                    const classNames = ['popup-close','popup-wrapper', 'popup-no']
                    const shouldClosePopup = classNames.some(className => 
                        className === classNameOfClickedElement)
                
                    if(shouldClosePopup){
                        popup.style.display = 'none'
                    };
                });
            }
          
        })
    }*/

    /* if (userId == id){
     aqui dentro, fazer para aparecer o botão só para o dono do post
     se o id dela for igual o do post, ela pode apagar, se não, não vai aparecer
     fazer display none, na opção de deletar e apagar
     display none no css
     v
    }*/
    