import React, {useContext} from 'react';
import styled from "styled-components";
import {ProductContext} from "../../context/productContext";
import {Link as LinkR} from 'react-router-dom';

function CartTotals() {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = useContext(ProductContext);
    return (

        <CartTotalContainer>
            <div>
                <LinkR to='/products'>
                    <button onClick={() => {
                        clearCart()
                    }}>
                        clear cart
                    </button>
                </LinkR>
                <p>Subtotal: {cartSubTotal}</p>
                <p>Tax: {cartTax}</p>
                <p>Total: {cartTotal}</p>
                <LinkR to='/products'>
                    <button className='btn btn-modal '>
                        Continue Shopping
                    </button>
                </LinkR>
                <LinkR to='/'>
                    <button className='btn btn-modal'>
                        Check Out
                    </button>
                </LinkR>
            </div>
        </CartTotalContainer>
    )
}
export default CartTotals;

const CartTotalContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`