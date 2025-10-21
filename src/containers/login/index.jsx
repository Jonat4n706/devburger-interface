import { yupResolver } from "@hookform/resolvers/yup"
import { set, useForm } from "react-hook-form"
import { toast } from "react-toastify"
import * as yup from "yup"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { useUser } from "../../hooks/UserContext"

import {
  Container,
  Form,
  Input,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
  Link
} from "./styles"

import Logo from "../../assets/logo.svg"

import { Button } from "../../components/Button";

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();
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

const onSubmit = async (data) => {
  try {
    const {
      data: { user, accessToken },
    } = await api.post('/sessions', {
      email: data.email,
      password: data.password,
    });

    // 👉 Primeiro salva o token
    localStorage.setItem('token', accessToken);

    // 👉 Depois mostra o toast e redireciona
    putUserData(user);
    
    toast.success('Login realizado com sucesso!');

    setTimeout(() => {
      if(user?.admin) {
        navigate('/admin/pedidos');
        
      } else {
        navigate('/');
      }
    }, 2000); // Aguarda 2 segundos para redirecionar
  } catch (error) {
    toast.error('Email ou senha inválidos!');
  }
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
        <p>Não tem uma conta? <Link to="/cadastro">Clique aqui</Link></p>
      </RightContainer>
    </Container>
  )
}