import {ReactNode} from 'react';
import { EmpreendimentoProvider } from './Empreendimento';


interface AppProviderProps{
  children: ReactNode;
}

export function AppProvider({children}: AppProviderProps) {
  return (
    <EmpreendimentoProvider>
      {children}
    </EmpreendimentoProvider>
  );
}