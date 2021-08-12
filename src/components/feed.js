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
<button>excluir</button>
</div>
`;
newRootElement.innerHTML = postSection
return newRootElement;
};