import styled from 'styled-components'

export const Formulario = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: var(--bg-white);

  width: 100vw;
  max-width:622px;
  max-height:70rem;

  padding:3.2rem 3.2rem 0 3.2rem;
  margin: 0 auto;
  
  margin-top:4.8rem;

    h2{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size:1.8rem;
      font-family: "Inter", sans-serif;
      font-weight:700;

      width: 100%;

    }

    input, select, option{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size:1.6rem;
      font-family: "Inter", sans-serif;
      font-weight:400;

      margin-bottom: 3.2rem;    
      
      width: 100%;
      height: 7rem;
      border: none;
      border-bottom: 2px solid var(--brandcolor-primary-light);
    }

    p{
      font-size:1rem;
    }

    button{
      margin-bottom: 3.2rem;
    }
`