import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'

import { Button } from '../components/Button';
import { CardEmpreendimento } from '../components/CardEmpreendimento'
import { Header } from '../components/Header';
import { Container, Search } from '../styles/home'

import { RiSearch2Line } from 'react-icons/ri';
import React, { useCallback, useEffect, useState } from 'react';
import { api } from '../services/api';

export interface Address {
  district: string;
  city: string;
  street: string;
  state: string;
  number: string;
  cep: string;
}

export interface EnterpriseItensProps{
  _id: string;
  name: string;
  status: string;
  purpose: string;
  ri_number: string;
  address: Address;
}


const Home: NextPage = ({enterprises}:any) => {
  const [data, setData] = useState<EnterpriseItensProps[]>(enterprises)
  const [searchData, setSearchData] = useState<EnterpriseItensProps[]>(enterprises)
  const [handleSearch, setHandleSearch] = useState('')

  const [page, setPage] = useState(1);  //qual pagina estou
  const [enterprisePerPages, setEnterprisePerPages] = useState(10);

  
  useEffect(() => {
    setPage(enterprisePerPages)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  } ,[])

  useEffect(() => {
      if(handleSearch !== ""){
      const dadosFilter = data.filter((data)=> {
        const responseFilter= data.name.toLowerCase().search(handleSearch.toLowerCase())
        return responseFilter !== -1 
      })
      setSearchData(dadosFilter)
    }else{
      setSearchData(data)
    }
  } , [handleSearch, data])

  // eslint-disable-next-line react/display-name
  const  ButtonNext  =  React.forwardRef ( ( { children , ... rest  }, ref  )  =>  ( 
    <span  > 
      <Button text="Adicionar +" {...rest} > { children } </Button> 
    </span> 
  ) ) ;
  //Fim Solucao para bug do next/link
  const handleDeleteEnterprise = useCallback(async (_id: string) =>{
    try{
      if(window.confirm("Deseja realmente excluir?")){
        await api.delete(`/enterprises/${_id}`)
        setData(prevState => prevState.filter(enterprise => enterprise._id !== _id))
      }
    }catch(err){
      console.log(err)
    }
    },[])

    const indexOfLastPost = enterprisePerPages;
    const indexOfFirstPost = indexOfLastPost - enterprisePerPages;
    const currentPosts = searchData.slice(indexOfFirstPost, indexOfLastPost);

    function handlePagination(){
      if(enterprisePerPages > data.length){
        alert("Todos os empreendimentos foram exibidos")
      }else{
      setEnterprisePerPages(enterprisePerPages + page);
      console.log(enterprisePerPages)

      console.log(data.length)
      }
    }  
    
  return (
    <Container>      
      <Header text="Empreendimentos" >
        <Link href="/cadastrarEmpreendimento"
        passHref> 
          <ButtonNext/>
        </Link>        
      </Header>

      <Search>
        <RiSearch2Line/>
        <input type="text" placeholder="Buscar" value={handleSearch} onChange={(ev) => setHandleSearch(ev.target.value)}/>
      </Search>

      {currentPosts.map((empreend:EnterpriseItensProps) =>{
        return(
          <CardEmpreendimento onDelete={handleDeleteEnterprise} key={empreend._id} item={empreend} />
        )
      })}
      <Button onClick={handlePagination} text="Carregar mais" />
    </Container>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  const responseEnterprise = await api.get("/enterprises")
  return {
    props: {
      enterprises: responseEnterprise.data
    }
  }
}
export default Home;