/**
 * @jest-environment jsdom
 */
import { registerUsuario } from '../src/pages/register/index.js';
import { createNewAccount } from '../src/services/index.js';

const mockRegister = jest.fn();
const mockCreatUser = jest.fn(() => Promise.resolve({
  user: 'teste',
}));
jest.mock('../src/services/firebase.js', () => ({
  getFirebase: jest.fn(() => ({
    firestore: jest.fn(() => ({
      collection: jest.fn(),
    })),
    auth: jest.fn(() => ({
      createUserWithEmailAndPassword: mockRegister
        .mockResolvedValueOnce('first call')
        .mockRejectedValueOnce(new Error('Async error')),
      currentUser: {
        updateProfile: mockCreatUser
          .mockResolvedValueOnce('first call')
          .mockRejectedValueOnce(new Error('Async error')),
      },
    })),

  })),
}));

describe('registerPage', () => {
  it('should return register page', async () => {
    const page = registerUsuario();
    page.querySelector('#name').value = 'mariazinha';
    page.querySelector('#input-email').value = 'exemplo@exemplo.com';
    page.querySelector('#input_password').value = '12345678';
    page.querySelector('#confirm_password').value = '12345678';
    page.querySelector('.register_btn').click();
    createNewAccount();
    await expect(mockRegister).toHaveBeenCalledTimes(1);
  });
});
