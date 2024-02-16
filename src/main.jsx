import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import { Project } from './components/project/Project.jsx';
import  Farm  from './pages/Farm.jsx';
import LineChart from './components/Chart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: <Project />,
  },
  {
    path: "/farm/:id",
    element: <Farm />,
  },
  {
    path: "/chart",
    element: <LineChart />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
