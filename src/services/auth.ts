import { mock } from './mock';

export async function isAuthenticated() {
  if (localStorage.getItem('isAuthenticated') === 'true') {
    return;
  }
  await mock.call();
  await mock.call();
  throw new Error('Unauthorized');
}

type SignInType = {
  username: string;
  password: string;
};

export async function signIn(props: SignInType) {
  console.log('signIn', props);
  await mock.call(1);
  localStorage.setItem('isAuthenticated', 'true');
}

export async function signOut() {
  await mock.call();
  localStorage.removeItem('isAuthenticated');
}
