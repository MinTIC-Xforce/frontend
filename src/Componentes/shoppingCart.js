import * as React from 'react';
import Table from 'react-bootstrap/Table';


export function ShoppingCart(props) {


    return (
        <React.Fragment>

            <div className="container mt-5 text-white " align="center">
                <h2> Resumen de compra</h2>

                <table className="table table-bordered text-white " >
                    <Table striped >
                        <thead className=" text-white ">
                            <tr>
                                <th>Imagen</th>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Valor</th>
                                <th>Sub total</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>


                    </Table>
                    <h4> Total:  </h4>
                </table>








            </div>



        </React.Fragment>

    )
}


