import { CategoriesCarousel } from "../../components/CategoriesCarousel";
import { OffersCarousel } from "../../components/OffersCarousel";
import { Banner, Container} from "./styles";

export function Home() {
  return (
    <main>
     <Banner>
      <h1>Bem-Vindo(a)!</h1>
         </Banner>
         <Container>
          
          <CategoriesCarousel />
           <OffersCarousel />
          
         </Container>
         </main>
  );
}

export default Home;