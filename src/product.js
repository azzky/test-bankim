import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useLocation } from 'react-router-dom';

const Product = () => {
    const { pathname } = useLocation();
    const [product, setProduct] = useState(null);
    const id = pathname.split('/product/')[0];
    console.log(id);
    useEffect(() => {
        try {
            fetch('https://dummyjson.com/products/'+id)
            .then(res => res.json())
            .then(json => console.log(json))
        }
        catch(err) {
            console.log(err);
        }
    }, [pathname]);
    return (
        <h1>
            <FormattedMessage id="home.title"/>
        </h1>
    );
};

export default Product;