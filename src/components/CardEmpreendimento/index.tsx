import Link from 'next/link';
import { RiDeleteBin7Line, RiEditLine } from 'react-icons/ri';
import { Container, Top, Content } from './styles'

interface CardEmpreendimentoProps {
  item:{
    _id: string;
    name: string;
    status: string;
    purpose: string;
    ri_number: string;
    address: {
      district: string;
      city: string;
      street: string;
      state: string;
      number: string;
      cep: string;
    };
  }
  onDelete: (_id:string) => Promise<void>;
}

export function CardEmpreendimento({item , onDelete}:CardEmpreendimentoProps) {   
  const { _id, name, status, purpose, address} = item;
  return (
    <Container>      
      <Top>
        <div>
          <h2>{name}</h2>
          <div>
            <Link href={`/editarEmpreendimento/${_id}`}
              passHref>
            <button><RiEditLine/></button>
            </Link>
            <button onClick={() =>onDelete(_id)}><RiDeleteBin7Line/></button>
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

