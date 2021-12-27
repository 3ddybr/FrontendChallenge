import Link from 'next/link';
import React from 'react';

import { PropsWithChildren } from 'react'
import { RiArrowLeftSLine } from 'react-icons/ri';
import { Container , Content} from './styles'
interface HeaderProps { 
  text: string
  hasButton?: boolean
}

export function Header ({text, hasButton= false, children}:PropsWithChildren<HeaderProps>) {     
  return (
    <Container>
      <Content>
        <div>          
            {hasButton && <Link href="/" passHref><RiArrowLeftSLine/></Link>}
            <a>
            </a>
          <h1>{text}</h1>  
        </div>
        {children}      
      </Content>
    </Container>
  )
}