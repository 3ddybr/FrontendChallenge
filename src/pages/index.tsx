import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import {api} from '../services/api';

import { Button } from '../components/Button';
import { CardEmpreendimento } from '../components/CardEmpreendimento'
import { Header } from '../components/Header';
import { Container, Search } from '../styles/home'

import { RiSearch2Line } from 'react-icons/ri';
import React from 'react';

interface DataProps{
  _id: string;
  name: string;
  status: string;
  purpose: string;
  address: {
    district: string;
    city: string;
    street: string;
    number: string;
  }
}


const Home: NextPage = () => {
  const [empreend, setEmpreend] = useState<DataProps[]>([]);

  useEffect(() => {
    api.get('/enterprises').then((res) => {
      setEmpreend(res.data);
      // console.log(res.data);
    })
  }, [])

  //Solucao para bug do next/link
  // eslint-disable-next-line react/display-name
  const  ButtonNext  =  React.forwardRef ( ( { children , ... rest  } ,  ref )  =>  ( 
    <span  > 
      <Button  text="Adicionar +" {...rest} > { children } </Button> 
    </span> 
  ) ) ;
  //Fim Solucao para bug do next/link

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
        <input type="text" placeholder="Buscar" />
      </Search>

      {empreend.map((empreend) =>{
        return(
          <CardEmpreendimento key={empreend._id} name={empreend.name} status={empreend.status} purpose={empreend.purpose} address={empreend.address} />
        )
      })}
      <Button text="Carregar mais" />
    </Container>
  )
}

export default Home

// hasButton textButton='Adicionar +'