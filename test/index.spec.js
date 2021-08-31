// importamos a função que vamos testar
import { sendVerificationEmail } from '../src/services/index.js';
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
    expect(mockSendEmail).toHaveBeenCalledTimes(1);
  });
});
