import React, { useContext } from 'react';
import Context from '../Context/context';

function CartWithShipping(props) {

  const { withShipping, isLoading } = useContext(Context);
  const { items, value } = withShipping;

  if (isLoading) return <p>Carregando...</p>
  return (
    <div className="card">
      <div className="cardProduct">
        <h1 className="cardTitle">Meu carrinho</h1>
        {items.map((item) => (
          <div className="cardProductElements">
            <img src={item.imageUrl} alt="imagem produto" />
            <div className="cardProductText">
              <h3>{item.name}</h3>
              <p>{`Quantidade: ${item.quantity}`}</p>
              <p>{`Preço: R$ ${(item.price / 100).toFixed(2)}`}</p>
              <p>{`Preço com desconto: R$ ${(item.price / 100 + item.priceTags[0].value / 100).toFixed(2)}`}</p>
            </div>
            <div className="divider"></div>
          </div>
        ))}
        <section className="cardTotalValue">
          <h1>
            Preço total:
          </h1>
          <h1>
            {`R$ ${(value / 100).toFixed(2)}`}
          </h1>
        </section>
        <button type="button" className="cardButton">Finalizar compra</button>
        <button
        className="buttonGoBack"
        type="button"
        onClick={() => {props.history.push('/')}}
        >
          Voltar
        </button>
      </div>
    </div>
  )
}

export default CartWithShipping;