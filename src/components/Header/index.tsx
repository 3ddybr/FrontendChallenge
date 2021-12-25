// import { Button } from '../Button'
import Link from 'next/link'
import React from 'react';

import { PropsWithChildren } from 'react'
import { RiArrowLeftSLine } from 'react-icons/ri';
import { Container , Content} from './styles'
interface HeaderProps { 
  text: string
  hasButton?: boolean
  // textButton?:string
}

  //Solucao para bug do next/link
  // eslint-disable-next-line react/display-name
// const  ButtonNext  =  React.forwardRef ( ( { children , ... rest  } ,  ref )  =>  ( 
//   <span> 
//     <button {...rest} > { children } <RiArrowLeftSLine/></button> 
//   </span> 
// ) ) ;
//Fim Solucao para bug do next/link

export function Header ({text, hasButton= false, children}:PropsWithChildren<HeaderProps>) {   
  return (
    <Container>
      <Content>
        <div>
          {/* <Link href="/" passHref> */}
            {hasButton && <a><RiArrowLeftSLine/></a>}
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