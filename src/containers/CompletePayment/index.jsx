import { useEffect, useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"; 
import CircularProgress from "@mui/material/CircularProgress"; 
import Logo from "../../assets/logo.svg";
import {
  Container,
  Content,
  LogoImg,
  Icon,
  Title,
  Subtitle,
  Button,
} from "./styles";

export function CompletePayment() {
  const stripe = useStripe();
  const navigate = useNavigate();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (!stripe) return;

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      setStatus("default");
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      if (!paymentIntent) {
        setStatus("default");
        return;
      }
      setStatus(paymentIntent.status);
    });
  }, [stripe]);

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <Container>
      <Content>
        <LogoImg src={Logo} alt="DevBurguer" />

        <Icon>
          {status === "succeeded" ? (
            <CheckCircleOutlineIcon style={{ fontSize: 60, color: "#fff" }} />
          ) : (
            <CircularProgress size={60} style={{ color: "#fff" }} />
          )}
        </Icon>

        {status === "succeeded" ? (
          <>
            <Title>Pedido realizado com sucesso!</Title>
            <Subtitle>Seu pagamento foi confirmado.</Subtitle>
          </>
        ) : (
          <>
            <Title>Processando pagamento...</Title>
            <Subtitle>Isso pode levar alguns segundos.</Subtitle>
          </>
        )}

        <Button onClick={handleRedirect}>Voltar ao início</Button>
      </Content>
    </Container>
  );
}
