import styled from 'styled-components'

export const Container = styled.header`
    /* display: flex;
    align-items: center;
    justify-content: center; */
    width: 100vw;
    background:var(--bg-white);
`;

export const Content = styled.div`
    max-width: 1140px;
    max-height:80px;
    margin: 0 auto;

    padding: 2.2rem;
    
    display:flex;
    align-items: center;
    justify-content: space-between;

    div{
        display:flex;
        align-items: center;
        justify-content: space-between;
        
        button{
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--bg-white);
            border: none;
            margin-right: 1rem;
            svg{
                font-size:3rem;
                color: var(--brandcolor-primary-light);
      }
        }
    }
    
    /* border: 1px solid red; */
        /* button:nth-child(2){
            margin-left: 1rem;
        } */

    h1{
        font-size: 2.4rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;

    }
`;