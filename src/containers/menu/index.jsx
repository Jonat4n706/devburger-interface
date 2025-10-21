import { use, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { formatPrice } from "../../utils/formatPrice";

import { Banner, CategoryButtton, CategoryMenu, Container, ProductsContainer } from "./styles";
import { api } from "../../services/api";
import { CardProduct } from "../../components/CardProduct";




export function Menu() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  
  const navigate = useNavigate();

  const {search} = useLocation();

  const queryParams = new URLSearchParams(search);
  
    const [activeCategory, setActiveCategory] = useState(() => {
  const categoryId = +queryParams.get('categoria');

  if (categoryId) {
    return categoryId;
  }
  return 0;
    });

  
  useEffect(() => {
     async function loadCategories() {
      const {data} = await api.get('/categories');

      const newCategories = [{id: 0, name: 'Todos'}, ...data];

      setCategories(newCategories);
      }

      async function loadProducts() {
        const {data} = await api.get('/products');
        
        const newProducts = data.map ((product)=> ({
            currencyValue: formatPrice(product.price),
            ...product,
          }));

          setProducts(newProducts);
      }
      loadCategories();
      loadProducts();
   
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category_id === activeCategory,
      );
      setFilteredProducts(filtered);
    }
  }, [products, activeCategory]);

  return (
    <Container>
     <Banner>
      <h1>O MELHOR 
        <br />
        HAMBURGUER
        <br />
        ESTÁ AQUI!
     <span>Esse cardápio está irresistível!</span>
      </h1>
      
         </Banner>
         
         <CategoryMenu>
          {categories.map(category => (
            <CategoryButtton 
            $isActiveCategory={category.id === activeCategory}
            key= {category.id}
            onClick={() => {
              navigate(
                {
                  pathname: '/cardapio',
                  search: `?categoria=${category.id}`,
                },
              {
                replace: true, 
              },
              );
              setActiveCategory(category.id);
            }}
            
            
            >
              {category.name}
            </CategoryButtton>
          ))}
         </CategoryMenu>
        
        <ProductsContainer>
          {filteredProducts.map(product => (
            <CardProduct product={product} key={product.id} />
          ))}

        </ProductsContainer>
        
       
         </Container>
  );
}

export default Menu;