import React, {useContext} from "react";
import {ProductContext} from "../context/productContext";
import Product from "../Component/Product";
import styled from "styled-components";


function ProductList() {

    const {products} = useContext(ProductContext);
    console.log(products)
    return (
        <>
            <ProductListContainer>
                {products.map(product => {
                    return (
                        <Product key={product.id} product={product}/>
                    )
                })}
            </ProductListContainer>

        </>

    )
}

export default ProductList

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 3.5rem;
  justify-items: center;
  
  padding: 3em 1em;
  background: var(--clr-pink-lighter);

  @media (min-width: 880px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1.5rem ;


  }
  @media (min-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (min-width: 1395px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }


`