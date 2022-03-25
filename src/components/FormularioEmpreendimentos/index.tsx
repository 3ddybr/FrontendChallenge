
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { apiCep } from "../../services/apiCep";
import { Button } from "../Button";
import {useRouter } from "next/router";
import { api } from "../../services/api";
import { useCallback} from "react";

import {Formulario} from "./styles";
interface CepProps {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  siafi: string;
  uf: string;
}
interface Address {
  district: string;
  city: string;
  street: string;
  state: string;
  number: string;
  cep: string;
}
interface FormularioProps{
  _id: string;
  name: string;
  status: string;
  purpose: string;
  ri_number: string;
  address: Address;
}
interface PropsForm{
  initialData?: FormularioProps;
}

const schema = yup.object().shape({  
  name: yup.string().required('Nome é obrigatório'),
  status: yup.string().required('Situação é obrigatório'),
  purpose: yup.string().required('Tipo de locação é obrigatório'),
  // ri_number: yup.string().required('Número do RI é obrigatório'),
  address: yup.object().shape({
    district: yup.string().required('Bairro é obrigatório'),
    city: yup.string().required('Cidade é obrigatório'),
    street: yup.string().required('Logradouro é obrigatório'),
    state: yup.string().required('Estado é obrigatório'),
    number: yup.string().required('Número é obrigatório'),
    cep: yup.string().required('CEP é obrigatório'),
  }),
})


export function FormularioEmpreendimentos ({initialData}:PropsForm) {
  const {register, handleSubmit, control, formState:{errors} , setValue} =useForm({
    resolver: yupResolver(schema),
    defaultValues: initialData
  })
  const router= useRouter()

  const handleCreateNewEmpreendimento = useCallback( async (data: FormularioProps) =>{
    try{
      if(data?._id){
        await api.put(`/enterprises/${data._id}`, data)
      }else{
        const createData = {
          ...data,
          ri_number: String(Math.random()),
        }
        await api.post('/enterprises', createData)
      }
      router.push("/")      
    }catch(err){
      console.log('Erro do post ',err)
    }    
  }, [router])

  const handleFetchAddress = async (cepUser: string) => {    
    if (cepUser.length === 8) {
      const res = await apiCep.get<CepProps>(`${cepUser}/json/`);
      const retorno:CepProps = res.data
      setValue('address.district', res.data.bairro);
      setValue('address.city', res.data.localidade); 
      setValue('address.street', res.data.logradouro);
      setValue('address.state', res.data.uf);
    }
  }
  const onChangeCep = (cepUser:string) => {
    handleFetchAddress(cepUser);
  }

  return (
    <>    
    <Formulario onSubmit={handleSubmit(handleCreateNewEmpreendimento)}>
      <h2>Informações</h2>
        <select {...register("status")} >
          <option value="SHORT_RELEASE">Breve lançamento</option>
          <option value="RELEASE">Lançamento</option>
          <option value="IN_WORKS">Em obras</option>
          <option value="READY_TO_MOVE_IN">Pronto pra morar</option>
        </select>
        
        <input id="name" {...register("name")} placeholder="Nome do empreendimento"/>
        <p>{errors.name?.message}</p>

        <select id="purpose" {...register("purpose")}>
          <option value="HOME">Residencial</option>
          <option value="COMMERCIAL">Comercial</option>
        </select>

        <input id="cep" type="number" {...register("address.cep")}placeholder="Cep (somente números)"
          onChange={(e) => onChangeCep(e.target.value)}
        />
        <p>{errors.address?.cep?.message}</p>

        <input id="text" {...register("address.street")} placeholder="Rua" />
        <p>{errors.address?.street?.message}</p>
        <input id="text" {...register("address.district")} placeholder="Bairro" />
        <p>{errors.address?.district?.message}</p>
        <input id="text" {...register("address.city")} placeholder="Cidade" />
        <p>{errors.address?.city?.message}</p>
        <input id="text" {...register("address.state")} placeholder="UF" />
        <p>{errors.address?.state?.message}</p>

        <input id="number" {...register("address.number")} placeholder="Número"/>
        <p>{errors.address?.number?.message}</p>
        
      <Button type="submit" text={initialData?._id ? "Editar" : "Cadastrar"}/>
    </Formulario>

    </>
    )
}