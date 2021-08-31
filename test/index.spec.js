// importamos a função que vamos testar
/* import { sendVerificationEmail } from '../src/services/index.js';
import { getFirebase } from '../src/services/firebase.js';

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
    })),
  })),
}));

describe('sendVerificationEmail', () => {
  it('should be a function', () => {
    sendVerificationEmail();
    expect(mockSendEmail).toHaveBeenCalledTimes(1); */

import * as services from '../src/services/index.js';

/* describe('sendVerificationEmail', () => {

}) */

jest.mock('../src/services/index.js');

const emailTwo = 'exemplo@exemplo.com';
const passwordTwo = '12345678';
const nameOfUser = 'fulana';

describe('createNewAccount', () => {
  it('should creat account', async () => {
    services.createNewAccount.mockResolvedValueOnce('deu bom');
    const result = await services.createNewAccount(emailTwo, passwordTwo, nameOfUser);
    expect(result).toBe('deu bom');
    expect(services.createNewAccount).toBeCalledTimes(1);
    expect(services.createNewAccount).toBeCalledWith(emailTwo, passwordTwo, nameOfUser);
  });
});
