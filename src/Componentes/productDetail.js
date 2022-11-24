import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsDistributeHorizontal } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";

import Card from 'react-bootstrap/Card';
import * as React from 'react';
// import imgproductoone from '../bakery-1.jpg';
// import MyVerticallyCenteredModal from './detailsAlert';
// import '../styles/listOfProducts.css';


export function ProductsDetail(props) {


    const [productClicked, setProductClicked] = React.useState();

    const xxx = () => {
        setProductClicked((productClicked) => {
            return {
                imagen: props.urlImagen,
                nombre: props.nombre,
                precio: props.precio,
                cantidad: "1",
                subtotal: props.precio
            }
        })
        props.handleItem(productClicked);
    }

    const proDetails = (x) => {
        let valor = props.caracteristicas;
        alert("caracteristicas:" + { x })
    }

    function setProductClickedHandler() {
        this.setProductClicked((productClicked) => {

            return setProductClicked.push({
                imagen: props.urlImagen,
                nombre: props.nombre,
                precio: props.precio,
                cantidad: "1",
                subtotal: props.precio
            })
        }
        );
    }

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <React.Fragment>
            <div >
                <Card bg='dark' border="#201A16" style={{ width: '16rem' }}>

                    <Card.Img src={ props.imagen} height="40%" alt="Card image" />

                    <Card.Body  >
                        <Card.Text>
                            <div class=" p-2 text-white">
                                <strong class="tranform-text">
                                    {props.nombre}
                                </strong>
                                <p class="subtitle-p2">Categoría</p>
                                $ {props.precio}
                            </div>
                        </Card.Text>

                        <div class="d-flex justify-content-around align-items-center border">
                        <>
                            <Button variant="link" onClick={() => setModalShow(true)}>
                                <BsFillEyeFill size={25} color="gray" />
                            </Button>
                        </>
                            <Button variant="link" onClick={xxx} > < BsFillCartPlusFill size={25} color="gray" /> </Button>{' '}
                        </div>
                    </Card.Body>
                </Card>
                <br />
            </div>

        </React.Fragment>



    )
}