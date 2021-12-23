import React, {useContext, useState, useEffect} from 'react';
import {ProductContext} from "../../context/productContext";
import EmptyCart from "./EmptyCart";
import styled from "styled-components";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

function Cart() {
    const [size, setSize] = useState(window.innerWidth);
    const {cart} = useContext(ProductContext);
    console.log(cart)

    const checkSize = () => {
        setSize(window.innerWidth);
    }

    useEffect(()=>{
        console.log('useEffect' + size);
        window.addEventListener('resize', checkSize);
        return ()=>{
            console.log('cleanup' + size);
            window.removeEventListener('resize', checkSize);
        }
    })
    return (
        <>
            {cart.length > 0 ?
                <CartContainer>
                    <h2>Your Cart</h2>
                    <table>
                        {size > '880' ? <>
                                <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Description</th>
                                    <th>Unit price</th>
                                    <th>Quantity</th>
                                    <th>Option</th>
                                </tr>
                                </thead>
                            </>
                            :
                            <>
                            </>
                        }
                        <tbody>
                        {cart.map((cartItem) => {
                            return (
                                <tr key={cartItem.id}
                                    className='cart-item-container'
                                >
                                    <CartItem cartItem={cartItem}/>
                                </tr>
                            )
                        })}
                        </tbody>


                    </table>


                    <CartTotals/>
                </CartContainer>
                :
                <EmptyCart/>

            }
        </>

    )
}

export default Cart;

const CartContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  table {
    width: 100%;
    height: auto;
    text-align: center;
    border-collapse: separate;/* $$1 since it's a table, cannot simply give margin. instead do this*/
    border-spacing: 0 1em;/* $$2 since it's a table, cannot simply give margin. instead do this*/
  }
 
  @media(min-width: 880px){
    width: 75%;
  }
  
`