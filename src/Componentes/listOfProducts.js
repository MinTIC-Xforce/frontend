import * as React from 'react';
import { ProductsDetail } from './productDetail';
import { useState, useEffect } from "react";
import '../Estilos/listOfProducts.css';

export function ListOfProducts(props) {

    const [dataProductos, setDataProductos] = useState([]);


    useEffect(() => {
        getData();
    }, [])
    
    


    function getData() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Origin','http://localhost:3000');

        fetch("http://localhost:4000/products",{mode: 'cors', headers: headers})
            .then((resp) => resp.json())
            .then((resp) => {
                return setDataProductos(resp)
            })
            .catch((err) => console.log(err));
    }


    const productDetail = dataProductos.map(product =>
        <ProductsDetail
            urlImagen={product.image}
            id={product.id}
            nombre={product.name}
            precio={product.price}
            caracteristica={product.description}
            handleItem={props.handleItem}
        />)


    return (
        <React.Fragment>
            
            <seccion class="container p-1 text-white">
            
                <div class="p-4 ms-5 me-5 d-flex bd-highlight border">
                    <h3 class=" flex-fill bd-highlight"> Lista de productos:  </h3>
                </div>

                <div  class="d-flex p-2 ms-5 me-5 justify-content-evenly flex-wrap border">  { productDetail} </div>
                
            </seccion>
        </React.Fragment>


    )
}