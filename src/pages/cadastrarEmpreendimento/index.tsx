import {FormularioEmpreendimentos} from "../../components/FormularioEmpreendimentos";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export default function CadastrarEmpreendimento() { 
  const initialData = {  
    _id: "",
    name: "",
    status: "",
    purpose: "",
    ri_number: "",
    address: {
      district: "",
      city: "",
      street: "",
      state: "",
      number: "",
      cep: "",
    } 
  }

  return (
    <Container>
      <Header 
      hasButton 
      text="Cadastro de empreendimento"
      />
      <FormularioEmpreendimentos initialData={initialData} /> 
    </Container>
  );
}