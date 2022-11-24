import { Fragment } from "react";
import { useState } from "react";
import { Navigate} from "react-router-dom";

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
            <h3>Login PANtasya App</h3>

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

            <button id="btn" onClick= {verInfo} >Log In</button>
            <div class="social">
                 <div class="go"><i class="fab fa-google"></i>  Google</div>
                 <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
            </div>
            </form>
            </center>
        </Fragment>
 );
    
 function verInfo() {
    console.log(data.user, data.pass)
    const loginResponse = getUser(data.user, data.pass)
    alert("Validando datos")
    loginResponse.then((value) => {
        console.log("Valor recibido :" + value)
        if ( value) {
            alert("El usuario ingresado es correcto")
            return <Navigate to="/ListaProductosAdmin" replace={true} />
             //navigate ("/ListaProductosAdmin")
        } else {
            alert("Por favor verifique los datos ingresados")
             }
    })
}    

   // getUser()
    async function getUser(user, pass) {
        try {
          var decision = false;
          const response = await fetch(`http://localhost:4000/user/${user}`,{method: 'GET',mode: 'cors', cache: 'no-cache',referrerPolicy: 'no-referrer', redirect: 'follow',headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },});
          const result = await response.json();
          console.log("JSON respuesta" + result)
          //for (const usuario of result) {            
            if (user === result.userName && pass === result.passwordUser) {
                console.log("Desicion TRUE")
                decision = true;
            } 
        //}
        console.log(decision)   
        return decision;


        } catch (err) {
          console.log(err);
        }
    }

}
