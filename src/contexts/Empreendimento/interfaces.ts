export interface Address {
  district: string;
  city: string;
  street: string;
  state?: string;
  number: string;
  cep?: string;
}

export interface EnterpriseItensProps{
  _id?: string;
  name: string;
  status: string;
  purpose: string;
  ri_number?: string;
  address: Address;
}

export interface EmpreendimentoContextData {
  createNewEmpreendimento(data: EnterpriseItensProps): Promise<void>; 
  enterprises: EnterpriseItensProps[];
  getEnterprises:() => Promise<void>;
}
