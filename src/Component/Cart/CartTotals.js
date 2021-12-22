import React, {useContext} from 'react';
import styled from "styled-components";
import {ProductContext} from "../../context/productContext";
import {Link as LinkR} from 'react-router-dom';

function CartTotals() {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = useContext(ProductContext);
    return (

        <CartTotalContainer>
            <div className='cart-total-text'>
                <p><span>Subtotal:</span><span>{cartSubTotal}</span> </p>
                <p><span>Tax:</span> <span>{cartTax}</span></p>
                <p><span>Total:</span> <span>{cartTotal}</span></p>
            </div>
            <div className='cart-total-btns'>
                <LinkR to='/products'>
                    <button
                        onClick={() => {
                            clearCart()
                        }}
                        className='btn btn-checkout'
                    >
                        clear cart
                    </button>
                </LinkR>
                <LinkR to='/products'>
                    <button className='btn btn-checkout'>
                        Continue Shopping
                    </button>
                </LinkR>
                <LinkR to='/'>
                    <button className='btn btn-checkout btn-pay'>
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
  align-items: center;
  
  .cart-total-text,
  .cart-total-btns {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: center;
  }
  
  a {
    width: 100%;
  }
  
  .btn-checkout {
    width: 100%;
    font-size: var(--fs-body);
    border-radius: var(--radius);
    padding: 0.45rem 1.75rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .btn-checkout:hover {
    transform: none;
    background: var(--clr-blue-lighter);
    color: var(--clr-blue);
  }
  .btn-pay {
    background: transparent;
    border: var(--clr-pink);
    color: var(--clr-pink);
    border: 1px solid var(--clr-pink);
  }
  .btn-pay:hover {
    transform: none;
    background: var(--clr-pink);
    color: var(--clr-light);
  }
  p {
    font-weight: var(--fw-bold);
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 100%;
  }
  @media (min-width: 880px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    
    .cart-total-text,
    .cart-total-btns {
      width: 25%;
      
    }
  }
`