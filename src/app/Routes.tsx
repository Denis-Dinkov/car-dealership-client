import { lazy } from 'react';

import { LayoutBasic } from '@/components/layout';

import { createBrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('@pages/Home/index'));

export const Routes = createBrowserRouter([
  {
    path: '/*',
    // element: <LayoutBasic hasFooter={true} />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
]);
