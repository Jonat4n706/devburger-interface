import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import {
  Container,
  Form,
  Header,
  InputGroup,
  ImagePreview,
  SaveButton,
  BackButton,
} from "./styles";
import { ArrowElbowLeftIcon} from "@phosphor-icons/react";

export function EditProducts() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [offer, setOffer] = useState(false);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [categories, setCategories] = useState([]);

  
  useEffect(() => {
    async function loadData() {
      try {
        const [productResponse, categoriesResponse] = await Promise.all([
          api.get(`/products/${id}`),
          api.get("/categories"),
        ]);

        const product = productResponse.data;
        setName(product.name);
        setPrice(product.price / 100);
        setCategoryId(product.category?.id || product.category_id);
        setOffer(product.offer);
        setPreview(product.url);
        setCategories(categoriesResponse.data);
      } catch (err) {
        toast.error("Erro ao carregar produto ou categorias.");
      }
    }
    loadData();
  }, [id]);

  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
      if (!validTypes.includes(file.type)) {
        toast.error("Envie apenas arquivos de imagem (png, jpg, jpeg, webp).");
        return;
      }
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price * 100);
    formData.append("category_id", categoryId);
    formData.append("offer", offer);
    if (image) {
      formData.append("file", image);
    }

    try {
      await api.put(`/products/${id}`, formData);
      toast.success("Produto atualizado com sucesso!");
      navigate("/admin/produtos");
    } catch (error) {
      toast.error("Erro ao atualizar produto. Tente novamente.");
    }
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate("/admin/produtos")}>
          <ArrowElbowLeftIcon size={20} weight="bold" />
          Voltar
        </BackButton>

        <h2>Editar Produto</h2>
        <p>Atualize as informações do produto abaixo</p>
      </Header>

      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <label>Nome do produto</label>
          <input
            type="text"
            value={name}
            placeholder="Ex: X-Burger"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </InputGroup>

        <InputGroup>
          <label>Preço (R$)</label>
          <input
            type="number"
            min="0"
            step="0.01"
            value={price}
            placeholder="Ex: 29.90"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </InputGroup>

        <InputGroup>
          <label>Categoria</label>
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            required
          >
            <option value="">Selecione uma categoria</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </InputGroup>

        <InputGroup className="checkbox">
          <label>
            <input
              type="checkbox"
              checked={offer}
              onChange={(e) => setOffer(e.target.checked)}
            />
            Produto em oferta
          </label>
        </InputGroup>

        <InputGroup>
          <label>Imagem do produto</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {preview && <ImagePreview src={preview} alt="Prévia da imagem" />}
        </InputGroup>

        <SaveButton type="submit">Salvar Alterações</SaveButton>
      </Form>
    </Container>
  );
}
