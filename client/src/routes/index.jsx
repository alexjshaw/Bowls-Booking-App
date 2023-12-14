import React from 'react';
import { useRoutes } from "react-router-dom";
import TestPage from '../pages/TestPage';

// const routes = [
//   {
//     path: '/',
//     element: <TestPage />,
//   },
// ];

export default function Routes() {
  return useRoutes([
    {
      path: '/',
      element: <TestPage />
    }
  ])
}

// export default routes;
