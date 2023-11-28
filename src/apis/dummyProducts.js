import { useEffect, useState } from 'react';

/**
 * API hook for fetching products list
 * @param props
 * @param {Number} props.limit limits number of products fetched
 * @returns {Array} products list
 */
const DummyProducts = ({ limit }) => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        try {
            fetch('https://dummyjson.com/products?limit='+limit)
            .then(res => res.json())
            .then(json => setProducts(json.products))
        }
        catch(err) {
            console.log(err);
        }
    }, [limit]);

    return {
        products
    }
};

export default DummyProducts;