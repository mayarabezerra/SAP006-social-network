import { deletePublication } from '../../services/index.js'

export const addPostFeed = (post) => {
    const newRootElement = document.createElement('div');
    newRootElement.classList.add("container-text-feed-two");
    newRootElement.setAttribute('id', post.userId);
    const postSection = ` <div class="inline-img-two"> <img src="./img/avatar.png" class="img-avatar" alt=""><label class="labels">${post.userName}</label> </div><br>
<div class="textarea-style">
    <div class="publi-feed">${post.text}</div>
</div><br>
<div class="container-stepfather">
<div class="content-buttom">
<button type="submit" class="like-buttom"> <img src="img/coracao (2).png" class="img-like" alt=""> </button>
<label>curtidas ${post.likes}<label>
</div>
<div class="content-buttom-two">
<button>editar</button>
<button type="submit" id="delete-button" data-deletePostBtn="${post.userId}">excluir</button>
</div>
`;
newRootElement.innerHTML = postSection


const deletePost = newRootElement.querySelector('#delete-button');

deletePost.addEventListener('click', (e) => {
const deleteBtn = e.target.dataset.deletePostBtn;
if (deleteBtn) {
  const Confirmation = confirm("Tem certeza que deseja deletar esta publicação?");
  if (Confirmation)
    deletePost(post.userId);
  else
    return false;
}});
deletePublication();

return newRootElement;
};