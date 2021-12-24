import {Formulario} from "./styles";

export default function FormularioEmpreendimentos () {
  return (
    <Formulario>
      <h2>Informações</h2>
        <select name="lancamento" id="" >
          <option value="">Breve lançamento</option>
          <option value="">Lançamento</option>
          <option value="">Em obras</option>
          <option value="">Pronto pra morar</option>
        </select>
        <input type="text" placeholder="Nome do empreendimento"/>
        <select name="tipo" id="">
          <option value="">Residencial</option>
          <option value="">Comercial</option>
        </select>
        <input type="text" placeholder="Cep"/>
        <label></label>
        <input type="text" placeholder="Número"/>
    </Formulario>
    )
}