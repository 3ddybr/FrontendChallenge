import styled from 'styled-components'

export const ButtonLayout = styled.button`  
    display: flex;
    align-items: center;
    text-align: center;

    font-size: 1.6rem;
    font-family: "Inter", sans-serif;
    color:var(--bg-white);
    font-weight: "bold";
    background: var(--brandcolor-primary-default);
    border:0;
    padding: 1rem 4rem;
    border-radius: 7.1rem;
    height:3.6rem;

    transition : filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
  
`