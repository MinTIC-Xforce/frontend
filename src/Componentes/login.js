import { Fragment } from "react";
import { useState } from "react";
import JsonData from "../data/UsuariosEjemplo.json";

import '../Estilos/Login2.css';


export function Login() {

    const [data, setDate] = useState({
        user: "",
        pass: "",
        date: ""
    }
    )


    return (

        <Fragment>
            <center>
            <div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
            <form>
            <h3>--- Login App  ---</h3>

            <label for="username">Username</label>
            <input type="text" placeholder="Email or Phone" id="username" onChange={(e) => {
                            setDate({ ...data, user: e.target.value })
                        }
                        }></input>

            <label for="password">Password</label>
            <input type="password" placeholder="Password" id="password" onChange={(e) => {
                            setDate({ ...data, pass: e.target.value })
                            
                        }
                        
                        }></input>

            <button onClick={VerInfo}>Log In</button>
            <div class="social">
                 <div class="go"><i class="fab fa-google"></i>  Google</div>
                 <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
            </div>
            </form>
            </center>
        </Fragment>


    );

    function Validacion(usuarioNombre, contrasena) {

        var decision = false;
        var datos = JsonData; //Integra o con express o con mongoDb   


        for (const usuario of datos) {            
            if (usuarioNombre === usuario.user && contrasena === usuario.pass) {
                decision = true;
            } 
        }
        return decision;
    }

    

    function VerInfo() {

        // eslint-disable-next-line eqeqeq

        console.log(Validacion(data.user, data.pass))
        if (Validacion(data.user, data.pass)) {
            alert("El usuario ingresado es correcto")
        } else {
            alert("Por favor verifique los datos ingresados")
        }
    }
}



