import { Component } from "react";


var heading = ['Id Producto', 'Nombre Producto', 'Descripcion Producto', 'Valor Unitario'];

//var body = conexion a un BD NOsq o sql o un arcgivo plano

var body =
    [
        ['PI-0001', 'Guantes', 'Unidades dependiendo de tallas', '36'],
        ['PI-0002', 'Barrilla', 'TAmaños de 6 metros y define las pulagas', '40'],
        ['PI-0003', 'Brea', 'Brea sintetica por 6 kg', '56'],

    ];


export function ListaVentas() {

    return (
        <>
            <div align="center">
                <br></br>
                <h2 className="text-white" >ListaVentas</h2>
                <div className="container mt-5 text-white " >
                    <Table heading={heading} body={body} />
                </div>

            </div>
        </>
    );

}

class Table extends Component {
    render() {

        //Vector y formatearlos para que react los conozca y los trate coomo un map
        //Map Coleecion no lineal

        var heading = this.props.heading;
        var body = this.props.body;

        return (
            <div id="datagrid">
                <table className="table table-bordered text-white " >
                    <thead>
                        <tr>
                            {heading.map(head => <th>{head}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {body.map(row => <TableRow row={row} />)}
                    </tbody>
                </table>


            </div>
        );
    }
}

class TableRow extends Component {
    render() {
        var row = this.props.row;
        return (
            <tr>
                {row.map(val => <td>{val}</td>)}
            </tr>
        )
    }
}