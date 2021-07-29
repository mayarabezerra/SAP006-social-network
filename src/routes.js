
import {aboutUs} from './pages/about/index.js'
import {loginUsuario} from './pages/login/index.js'
import {registerUsuario} from './pages/register/index.js'
// import forgotpassword from './pages/forgotpassword/index.js'
// import feed from './pages/feed/index.js'

export const router = () => {
    const mainPage = document.querySelector('#root')

    const routes = {
        "/": aboutUs,
        "/login": loginUsuario,
        "/register": registerUsuario,
       // "/feed": feed,
       // "/forgot":forgotpassword
    }
mainPage.innerHTML = "";
if(routes[window.location.pathname] != undefined) {
    mainPage.appendChild(routes[window.location.pathname]())
} else {
    mainPage.appendChild(routes["/page-not-found"]())
}
}
router()