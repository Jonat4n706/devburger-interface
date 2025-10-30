import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { Container, Header, SearchBar, Table} from "./styles";
import { ProductRow } from "./ProductRow";

export function ProductsList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  async function loadProducts() {
    const response = await api.get("/products");
    setProducts(response.data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <Header>
        <p>
          Gerenciar &gt; Produtos &gt; <strong>Listar produtos</strong>
        </p>
        <SearchBar>
          <input
            type="text"
            placeholder="Pesquisar produto"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>
            <i className="ph-magnifying-glass" />
          </button>
        </SearchBar>
      </Header>

      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Produto em oferta</th>
            <th>Imagem do produto</th>
            <th>Editar</th>
          </tr>
        </thead>

        <tbody>
          {filteredProducts.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
