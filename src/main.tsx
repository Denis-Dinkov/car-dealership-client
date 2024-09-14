import { StrictMode } from 'react';

import App from './App.tsx';
import { Routes } from './app/Routes';
import './index.css';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={Routes} />
  </StrictMode>,
);
