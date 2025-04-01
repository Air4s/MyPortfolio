import { RouteObject } from 'react-router-dom';
import MainLayout from '../../layout';
import HomePage from '../../layout/body';


export const PublicRoutes: RouteObject = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <HomePage />,
    },
    // {
    //   path: '/sample-path',
    //   element: <AddPageHere />,
    //   index: true,
    // },
  ]
};

export default PublicRoutes;
