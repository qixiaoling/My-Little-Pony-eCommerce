import React, {useContext} from 'react';
import styled from "styled-components";
import {ProductContext} from "../context/productContext";
import {Link as LinkR} from "react-router-dom";

function Modal() {
    const {modalProduct, modalOpen, closeModal} = useContext(ProductContext);

    return (
        <>
            {modalOpen ?
                <ModalContainer>
                    <div className='modal-container'>
                        <h4>Item added to Cart</h4>
                        <img src={modalProduct.img} alt={modalProduct.title} className='modal-img'/>
                        <p className='modal-title'><strong>{modalProduct.title}</strong></p>
                        <p className='modal-price'>${modalProduct.price}</p>
                        <LinkR to='/products'>
                            <button onClick={()=>closeModal()} className='btn btn-modal '>
                                Continue Shopping
                            </button>
                        </LinkR>
                        <LinkR to='/cart'>
                            <button onClick={()=>closeModal()} className='btn btn-modal'>
                               Go to Cart
                            </button>
                        </LinkR>
                    </div>
                </ModalContainer>
                :
                <></>

            }
        </>

    )
}
export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5 );
  display: grid; /*new!!!*/
  place-items: center;
  
  .modal-container {
    background: var(--clr-light-background);
    width: 60%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 2rem 3rem;
  }
  .modal-container > *:not(:last-child) {
    margin: 0; /* %%1-first remove all the margin*/
    display: block;
    margin-bottom: 0.75rem;/*  %%2-then add 0.75rem to every child but not the last child*/
  }
  .modal-img {
    width: 80%;
    background-size: cover;
    background-position: center;
  }
  
  @media (min-width: 880px) {
    .modal-container {
      width: 50%;
    }
  }
  @media (min-width: 960px) {
    .modal-container {
      width: 45%;
    }
  }
  @media (min-width: 1200px) {
    .modal-container {
      width: 30%;
    }
  }

  
  .btn-modal {
    border: 1px solid var(--clr-blue);
    color: var(--clr-blue);
    background: transparent;
    font-weight: var(--fw-reg);
    font-size: var(--fs-body);
    border-radius: var(--radius);
    padding: 0.25rem 0.85rem;
  }
  .btn-modal:hover {
    background: var(--clr-blue);
    color: var(--clr-light);
    transform: none;
  }
  
`