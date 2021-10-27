import React from 'react';

function Cart(props) {
  return (
    <div className="home">
      <h2>Escolha um carrinho</h2>
      <div className="buttons">
        <button
        type="button"
        className="buttonsHome"
        onClick={() => {props.history.push('/freeShipping')}}
        >
          Com frete gratis
        </button>
        <button
        type="button"
        className="buttonsHome"
        onClick={() => {props.history.push('/withShipping')}}
        >
          Sem frete gratis
        </button>
      </div>
    </div>
  )
}

export default Cart;