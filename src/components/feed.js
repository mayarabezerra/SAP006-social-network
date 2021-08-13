import { editPost } from '../../services/index.js'

export const addPostFeed = (post) => {
    const newRootElement = document.createElement('div');
    newRootElement.classList.add("container-text-feed-two");
    newRootElement.setAttribute('id', post.userId);
    const postSection = ` <div class="inline-img-two"> <img src="./img/avatar.png" class="img-avatar" alt=""><label class="labels">${post.userName}</label> </div><br>
<div class="textarea-style">
    <textarea disabled class="publi-feed">${post.text}</textarea>
</div><br>
<div class="container-stepfather">
<div class="content-buttom">
<button type="submit" class="like-buttom"> <img src="img/coracao (2).png" class="img-like" alt=""> </button>
<label>curtidas ${post.likes}<label>
</div>
<div class="content-buttom-two">
<button class="btn-edit">editar</button>
<button class="btn-salvar">Salvar</button>
<button>excluir</button>
</div>
`;
    newRootElement.innerHTML = postSection

    const btnEdit = newRootElement.querySelector('.btn-edit')
    const btnSalvar = newRootElement.querySelector('.btn-salvar')
    const textArea = newRootElement.querySelector('.publi-feed')
    const getValuesFromEditedPost = (listener, valorNovo, id) => listener.addEventListener('click', () => {
        editPost(valorNovo.value, id.value);
    });


    btnEdit.addEventListener('click', () => {
        textArea.removeAttribute('disabled');
        textArea.focus()
    });

    btnSalvar.addEventListener('click', () => {
        textArea.setAttribute('disabled', " ");
        editPost(textArea.value)
    });



    return newRootElement;
};

