import Logo from '../../assets/logo.svg'
import { CartItems } from '../../components/CartItems';
import { CartResume } from '../../components/CartResume';

import { Banner, Container, ContentCart, Title } from './styles';

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={Logo} alt='logo devburger'/>
      </Banner>
        <Title>Meu carrinho</Title>
          <ContentCart>
           <CartItems />
          <CartResume/> 
          </ContentCart>
    </Container>
  );
}