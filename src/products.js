import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
// import { Link } from 'react-router-dom';

import classes from './products.module.css'

const Products = () => {
    // 11:35 start
    // 12:15 pause
    // 12:20 start
    const [products, setProducts] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        try {
            fetch('https://dummyjson.com/products?limit=9')
            .then(res => res.json())
            .then(json => setProducts(json.products))
        }
        catch(err) {
            console.log(err);
        }
    }, []);

    return (
        <>
            <h1>
                <FormattedMessage id="products.title"/>
            </h1>
            {!products ?
                <p>loading</p> : 
                <ul>
                    {products.map(product => (
                        <li key={product.id}
                            onClick={() => setSelectedProduct(product)}>
                            <p>
                                {product.title}
                            </p>
                            <img
                                alt={product.title}
                                src={product.images[0]}/>
                        </li>
                    ))}
                </ul>
            }
            {selectedProduct && (
                <div className={classes.dialog}>
                    <button autofocus onClick={() => setSelectedProduct(null)}>
                        <FormattedMessage id="global.close"/>
                    </button>
                    <div className={classes.product}>
                        <img
                            alt={selectedProduct.title}
                            src={selectedProduct.images[0]}/>
                        <p>{selectedProduct.title}</p>
                        <p>{selectedProduct.description}</p>
                        <p>${selectedProduct.price}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Products;