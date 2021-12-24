import { Button } from "../../components/Button";
import FormularioEmpreendimentos from "../../components/FormularioEmprendimentos";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export default function CadastrarEmpreendimento() {
  // const { register, handleSubmit, setValue } = useForm();
  // const onRegister = ({ nome, datadeNascimento, cpf, cep, logradouro, bairro, uf })

  return (
    <Container>
      <Header hasButton text="Cadastro de empreendimento"/>
      <FormularioEmpreendimentos/> 
      <Button text="Cadastrar"/>
    </Container>
  );
}