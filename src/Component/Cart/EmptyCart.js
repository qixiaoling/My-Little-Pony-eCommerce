import React from 'react';
import styled from "styled-components";

function EmptyCart() {
    return(
        <EmptyCartContainer>
            <h3>Your Cart is Empty</h3>
        </EmptyCartContainer>
    )
}
export default EmptyCart;


const EmptyCartContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`