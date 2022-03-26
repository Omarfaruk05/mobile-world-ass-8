import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [cart, setCart] = useState([]);

    const handleAddToClick = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    } 

    const products = [
        {
            id:1,
            brandName:"Samsung",
            modle:"Samsung a51",
            price:18500,
            photo: 'phones/samsung-a51.jpg'
        },
    
        {   
            id:2,
            brandName:"Samsung",
            modle:"Samsung a12",
            price:14500,
            photo:"phones/samsung-a12.jpg"
        },
    
        {
            id:3,
            brandName:"Realme",
            modle:"Realme C25s",
            price:16500,
            photo:"phones/realme-c25s.jpg"
        },
    
        {   
            id:4,"brandName":"Oppo",
            modle:"Opoo a76",
            price:19990,
            photo:"phones/oppo-a76.jpg"
        },
        {
            id:5,
            brandName:"Oppo",
            modle:"Oppo a16",
            price:14990,
            photo:"phones/oppo-a16.jpg"
        },
        {
            id:6,
            brandName:"Vivo",
            modle:"Vivo Y21",
            price:14990,
            photo: 'phones/vivo-y21.jpg'
        },
        {
            id:7,
            brandName:"Vivo",
            modle:"Vivo Y20G",
            price:17990,
            photo:"phones/vivo-y20g.jpg"
        },
        {
            id:8,
            brandName:"Redmi",
            modle:"Redmi Note 11",
            price:16490,
            photo:"phones/redmi-note10.jpg"
        },
        {
            id:9,
            brandName:"Poco",
            modle:"Poco M3",
            price:17490,
            photo:"phones/poco-m3.jpg"
        }
    ];
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                         key={product.id} product={product} 
                         handleAddToClick={handleAddToClick}
                         ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                 ></Cart>
            </div>
        </div>
    );
};

export default Shop;