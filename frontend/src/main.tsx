import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import CadastrarProduto from './routes/cadastrarProduto/CadastrarProduto.tsx'
import ListarProdutos from './routes/listarProdutos/ListarProdutos.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/listarProdutos",
    element: <ListarProdutos />
  },
  {
    path: "/cadastrarProduto",
    element: <CadastrarProduto />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
