import { GetServerSideProps } from "next";
import {FormularioEmpreendimentos} from "../../../components/FormularioEmpreendimentos";
import { Header } from "../../../components/Header";
import { api } from "../../../services/api";
import Container  from "./styles";

export default function EditarEmpreendimento({initialData}:any) {
  
  return (
    <Container>
      <Header hasButton text="Editar empreendimento"/>
      <FormularioEmpreendimentos initialData={initialData}/> 
    </Container>
  );
}

export const getServerSideProps:GetServerSideProps = async ({req, params}) => {
    try{
      const response = await api.get(`/enterprises/${params?.id}`)
      return {
        props: {
          initialData: response.data
        }
      }
    }catch(err){
      return {
        redirect:{
          destination: '/',
          permanent: false
        }
      }
    }  
}

