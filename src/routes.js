
import {aboutUs} from './pages/about/index.js'
import {loginUsuario} from './pages/login/index.js'
import {registerUsuario} from './pages/register/index.js'
import {feedConstruct} from './pages/feed/index.js'


export const router = () => {
    const mainPage = document.querySelector('#root')

    const routes = {
        "/": aboutUs,
        "/login": loginUsuario,
        "/register": registerUsuario,
       "/feed": feedConstruct,
       // "/forgot":forgotpassword
    }
mainPage.innerHTML = "";
if(routes[window.location.pathname] != undefined) {
    mainPage.appendChild(routes[window.location.pathname]())
} else {
    mainPage.appendChild(routes["/page-not-found"]())
}
}

export const navigateTo = (route) => {
    history.pushState({}, '', route)
    const popStateEvent = new PopStateEvent('popstate');
    dispatchEvent(popStateEvent);
}

window.addEventListener('popstate', router);
window.addEventListener('load', router);
