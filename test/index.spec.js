// importamos a função que vamos testar
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
