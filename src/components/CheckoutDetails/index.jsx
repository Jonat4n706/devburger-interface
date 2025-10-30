import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { Container, Form, Row, Column, RadioGroup, Actions } from "./styles";
import { formatPrice } from "../../utils/formatPrice";
import { Button } from "../../components/Button";
import { useCart } from "../../hooks/CartContext";

export function CheckoutDetails() {
    const navigate = useNavigate();
    const { state } = useLocation() || {};
    const amount = state?.amount || 0;

    const { cartProducts } = useCart();

    const [paymentMethod, setPaymentMethod] = useState("card"); // "card" | "pix"
    const [address, setAddress] = useState({
        name: "",
        phone: "",
        zip: "",
        street: "",
        number: "",
        complement: "",
        neighborhood: "",
        city: "",
        state: "",
    });

    useEffect(() => {
        // bloqueia acesso direto sem carrinho/amount
        if (!amount || cartProducts.length === 0) {
            navigate("/carrinho");
        }
    }, [amount, cartProducts, navigate]);

    function onChange(field, value) {
        setAddress(prev => ({ ...prev, [field]: value }));
    }

    async function handleContinue() {
        // Validação simples
        if (!address.name || !address.phone || !address.zip || !address.street || !address.number || !address.city || !address.state) {
            toast.warn("Preencha os campos obrigatórios (*) do endereço.");
            return;
        }

        try {
            const { data } = await api.post("/create-payment-intent", {
                amount,
                paymentMethod,     // "card" ou "pix"
                address            // opcional: vai para metadata/shipping
            });

            navigate("/checkout", { state: data }); // { clientSecret }
        } catch (err) {
            toast.error("Erro ao iniciar o pagamento. Tente novamente.");
        }
    }

    return (
        <Container>
            <h1>Finalizar Pedido</h1>

            <Form>
                <h2>Endereço de entrega</h2>

                <Row>
                    <Column>
                        <label>Nome *</label>
                        <input value={address.name} onChange={e => onChange("name", e.target.value)} />
                    </Column>
                    <Column>
                        <label>Telefone *</label>
                        <input value={address.phone} onChange={e => onChange("phone", e.target.value)} />
                    </Column>
                </Row>

                <Row>
                    <Column>
                        <label>CEP *</label>
                        <input value={address.zip} onChange={e => onChange("zip", e.target.value)} />
                    </Column>
                    <Column>
                        <label>Rua *</label>
                        <input value={address.street} onChange={e => onChange("street", e.target.value)} />
                    </Column>
                </Row>

                <Row>
                    <Column>
                        <label>Número *</label>
                        <input value={address.number} onChange={e => onChange("number", e.target.value)} />
                    </Column>
                    <Column>
                        <label>Complemento</label>
                        <input value={address.complement} onChange={e => onChange("complement", e.target.value)} />
                    </Column>
                </Row>

                <Row>
                    <Column>
                        <label>Bairro</label>
                        <input value={address.neighborhood} onChange={e => onChange("neighborhood", e.target.value)} />
                    </Column>
                    <Column>
                        <label>Cidade *</label>
                        <input value={address.city} onChange={e => onChange("city", e.target.value)} />
                    </Column>
                    <Column>
                        <label>UF *</label>
                        <input value={address.state} onChange={e => onChange("state", e.target.value)} maxLength={2} />
                    </Column>
                </Row>

                <h2>Forma de Pagamento</h2>
                <RadioGroup>
                    <label>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="card"
                            checked={paymentMethod === "card"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        💳 Cartão de Crédito / Débito
                    </label>

                    {/* PIX desativado temporariamente */}
                    {/* 
  <label>
    <input
      type="radio"
      name="paymentMethod"
      value="pix"
      checked={paymentMethod === "pix"}
      onChange={(e) => setPaymentMethod(e.target.value)}
    />
    ⚡ PIX
  </label>
  */}
                </RadioGroup>


                <Actions>
                    <span>Total: <strong>{formatPrice(amount)}</strong></span>
                    <div>
                        <Button type="button" onClick={() => navigate("/carrinho")}>Voltar</Button>
                        <Button type="button" onClick={handleContinue}>Continuar</Button>
                    </div>
                </Actions>
            </Form>
        </Container>
    );
}
