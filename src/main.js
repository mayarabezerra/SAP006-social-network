import { router } from './routes/routes.js';

window.addEventListener('popstate', router);
window.addEventListener('load', router);
