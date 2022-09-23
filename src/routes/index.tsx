import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { Admin } from '../pages/Admin'
import { CreateList } from '../pages/Admin/CreateList'
import { Home } from '../pages/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/admin/createList",
    element: <CreateList />,
  },
]);

export { router }