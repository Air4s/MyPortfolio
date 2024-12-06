import { RouteObject } from 'react-router-dom';
import MainLayout from '../../layout'


export const PublicRoutes: RouteObject = {
  path: '/',
  element: <MainLayout />,
  children: [
    // {
    //   path: '/sample-path',
    //   element: <AddPageHere />,
    // },
    // {
    //   path: '/sample-path',
    //   element: <AddPageHere />,
    //   index: true,
    // },
  ]
};

export default PublicRoutes;
