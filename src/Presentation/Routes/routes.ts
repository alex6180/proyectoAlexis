import { Route } from '../../Core/Models/route.models';
import { Login, Dashboard } from './lazy.routes';

 
export const routes: Route[] = [
  {
    to: '/login',
    path: 'login',
    Component: Login,
    name: 'login'
  },
  {
    to: '/dashboard',
    path: 'dashboard',
    Component: Dashboard,
    name: 'dashboard'
  }

]