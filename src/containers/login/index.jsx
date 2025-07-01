import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import * as yup from "yup"
import { api } from "../../services/api"


import {
  Container,
  Form,
  Input,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title
} from "./styles"

import Logo from "../../assets/logo.svg"

import { Button } from "../../components/Button";

export function Login() {
  const schema = yup
    .object({
      email: yup.string().email('Digite um email válido').required('E-mail é obrigatório'),
      password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória'),
    })
    .required();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async(data) => {
    const response = await toast.promise(
      api.post('/sessions', {
      email: data.email,
      password: data.password,
    }), {
      pending: 'Fazendo login...',
      success: 'Login realizado com sucesso!',
      error: 'Email ou senha inválidos!'
    }); 
    
    
    api.post('/sessions', {
      email: data.email,
      password: data.password,
    });

    console.log(response);
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburguer"></img>
      </LeftContainer>
      <RightContainer>
        <Title>Olá, seja bem vindo ao <span>Dev Burguer!</span>
          <br />
          Acesse com seu
          <span> Login e senha.</span></Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <Input type="email"  {...register("email")} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <Input type="password"  {...register("password")} />
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <Button type="submit">Entrar</Button>
        </Form>
        <p>Não tem uma conta? <a>Clique aqui</a></p>
      </RightContainer>
    </Container>
  )
}