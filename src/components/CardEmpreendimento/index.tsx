import Link from 'next/link';
import { RiDeleteBin7Line, RiEditLine } from 'react-icons/ri';
import { Container, Top, Content } from './styles'

interface CardEmpreendimentoProps {
  _id?: string;
  name: string;
  status: string;
  purpose: string;
  ri_number?: string;
  address: {
    district: string;
    city: string;
    street: string;
    state?: string;
    number: string;
    cep?: string;
  };
}

export function CardEmpreendimento({ name, status, purpose, address }:CardEmpreendimentoProps) {   
  return (
    <Container>      
      <Top>
        <div>
          <h2>{name}</h2>
          <div>
            <Link href="/editarEmpreendimento"
              passHref>
            <button><RiEditLine/></button>
            </Link>
            <button><RiDeleteBin7Line/></button>

          </div>
        </div>
        <div>
          <p>{status}</p>  
          <p>{purpose}</p>
        </div>
      </Top>

      <Content>
        <p>{address.street}, {address.number} - {address.city}</p>
      </Content>
    </Container>
  )
}

