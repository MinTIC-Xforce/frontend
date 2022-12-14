import { useState, useEffect } from "react";

import '../Estilos/Login2.css';
//import '../Estilos/ListaProductosAdmin.css';


export const ListaProductosAdmin = () => {

    const [dataProductos, setDataProductos] = useState([]);


    useEffect(() => {
        getData();
    }, [])
    
    


    function getData() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Origin','http://localhost:3000');

        fetch("https://pantasya-backend.herokuapp.com/products",{mode: 'cors', headers: headers})
            .then((resp) => resp.json())
            .then((resp) => {
                return setDataProductos(resp)
            })
            .catch((err) => console.log(err));
    }

    return (

        <div className="container mt-auto text-white " align="center">
            <h2> Lista de productos completos</h2>

            <table className="table table-bordered text-white " >
                <thead className="thead-dark text-white">
                    <tr>
                        <td>ID </td>
                        <td>NOMBRE PRODUCTO </td>
                        <td>DESCRIPCION PRODUCTO </td>
                        <td>CANT INVENTARIO</td>
                        <td>VALOR UNITARIO </td>
                        <td>IMAGEN </td>
                        <td>ACCION </td>
                    </tr>
                </thead>
                <tbody>
                    {dataProductos.map((Producto) => (
                        <tr key={Producto.id}>
                            <td>{Producto.id}</td>
                            <td>{Producto.name}</td>
                            <td>{Producto.description}</td>
                            <td>{Producto.stock}</td>
                            <td>{Producto.price}</td>
                            <td>{Producto.image}</td>
                            <td> <button class="btn btn-secondary btn-sm" align="center" > Eliminar</button> </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )

}