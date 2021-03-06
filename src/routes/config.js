import { aboutUs } from '../pages/about/index.js';
import { loginUsuario } from '../pages/login/index.js';
import { registerUsuario } from '../pages/register/index.js';
import { feedConstruct } from '../pages/feed/index.js';
import { forgot } from '../pages/forgotpassword/index.js';
import { whoWeAre } from '../pages/us/index.js';
import { notFound } from '../pages/notfound/index.js';

export const routes = {
  '/': aboutUs,
  '/login': loginUsuario,
  '/register': registerUsuario,
  '/feed': feedConstruct,
  '/forgot': forgot,
  '/who': whoWeAre,
  '/page-not-found': notFound,
};
