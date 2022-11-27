import { Fragment } from "react";
import { useState } from "react";



import '../Estilos/Login2.css';
//import '../Estilos/ListaProductosAdmin.css';


export function CrearUsuarios() {

    const [data, setDate] = useState({
        user: "",
        pass: "",
        mail: "",
        name: "",
        rol: ""


    }
    )


    return (

        <Fragment>
            <center>
                <div className="container mt-4 text-white " align="center" id="divLogin">
                    <h3>Crear Usuarios</h3>
                    <label>Nombre
                        <input className="table table-bordered text-white " type="User" onChange={(e) => {
                            setDate({ ...data, name: e.target.value })
                        }
                        } ></input>
                    </label>
                    <label>Correo Electronico
                        <input className="table table-bordered text-white " type="User" onChange={(e) => {
                            setDate({ ...data, email: e.target.value })
                        }
                        } ></input>
                    </label>
                    <label>Rol
                        <input className="table table-bordered text-white " type="User" onChange={(e) => {
                            setDate({ ...data, rol: e.target.value })
                        }
                        } ></input>
                    </label>
                    <label>Usuario
                        <input className="table table-bordered text-white " type="User" onChange={(e) => {
                            setDate({ ...data, user: e.target.value })
                        }
                        } ></input>
                    </label>
                    <label>Contraseña
                        <input className="table table-bordered text-white " type="Pass" onChange={(e) => {
                            setDate({ ...data, pass: e.target.value })
                        }
                        }>
                        </input>
                    </label>
                    <button class="btn btn-secondary btn-sm" onClick={CrearUsuario} >Crear Usuario</button>

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