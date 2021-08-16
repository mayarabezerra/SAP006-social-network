import { modifyLikes, editPost, deletePublication } from "../services/index.js";

export const addPostFeed = (id, post) => {
    const newRootElement = document.createElement('div');
    newRootElement.classList.add("container-text-feed-two");
    newRootElement.setAttribute('id', id);
    const postSection = ` <section data-section>
        <div class="inline-img-two"> 
            <img src="./img/avatar.png" class="img-avatar" alt="">
            <label class="labels">${post.userName}</label> 
        </div><br>
        <div class="textarea-style">
            <textarea class="publi-feed">${post.text}</textarea>
        </div><br>
        <div class="container-stepfather">
            <div class="content-buttom">
                <button type="submit" class="like-buttom" id="like-button"> <img src="img/coracao (2).png" class="img-like" alt="" data-like="${id}"> </button>
                <label>curtidas ${post.likes.length}<label>
            </div>
            <div class="content-buttom-two">
                <button class="btn-edit">editar</button>
                <button class="btn-salvar">Salvar</button>
                <button>excluir</button>
            </div>
        <div class="content-buttom-two">
            <button>editar</button>
            <button type="submit" id="deleteBtn" class="button-delete" data-item="delete">excluir</button>
            
        </div>
    </section>
            `;
    newRootElement.innerHTML = postSection

    const btnEdit = newRootElement.querySelector('.btn-edit')
    const btnSalvar = newRootElement.querySelector('.btn-salvar')
    const textArea = newRootElement.querySelector('.publi-feed')


    btnEdit.addEventListener('click', () => {
        textArea.removeAttribute('disabled');
        textArea.focus()
    });

    btnSalvar.addEventListener('click', () => {
        textArea.setAttribute('disabled', " ");
        editPost(id, textArea.value)
    });

    
    const section = newRootElement.querySelector("[data-section]");
    section.addEventListener("click", (e) => {
        const { target } = e;
        const dataLike = target.dataset.like;

        if (dataLike) {
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



    const selectedPosts = document.querySelectorAll('.container-text-feed-two')
    for (let post of selectedPosts) {
        post.addEventListener('click', (e) =>{
        const postId = post.getAttribute('id')
        console.log(postId)
        const target = e.target
        const targetDataSet = target.dataset.item
        if (targetDataSet == "delete") {
            deletePublication(postId)
            post.remove()
            }
        
         //ver uma forma pelo for pegar todos os posts (verificar se a primeira const está pegando só um, ou a container toda)   
        })
    }

    /* if (userId == id){
     aqui dentro, fazer para aparecer o botão só para o dono do post
     se o id dela for igual o do post, ela pode apagar, se não, não vai aparecer
     fazer display none, na opção de deletar e apagar
     display none no css
     v
    }*/
    



return newRootElement;
};
