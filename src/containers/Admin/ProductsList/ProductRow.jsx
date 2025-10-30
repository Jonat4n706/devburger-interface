import { useState } from "react";
import { TableRowStyled, ProductImage, OfferCheckbox } from "./styles";
import { PencilSimpleIcon } from "@phosphor-icons/react/dist/ssr";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../../utils/formatPrice.js";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

export function ProductRow({ product }) {
  const navigate = useNavigate();
  const [isOffer, setIsOffer] = useState(product.offer);

  const handleOfferToggle = async () => {
    try {
      const newOfferStatus = !isOffer;
      setIsOffer(newOfferStatus);

      await api.put(`/products/${product.id}`, { offer: newOfferStatus });

      if (newOfferStatus) {
        toast.success(`${product.name} agora está em oferta!`);
      } else {
        toast.info(`${product.name} foi removido das ofertas.`);
      }
    } catch (error) {
      console.error("Erro ao atualizar oferta:", error);
      toast.error("Erro ao atualizar o status de oferta!");
      setIsOffer(product.offer); // reverte o estado se der erro
    }
  };

  return (
    <TableRowStyled>
      <td>{product.name}</td>
      <td>{formatPrice(product.price)}</td>
      <td>
        <OfferCheckbox
          checked={isOffer}
          onChange={handleOfferToggle}
        />
      </td>
      <td>
        <ProductImage src={product.url} alt={product.name} />
      </td>
      <td>
        <button onClick={() => navigate(`/admin/editar-produto/${product.id}`)}>
          <PencilSimpleIcon size={20} color="#333" />
        </button>
      </td>
    </TableRowStyled>
  );
}
