import { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";
import { useCart } from "../../../hooks/CartContext";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

export default function CheckoutForm() {
  const { cartProducts, clearCart } = useCart();
  const navigate = useNavigate();
  
  const stripe = useStripe();
  const elements = useElements();
  const { state: { clientSecret } } = useLocation();  

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.error("Stripe ou Elements com falha, tente novamente.");
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/complete`,
      },
      redirect: "if_required",
    });

    // Corrigido: lógica estava dentro do bloco de erro
    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message);
      } else {
        setMessage("Ocorreu um erro inesperado.");
      }
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      // Pagamento confirmado com sucesso
      try {
        const products = cartProducts.map((product) => {
          return {
            id: product.id, 
            quantity: product.quantity, 
            price: product.price
          };
        });

        const { status } = await api.post(
          '/orders', 
          { products }, 
          {
            validateStatus: () => true,
          }
        );

        if (status === 200 || status === 201) {
          toast.success('Pedido realizado com sucesso!');
          clearCart();
          setTimeout(() => {
            navigate(`/complete-payment?payment_intent_client_secret=${clientSecret}`);
          }, 2000);
        } else if (status === 400) {
          toast.error('Falha ao realizar o pedido.');
        } else {
          throw new Error();
        }
      } catch (error) {
       navigate(
        `/complete-payment?payment_intent_client_secret=${clientSecret}`
      );
      }
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "accordion"
  };

  return (
    <div className="container">
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button 
          disabled={isLoading || !stripe || !elements} 
          id="submit" 
          className="button"
        >
          <span id="button-text">
            {isLoading ? <div className="spinner" id="spinner"></div> : "Pagar agora"}
          </span>
        </button>
        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
}