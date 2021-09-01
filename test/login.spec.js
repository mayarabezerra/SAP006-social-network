/**
 * @jest-environment jsdom
 */
import { loginUsuario } from '../src/pages/login/index.js';
import { loginOfUser } from '../src/services/index.js';

jest.mock('../src/services/index.js', () => ({
  loginOfUser: jest.fn(() => Promise.resolve({
    user: 'teste',
  })),
}));
describe('loginPage', () => {
  it('should return login page', () => {
    const page = loginUsuario();
    page.querySelector('#email').value = 'exemplo@exemplo.com';
    page.querySelector('.password').value = '12345678';
    /*  page.querySelector('.password').dispatchEvent(new KeyboardEvent('keyup', { key: '1' }));
    page.querySelector('.password').dispatchEvent(new KeyboardEvent('keyup', { key: '2' }));
    page.querySelector('.password').dispatchEvent(new KeyboardEvent('keyup', { key: '3' }));
    page.querySelector('.password').dispatchEvent(new KeyboardEvent('keyup', { key: '4' }));
    page.querySelector('.password').dispatchEvent(new KeyboardEvent('keyup', { key: '5' }));
    page.querySelector('.password').dispatchEvent(new KeyboardEvent('keyup', { key: '6' }));
    page.querySelector('.password').dispatchEvent(new KeyboardEvent('keyup', { key: '7' }));
    page.querySelector('.password').dispatchEvent(new KeyboardEvent('keyup', { key: '8' }));
    page.querySelector('.password').dispatchEvent(new KeyboardEvent('keyup', { key: '9' })); */
    page.querySelector('#submit-btn').click();
    expect(loginOfUser).toHaveBeenCalledTimes(1);
  });
});
