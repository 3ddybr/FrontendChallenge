import styled from 'styled-components'

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin: 0 auto;
padding: 0 2.2rem;

max-width:1140px;


/* border: 1px solid blue; */
`;

export const Search = styled.div` 
  display: flex;
  align-items: center;
  justify-content: flex-start;


  width: 100%;
  height: 5.2rem;
  margin-bottom:8.9rem;
  border-bottom: 2px solid var(--brandcolor-primary-light);
  
  input{
    font-size:1.6rem;
    width: 100%;
    background: var(--background);
    border: none;
    outline: none;   

  }

  svg{
    font-size:1.6rem;
    margin-right: 1.6rem;
  }

  @media (max-width: 680px){
    margin-bottom: 3.2rem;
  }
`;