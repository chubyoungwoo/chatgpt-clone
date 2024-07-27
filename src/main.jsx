import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Link,RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './routes/homepage/Homepage'

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Homepage />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
