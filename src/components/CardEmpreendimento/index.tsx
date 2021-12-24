import { RiDeleteBin7Line, RiEditLine } from 'react-icons/ri';
import { Container, Top, Content } from './styles'

export function CardEmpreendimento () {   
  return (
    <Container>      
      <Top>
        <div>
          <h2>Villega Vila Velha</h2>
          <div>
            <button><RiEditLine/></button>
            <button><RiDeleteBin7Line/></button>

          </div>
        </div>
        <div>
          <p>Lançamento</p>
          <p>Residencial</p>
        </div>
      </Top>

      <Content>
        <p>Rua Dório Silva, 100 - Vila Guaranhuns, Vila Velha</p>
      </Content>
    </Container>
  )
}

