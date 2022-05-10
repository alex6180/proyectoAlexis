import { lazy } from 'react';

export const Login = lazy(() => import( '../Ui/Pages/Login/Login'));
export const Dashboard = lazy(()=> import('../Ui/Pages/Dashboard/Dashboard'));