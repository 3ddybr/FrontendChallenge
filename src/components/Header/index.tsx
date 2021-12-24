// import { Button } from '../Button'

import { PropsWithChildren } from 'react'
import { RiArrowLeftSLine } from 'react-icons/ri';
import { Container , Content} from './styles'
interface HeaderProps { 
  text: string
  hasButton?: boolean
  // textButton?:string
}

export function Header ({text, hasButton= false, children}:PropsWithChildren<HeaderProps>) {   
  return (
    <Container>
      <Content>
        <div>
          {hasButton && <button><RiArrowLeftSLine/></button>}
          <h1>{text}</h1>  
        </div>
        {children}      
        {/* {hasButton && <Button text={textButton} />} */}
      </Content>
    </Container>
  )
}

// , hasButton = false,textButton ="", ...rest