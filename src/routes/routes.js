import{routes} from './config.js';
import {navigateTo} from './navigation.js';
import{observer} from '../services/index.js';

const navigateAnonymousUser = (user) => {
  if (!user && window.location.pathname === '/feed') {
    navigateTo('/');
  }
}
export const router = () => {
  const mainPage = document.querySelector('#root');

  mainPage.innerHTML = '';
  if (routes[window.location.pathname] !== undefined) {
    mainPage.appendChild(routes[window.location.pathname]());
  } else {
    mainPage.appendChild(routes['/page-not-found']());
  }

  // pra proteger a pagina
  observer(navigateAnonymousUser);
};


