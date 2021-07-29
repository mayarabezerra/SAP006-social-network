//import {navigateTo} from '../../routes.js';

export const feedConstruct =  () => {
    const newRootElement = document.createElement('div');
    const contentnewElement = `
    <section class="section-exemple">
        PAGINA EM CONSTRUÇÃO DEU CERTO A ROTA PORRA
    </section>`;

newRootElement.innerHTML = contentnewElement; 

/*const btn = newRootElement.querySelector('.submit-btn');
console.log(btn);

btn.addEventListener('click', () => {
    navigateTo('/feed')
})*/

return newRootElement

}