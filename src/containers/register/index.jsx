import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import * as yup from "yup"

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
  Title
} from "./styles"



export function Register() {
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
    const response = await toast.promise(
      api.post('/users', {
        name: data.name,
        email: data.email,
        password: data.password,
      }), {
      pending: 'Verificando dados...',
      success: 'Cadastro realizado com sucesso!',
      error: 'Erro ao cadastrar, verifique os dados informados.',
    });


    api.post('/users', {
      name: data.name,
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
        <p>Já possui conta? <a>Clique aqui</a></p>
      </RightContainer>
    </Container>
  )
}