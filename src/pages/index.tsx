import type { NextPage } from 'next'

import { RiSearch2Line } from 'react-icons/ri';
import { Button } from '../components/Button';


import { CardEmpreendimento } from '../components/CardEmpreendimento'
import { Header } from '../components/Header';
import { Container, Search } from '../styles/home'

const Home: NextPage = () => {
  return (
    <Container>
      
      <Header text="Empreendimentos" >
        <Button text="Adicionar +"/>
      </Header>
      <Search>
        <RiSearch2Line/>
        <input type="text" placeholder="Buscar" />
      </Search>

      <CardEmpreendimento />
      <CardEmpreendimento />
      <CardEmpreendimento />
      <CardEmpreendimento />
      <CardEmpreendimento />

      <Button text="Carregar mais" />


    </Container>
  )
}

export default Home

// hasButton textButton='Adicionar +'