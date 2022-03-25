import React from 'react';
import './Product.css'

const Product = ({product}) => {
    const {brandName, modle, price, photo} = product;
    console.log(photo)
    return (
        <div>
             <div>
                <div className='image-container'>
                    <img src={photo} alt=""></img>
                </div>
                <div className='product-detail'>
                    <h3>{brandName}</h3>
                    <h4>{modle}</h4>
                    <h5 className='porduct-price'>Price: ${price}</h5>
                    <div className='cart-btn'>
                        <button>Add to Cart </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;