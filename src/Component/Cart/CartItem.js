import React, {useContext} from 'react';
import './CardItem.css'
import {ProductContext} from "../../context/productContext";

function CartItem(props) {
    const {id, title, img, price, count, total} = props.cartItem;
    const {increment, decrement, removeItem} = useContext(ProductContext);
    return (
        <div className='cart-item-content' >
            <td className='cart-img'  >
                <img className='cart-item-img' src={img} alt={title}/>
            </td>
            <td className='cart-title'>
                {title}
            </td>
            <td className='cart-price'>
                {price}
            </td>
            <td className='count-update'>
                <span onClick={() => decrement(id)}>
                   <i className="far fa-minus-square"></i>
                </span>
                <span>
                    {count}
                </span>
                <span onClick={() => increment(id)}>
                    <i className="far fa-plus-square"></i>
                </span>
            </td>
            <td className='cart-removeBtn'>
                <button onClick={() => removeItem(id)} className='remove-btn'>
                    <i className="fas fa-trash-alt"></i>
                    REMOVE
                </button>

            </td>
            <td className='cart-total'>
                {total}
            </td>
        </div>


    )
}

export default CartItem;
