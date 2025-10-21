import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import * as yup from "yup"
import { useNavigate } from "react-router-dom"

import Logo from "../../assets/logo.svg"
import { Button } from "../../components/Button";
import { api } from "../../services/api"
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



export function Register() {
  const navigate = useNavigate();
  const schema = yup
    .object({
      name: yup
      .string()
      .required('Nome é obrigatório'),
      email: yup
      .string()
      .email('Digite um email válido')
      .required('E-mail é obrigatório'),
      password: yup
      .string()
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
      .required('Senha é obrigatória'),
      confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
      .required('Confirmação de senha é obrigatória'),
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
      const response = await api.post('/users', {
        name: data.name,
        email: data.email,
        password: data.password,
      },
      {
        validateStatus: () => true,
      }, // Permite capturar erros de validação do backend, como email já cadastrado
      
  );
      if (response.status === 200 || response.status === 201) {
        setTimeout(() => {
          navigate('/login');
        }, 2000);
        toast.success('Conta criada com sucesso!');
      } else if (response.status === 400) {
        toast.error('Email já cadastrado!');
      } else {
        throw new Error();
      }
     
    } catch (error) {
      toast.error('Falha no Sistema, tente novamente mais tarde!');
           
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburguer"></img>
      </LeftContainer>
      <RightContainer>
        <Title>Crie Conta</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
           <InputContainer>
            <label>Nome</label>
            <Input type="text"  {...register("name")} />
            <p>{errors?.name?.message}</p>
          </InputContainer>
         
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

           <InputContainer>
            <label>Confirmar Senha</label>
            <Input type="password"  {...register("confirmPassword")} />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>

          <Button type="submit">Criar Conta</Button>
        </Form>
        <p>Já possui conta? <Link to="/login">Clique aqui</Link></p>
      </RightContainer>
    </Container>
  )
}