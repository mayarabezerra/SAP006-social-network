import { sendVerificationEmail } from '../src/services/index.js';
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

describe('sendVerificationEmail', () => {
  it('should be a function', () => {
    sendVerificationEmail();
    expect(mockSendEmail).toHaveBeenCalledTimes(1);
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
