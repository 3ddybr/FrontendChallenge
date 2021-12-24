import { Button } from "../../components/Button";
import FormularioEmpreendimentos from "../../components/FormularioEmprendimentos";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export default function Empreendimentonovo() {
  // const { register, handleSubmit, setValue } = useForm();
  // const onRegister = ({ nome, datadeNascimento, cpf, cep, logradouro, bairro, uf })

  return (
    <Container>
      <Header hasButton text="Editar empreendimento"/>
      <FormularioEmpreendimentos/> 
      <Button text="Editar"/>
    </Container>
  );
}