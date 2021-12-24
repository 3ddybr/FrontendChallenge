import type { NextPage } from 'next'
import Link from 'next/link'

import { RiSearch2Line } from 'react-icons/ri';
import { Button } from '../components/Button';


import { CardEmpreendimento } from '../components/CardEmpreendimento'
import { Header } from '../components/Header';
import { Container, Search } from '../styles/home'

const Home: NextPage = () => {
  return (
    <Container>
      
      <Header text="Empreendimentos" >
        <Link href="/empreendimentonovo"
        passHref>
          <Button text="Adicionar +">
            {/* <Link href="/empreendimento-novo"/> */}
          </Button>
        </Link>        
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