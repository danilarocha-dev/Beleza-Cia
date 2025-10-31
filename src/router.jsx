import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Services from './pages/Services';
import Agendamentos from './pages/Agendamentos';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/agendamentos",
        element: <Agendamentos />,
      },
    ],
  },
]);

export default router;