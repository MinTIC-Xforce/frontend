import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "./login.js";
import { ListaProductosUsuario } from "./userListaProductos.js";
import { CarritoCompras } from "./userCarrito.js";
import { CrearUsuarios } from "./AdminCrearUsuarios.js";
import { CrearProdcutos } from "./AdminCrearProductos.js";
import { ListaProductosAdmin } from "./AdminListaProductos";
import { ListaVentas } from "../Componentes/AdminListaVentas";
import { ListaUsuarios } from "./AdminListaUsuarios.js";
import { ShoppingCart} from "./shoppingCart";
import {ListOfProducts} from "./listOfProducts"

export const Navegacion = ({ rol }) => {


  return (
    
    <Routes>
      {rol === "admin" ? (
        <Fragment>
          <Route path="/" element={<Login />} />
          <Route path="/CrearProductos" element={<CrearProdcutos />} />
          <Route path="/CrearUsuarios" element={<CrearUsuarios />} />
          <Route path="/ListaUsuarios" element={<ListaUsuarios />} />
          <Route path="/ListaProductosAdmin" element={<ListaProductosAdmin />} />
          <Route path="/ListaVentas" element={<ListaVentas />} />
          <Route path="/CarritoCompras" element={< ShoppingCart />} />
          <Route path="/ProductosPrueba" element={< ListOfProducts  />} />
          
        </Fragment>
      ) : (
        <Fragment>
          <Route path="/" element={< Login />} />
          <Route path="/ListaProductosUsuario" element={< ListaProductosUsuario />} />
          <Route path="/CarritoCompras" element={< CarritoCompras />} />
        </Fragment>
      )}
    </Routes>
  );
};