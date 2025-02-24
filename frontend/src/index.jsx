import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import Acomodacoes from './pages/Acomodacoes';
import Details from './pages/Details';
import AcomodacoesSearch from './pages/AcomodacoesSearch';


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/acomodacoes", element: <Acomodacoes /> },
  { path: "/acomodacoes/:id", element: <Details /> },
  { path: "/acomodacoes/search", element: < AcomodacoesSearch /> }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);