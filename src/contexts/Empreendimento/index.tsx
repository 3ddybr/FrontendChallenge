import React, {
  createContext,
  useCallback,
  useContext,  
  useState
} from 'react';
import { api } from '../../services/api';

import {EmpreendimentoContextData, EnterpriseItensProps} from './interfaces';



const EmpreendimentoContext = createContext<EmpreendimentoContextData>({} as EmpreendimentoContextData);

const EmpreendimentoProvider: React.FC = ({children}) => {
  const [enterprises, setEnterprises] = useState<EnterpriseItensProps[]>([] as EnterpriseItensProps[]);


  // createNewEmpreendimento(data: EnterpriseItensProps): Promise<void>; 
  // enterprises: EnterpriseItensProps[];
  // getEnterprises:() => Promise<void>;


  const getEnterprises = useCallback(async()=> {
    try{
      const response = await api.get('/enterprises');
      setEnterprises(response.data);
    }catch(err){
      console.log('Erro do getEnterprise ',err)
    }
  }, [])


  //funcao adicionar empreendimento
  const createNewEmpreendimento = useCallback( async (data:EnterpriseItensProps) =>{
    try{
      const createData = {
        _id: String(Math.random()),
        ri_number:String(Math.random()),
        ...data
      }
      const response = await api.post('/enterprises', createData)
      setEnterprises(prevState => {
        return{
          ...response.data, 
          ...prevState
        }
      });
      // console.log(response);
    }catch(err){
      console.log('Erro do post ',err)
    }    
  },[])

  //funcao editar empreendimento


  //funcao remover empreendimento
 
  


  return (
    <EmpreendimentoContext.Provider 
    value={{
      createNewEmpreendimento,
      enterprises,
      getEnterprises
      }}>
      {children}
    </EmpreendimentoContext.Provider>
  );
};

function useEmpreendimento(): EmpreendimentoContextData {
  return useContext(EmpreendimentoContext);
}

export {EmpreendimentoProvider, useEmpreendimento};

