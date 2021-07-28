
import about from './pages/about/index.js'
import login from './pages/login/index.js'
import register from './pages/register/index.js'
import forgotpassword from './pages/forgotpassword/index.js'
import feed from './pages/feed/index.js'

export const router = () => {
    const mainPage = document.querySelector('#root')

    const routes = {
        "/": about,
        "/login": login,
        "/register": register,
        "/feed": feed,
        "/forgot":forgotpassword
    }
mainPage.innerHTML = "";
if(routes[window.location.path] != undefined) {
    mainPage.appendChild(routes[window.location.pathname]())
} else {
    mainPage.appendChild(routes["/page-not-found"]())
}

}