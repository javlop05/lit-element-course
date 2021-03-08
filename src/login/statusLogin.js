import { instanceLogin } from './login';

export const isLoggedIn = () => instanceLogin.isLoggedInPromise();