import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'


const Cart = (props) => {
    const products = props.cart;
    const chooseAgain = props.chooseAgain;
    const chooseOneForMeHandler = props.chooseOneForMeHandler;
        return (
        <div className='cart'>
            <h2>Selected Phones</h2>
            <div >
            {
                products.map(product => {
                    const {photo, modle} = product;
                    return(
                        <div className='cart-item'>
                            <div className='product-img'>
                                <img src={photo} alt=""  />
                            </div>
                            <h4>{modle}</h4>
                            <div className='trash'>
                                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <div className='choose-btn'>
                <button onClick={() =>chooseOneForMeHandler(products)}>Choose 1 for Me</button>
                <button onClick={chooseAgain}>Choose Again</button>
            </div>
            <div>
                {/* <img src={photo} alt="" />
                <h3>{modle}</h3> */}
            </div>

        </div>
    );
};

export default Cart;