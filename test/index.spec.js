import { sendVerificationEmail, logOut } from '../src/services/index.js';

const mockSendEmail = jest.fn();
const mockLogOut = jest.fn();
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
      signOut: mockLogOut
        .mockResolvedValueOnce('first call')
        .mockRejectedValueOnce(new Error('Async error')),
    })),
  })),
}));

describe('sendVerificationEmail', () => {
  it('should be a function', () => {
    sendVerificationEmail();
    expect(mockSendEmail).toHaveBeenCalledTimes(1);
  });
});

describe('logOut', () => {
  it('should be called once', () => {
    logOut();
    expect(mockLogOut).toHaveBeenCalledTimes(1);
  });
});
