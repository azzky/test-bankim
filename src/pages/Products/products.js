import { Suspense, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { DummyProducts } from '@apis';

import classes from './products.module.css'

const Products = () => {
    const { products } = DummyProducts({ limit: 9 });
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <>
            <h1>
                <FormattedMessage id="products.title"/>
            </h1>
            <Suspense fallback={<p>loading</p>}>

            </Suspense>
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