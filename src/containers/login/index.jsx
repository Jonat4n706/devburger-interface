import { Button, 
    Container, 
    Form, 
    Input, 
    InputContainer, 
    LeftContainer, 
    Link, 
    RightContainer, 
    Title } from "./styles"
import Logo from "../../assets/logo.svg"


export function Login(){
    
    return(
        <Container>
            <LeftContainer>
                <img src={Logo} alt= "logo-devburguer"></img>
            </LeftContainer>
            <RightContainer>
                <Title>Olá, seja bem vindo ao <span>Dev Burguer!</span>Acesse com seu 
                <span>Login e senha.</span></Title>
                <Form>
                    <InputContainer>
                   <label>Entrar</label>
                    <Input type="email" placeholder="Digite seu login" />
                    </InputContainer>
                    
                    <InputContainer>
                    <label>Senha</label>
                    <Input type="password" placeholder="Digite sua senha" />
                    </InputContainer>
                  
                    
                    <Button>Entrar</Button>
                </Form>
            <Link>Não tem uma conta? Clique aqui</Link>
            </RightContainer>
        </Container>
    )
}