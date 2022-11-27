import { Fragment } from "react";
import { useState } from "react";

import '../Estilos/Login2.css';


export function CrearProdcutos() {

    const [data, setDate] = useState({
        name: "",
        description: "",
        features: "",
        price: "",
        stock: "",
        image: ""


    }
    )


    return (

        <Fragment>
            <center>
                <div className="container mt-4 text-white " align="center" id="divProductos" >
                    <h3>Crear Productos</h3>
                    <label>Nombre
                        <input className="table table-bordered text-white " type="User" onChange={(e) => {
                            setDate({ ...data, name: e.target.value })
                        }
                        } ></input>
                    </label>
                    <label>Descripcion
                        <input className="table table-bordered text-white " type="User" onChange={(e) => {
                            setDate({ ...data, description: e.target.value })
                        }
                        } ></input>
                    </label>
                    <label>Features
                        <input className="table table-bordered text-white " type="User" onChange={(e) => {
                            setDate({ ...data, features: e.target.value })
                        }
                        } ></input>
                    </label>
                    <label>Cantidad
                        <input className="table table-bordered text-white " type="User" onChange={(e) => {
                            setDate({ ...data, stock: e.target.value })
                        }
                        } ></input>
                    </label>
                    <label>Valor Unitario
                        <input className="table table-bordered text-white " type="User" onChange={(e) => {
                            setDate({ ...data, price: e.target.value })
                        }
                        } ></input>
                    </label>
                    <label>Imagen
                        <input className="table table-bordered text-white " type="User" onChange={(e) => {
                            setDate({ ...data, image: e.target.value })
                        }
                        } ></input>
                    </label>                    
                    <button class="btn btn-secondary btn-sm" onClick={CrearUsuario} >Crear Producto</button>

                </div>
            </center>
        </Fragment>


    );

    function CrearUsuario() {

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        console.log(data)
        fetch("https://pantasya-backend.herokuapp.com/products",{mode: 'cors', method: 'POST', cache: 'no-cache', headers: headers,
            body: JSON.stringify(data) 
             })
        .then(function(res){ console.log(res) })
        .catch(function(res){ console.log(res) })
        return(alert("Producto Creado"),"/")
    }
}