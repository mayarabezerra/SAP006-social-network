export const addPostFeed = (post) => {
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
    return postSection;
};