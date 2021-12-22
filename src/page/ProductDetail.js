import React, {useContext} from 'react';
import styled from "styled-components";
import {ProductContext} from "../context/productContext";
import {Link as LinkR } from 'react-router-dom';

function ProductDetail(){
    const {detailProduct, addToCart, openModal} = useContext(ProductContext);
    return(
        <ProductDetailContainer>
            <div className='product-detail-content'>
                <div className='detail-img'>
                    <img src={detailProduct.img} alt={detailProduct.title}/>
                </div>
                <div className='detail-info'>
                    <h3>{detailProduct.title}</h3>
                    <p className='detail-price'>${detailProduct.price}</p>
                    <p>{detailProduct.info}</p>
                    <div className='detail-btn-wrapper'>
                        <LinkR to='/products'>
                            <button className='btn btn-detail'>
                                Back to products
                            </button>
                        </LinkR>
                        <button
                            disabled={detailProduct.inCart? true : false}

                            onClick={()=>{
                                addToCart(detailProduct.id);
                                openModal(detailProduct.id);
                            }}

                            className='btn btn-detail btn-cart'

                        >
                            {detailProduct.inCart ? 'In Cart' : 'Add to Cart '}
                        </button>
                    </div>

                </div>
            </div>

        </ProductDetailContainer>

    )
}
export default ProductDetail

const ProductDetailContainer = styled.div`
  width: 100%;
  padding: 2rem 3rem;
  
  .product-detail-content {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: center;
  }
  .detail-price {
    font-weight: var(--fw-bold);
  }
  .btn-detail {
    background: var(--clr-blue);
    color:var(--clr-light);
    padding: 0.5rem 1.25rem;
    border-radius: var(--radius);
    font-weight: var(--fw-reg);
    font-size: 0.85rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    border: 1px solid var(--clr-blue);
    letter-spacing: 1px;
  }
  .btn-detail:hover {
    transform: none;
    background: var(--clr-light);
    color: var(--clr-blue);
  }
  .btn-cart {
    background: transparent;
    border: var(--clr-pink);
    color: var(--clr-pink);
    border: 1px solid var(--clr-pink);
  }
  .btn-cart:hover {
    transform: none;
    background: var(--clr-pink);
    color: var(--clr-light);
  }
  
  @media (min-width: 880px) {
    .product-detail-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-content: center;
    }
    .detail-img {
      width: 45%;
      display: grid;
      place-items: center;
      
    }
    .detail-img img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
    .detail-info {
      width: 45%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
    }
  }
  

`