import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCart } from "../../hooks/CartContext";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { Button } from "../Button";
import { Container } from "./styles";

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryTax] = useState(500);  
  const navigate = useNavigate();
  const { cartProducts, clearCart } = useCart();

  useEffect(() => {
    const totalPrice = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);
    setFinalPrice(totalPrice);
  }, [cartProducts]);

  // CartResume.jsx (substitua somente a função submitOrder)
const submitOrder = () => {
  if (cartProducts.length === 0) {
    toast.warn("Seu carrinho está vazio! Adicione produtos antes de finalizar o pedido.", {
      position: "top-right",
      autoClose: 4000,
      theme: "light",
    });
    return;
  }

  // vai para a etapa de endereço & forma de pagamento
  navigate('/finalizar', {
    state: {
      amount: finalPrice + deliveryTax
    }
  });
};

  return (
    <div>
      <Container>
        <div className='container-top'>
          <h2 className='title'>Resumo do Pedido</h2>
          <p className='items'>Itens</p>
          <p className='items-price'>{formatPrice(finalPrice)}</p>
          <p className='delivery-tax'>Taxa de Entrega</p>
          <p className='tax-price'>{formatPrice(deliveryTax)}</p>
        </div>
        <div className='container-bottom'>
          <p>Total</p>
          <p>{formatPrice(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <Button onClick={submitOrder}>Finalizar Pedido</Button>
    </div>
  );
}
