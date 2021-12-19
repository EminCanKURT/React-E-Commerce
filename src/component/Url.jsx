import { useState, useEffect } from 'react';
import axios from "axios";


export function Products() {
    const [product, setProdutcs] = useState([]);




    useEffect(() => {
        function getFetchData() {
            return 'https://fakestoreapi.com/products';
        }
        const Product = async () => {
            const res = await axios.get(getFetchData());
            setProdutcs(res.data);
        }
        Product();

    }, []);



    return product;

}

export function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        function getFetchData() {
            return 'https://fakestoreapi.com/products/categories';
        }
        const Categories = async () => {
            const res = await axios.get(getFetchData());
            setCategories(res.data);
        }
        Categories();

    }, []);


    return categories;

}
