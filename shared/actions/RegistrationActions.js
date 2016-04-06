import request from 'axios';

const API_URL = 'http://hpc1api.hpccdn.com/account';

export function createAccount(account) {
  return {
    type:    'CREATE_ACCOUNT',
    promise: request.post(API_URL, account),
  }
}
