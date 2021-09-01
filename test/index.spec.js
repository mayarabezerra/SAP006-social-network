/**
 * @jest-environment jsdom
 */
import { sendVerificationEmail, loginOfUser } from '../src/services/index.js';
import { loginUsuario } from '../src/pages/login/index.js';
/* import { getFirebase } from '../src/services/firebase.js'; */

const mockSendEmail = jest.fn();
jest.mock('../src/services/firebase.js', () => ({
  getFirebase: jest.fn(() => ({
    firestore: jest.fn(() => ({
      collection: jest.fn(),
    })),
    auth: jest.fn(() => ({
      currentUser: {
        sendEmailVerification: mockSendEmail,
      },
      signInWithEmailAndPassword: Promise.resolve({
        user: 'teste',
      }),
    })),
  })),
}));

jest.mock('../src/services/index.js', () => ({
  loginOfUser: jest.fn(() => Promise.resolve({
    user: 'teste',
  })),
}));

describe('sendVerificationEmail', () => {
  it('should be a function', () => {
    sendVerificationEmail();
    expect(mockSendEmail).toHaveBeenCalledTimes(1);
  });
});

describe('loginPage', () => {
  it('should return login page', () => {
    const page = loginUsuario();
    page.querySelector('#email').value = 'exemplo@exemplo.com';
    /* page.querySelector('.password').value = '12345678'; */
    page.querySelector('.password').dispatchEvent(new KeyboardEvent('keyup', { key: '1' }));
    page.querySelector('.password').dispatchEvent(new KeyboardEvent('keyup', { key: '2' }));
    page.querySelector('.password').dispatchEvent(new KeyboardEvent('keyup', { key: '3' }));
    page.querySelector('.password').dispatchEvent(new KeyboardEvent('keyup', { key: '4' }));
    page.querySelector('.password').dispatchEvent(new KeyboardEvent('keyup', { key: '5' }));
    page.querySelector('.password').dispatchEvent(new KeyboardEvent('keyup', { key: '6' }));
    page.querySelector('.password').dispatchEvent(new KeyboardEvent('keyup', { key: '7' }));
    page.querySelector('.password').dispatchEvent(new KeyboardEvent('keyup', { key: '8' }));
    page.querySelector('.password').dispatchEvent(new KeyboardEvent('keyup', { key: '9' }));
    page.querySelector('#submit-btn').click();
    expect(loginOfUser).toHaveBeenCalledTimes(1);
  });
});

/* const mockLogOut = jest.fn();
jest.mock('../src/services/firebase.js', () => ({
  getFirebase: jest.fn(() => ({
    firestore: jest.fn(() => ({
      collection: jest.fn(),
    })),
    auth: jest.fn(() => ({
      signOut: mockLogOut,
    })),
  })),
}));

describe('logOut', () => {
  it('should be called once', () => {
    logOut();
    expect(mockLogOut).toHaveBeenCalledTimes(1);
  });
}); */
