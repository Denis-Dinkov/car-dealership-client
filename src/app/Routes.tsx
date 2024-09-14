import { lazy } from 'react';

import { createBrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('@pages/Home/index'));

export const Routes = createBrowserRouter([
  {
    path: '/*',
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
]);
