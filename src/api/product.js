import axios from 'axios';

export const getProductsRequest = async () => await fetch('/products')
export const createProductRequest = async (product) => await fetch('/products', product)
export const deleteProductRequest = async (id) => await fetch("/products/" + id);
 