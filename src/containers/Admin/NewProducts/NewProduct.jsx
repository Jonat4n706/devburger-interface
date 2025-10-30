import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../../services/api";
import {
  Container,
  Form,
  Input,
  Select,
  Button,
  UploadLabel,
  PreviewImage,
} from "./styles";

export function NewProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("/categories");
      setCategories(data);
    }
    loadCategories();
  }, []);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name || !price || !categoryId || !file) {
      toast.error("Preencha todos os campos e envie uma imagem!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", Number(price * 100));
      formData.append("category_id", categoryId);
      formData.append("file", file);

      await api.post("/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Produto cadastrado com sucesso!");
      setName("");
      setPrice("");
      setCategoryId("");
      setFile(null);
      setPreview(null);
    } catch (error) {
      toast.error("Erro ao cadastrar produto!");
    }
  }

  return (
    <Container>
      <p>
        Gerenciar &gt; <strong>Cadastrar produto</strong>
      </p>

      <Form onSubmit={handleSubmit}>
        <label>Nome</label>
        <Input
          type="text"
          placeholder="Digite o nome do produto"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />

        <label>Preço</label>
        <Input
        type="number"
        placeholder="Digite o preço"
        min="0"                
        step="0.01"          
        onChange={(e) => setPrice(e.target.value)}
        value={price}
         />


        <label>Categoria</label>
        <Select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="">Selecione a categoria</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </Select>

        <label>Imagem do Produto</label>
        <UploadLabel>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {preview ? (
            <PreviewImage src={preview} alt="Preview do produto" />
          ) : (
            <span>Escolher imagem</span>
          )}
        </UploadLabel>

        <Button type="submit">Adicionar produto</Button>
      </Form>
    </Container>
  );
}
