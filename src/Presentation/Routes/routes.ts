import { Route } from '../../Core/Models/route.models';
import { Login } from '../Ui/Pages/Login/Login';
import { Dashboard } from '../Ui/Pages/Dashboard/Dashboard';

 
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