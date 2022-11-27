import { useState, useEffect } from "react";
import '../Estilos/ListaProductosAdmin.css';



export const ListaVentas = () => {
    
    const [dataVentas, setDataVentas] = useState([]);


    useEffect(() => {
        getData();
    }, [])
    
    


    function getData() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Origin','http://localhost:3000');

        fetch("https://pantasya-backend.herokuapp.com/sales",{mode: 'cors', headers: headers})
            .then((resp) => resp.json())
            .then((resp) => {
                return setDataVentas(resp)
            })
            .catch((err) => console.log(err));
    }

    return (

        <div className="container mt-5 text-white " align="center">
            <h2> Lista de ventas completas</h2>

            <table className="table table-bordered text-white " >
                <thead className="thead-dark text-white">
                    <tr>
                        <td>ID </td>
                        <td>FECHA VENTA </td>
                        <td>ID CLIENTE </td>
                        <td>CANTIDAD </td>
                        <td>VENTA CONFIRMADA </td>
                        <td>DETALLE </td>
                    </tr>
                </thead>
                <tbody>
                    {dataVentas.map((Ventas) => (
                        <tr key={Ventas.id}>
                            <td>{Ventas.id}</td>
                            <td>{Ventas.date}</td>
                            <td>{Ventas.idClient}</td>
                            <td>{Ventas.amount}</td>
                            <td>{Ventas.confirm}</td>
                            <td>{Ventas.detailSale.quantity}</td>
                            
                        </tr>
                    ))}

                </tbody>
            </table>








        </div>



    )




}