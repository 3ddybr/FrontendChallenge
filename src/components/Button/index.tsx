import {ButtonHTMLAttributes,  } from 'react'
import { ButtonLayout} from './styles'

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export function Button ({text, ...rest}: buttonProps) {   
  return (    
          <ButtonLayout type="button" {...rest}  >
              {text}
          </ButtonLayout>             
     
  )
}