import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = ({product, handleAddToClick}) => {
    const {brandName, modle, price, photo} = product;
    return (
        <div className='product'>
             <div className='product-info'>
                <div className='image-container'>
                    <img src={photo} alt="" width='240px'></img>
                </div>
                <div className='product-detail'>
                    <h3>Brand:{brandName}</h3>
                    <h4>Modle:{modle}</h4>
                    <h5 className='porduct-price'>Price: ${price}</h5>
                    <div className='cart-btn'>
                        <button key={product.id} onClick={() =>handleAddToClick(product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;