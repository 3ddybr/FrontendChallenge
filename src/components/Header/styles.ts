import styled from 'styled-components'

export const Container = styled.header` 
    width: 100vw;
    background:var(--bg-white);
`;

export const Content = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1140px;
    max-height:80px;
    margin: 0 auto;

    padding: 2.2rem;
    

    div{
        display:flex;
        align-items: center;
        justify-content: space-between;
        
            svg{
                font-size:3rem;
                color: var(--brandcolor-primary-light);
            }
        }

    h1{
        font-size: 2.4rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        color: var(--brandcolor-primary-default);

    }

    @media (max-width: 680px){
        h1{
            font-size: 1.8rem;
        }
    }
`;