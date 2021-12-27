import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom:3.2rem;
  padding: 2.2rem;
  border-radius:.8rem;

  width: 100%;
  max-width:1140px;
  background: var(--bg-white);

`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  div{ 
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2{ 
      font-size: 2rem;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;

      margin-right: 1.8rem;
    }

    button{
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--bg-white);
      border: none;
      margin-right: 1rem;

      svg{
        font-size:2rem;
        color: var(--brandcolor-primary-light);
      }
    }

    p{
      font-family: "Inter", sans-serif;
      font-weight: 400;
      font-size: 1.2rem;
      border: 1px solid var(--brandcolor-primary-light);
      border-radius: 7.1rem;
      padding: 0.8rem 2.4rem;
      margin: 0 1.6rem;
    }
  }

  @media (max-width: 680px) {
    display: grid;
    grid-template-columns: 1fr;
    div{
      p{
        /* padding: 0.4rem 1.2rem; */
        margin-top: 1rem
      }
    }
  }

  @media (max-width: 400px) {
    div{
      p{
        padding: 0.4rem 1.2rem;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size:1.4rem;

  padding-top:1.6rem ;

  width: 100%;
`;
