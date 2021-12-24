// import { Button } from '../Button'
import Link from 'next/link'

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
          {/* <Link href="/" passHref> */}
            {hasButton && <button><RiArrowLeftSLine/></button>}
          {/* </Link> */}
          <h1>{text}</h1>  
        </div>
        {children}      
        {/* {hasButton && <Button text={textButton} />} */}
      </Content>
    </Container>
  )
}

// , hasButton = false,textButton ="", ...rest