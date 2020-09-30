import styled from 'styled-components'

export const Menu = styled.div`
    min-width:100vw;
    background: #e44949;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{box-shadow: 6px 2px 6px #C94040,-6px -2px 6px #FF5252;}

`
export const Ol = styled.ol`
    display: flex;
    flex-direction:row;
    list-style: none;
    
`
export const Li = styled.div`
    display: flex;
    flex-direction:row;
    
`
export const Logo = styled.div`
    float: left;


`
export const Porta = styled.div`
    float:right;

`
export const A = styled.a`
    padding: 12px 24px;
    background: #e44949;
    box-shadow: 6px 6px 12px #C94040,-6px -6px 12px #FF5252;
    border-radius: 10px;
    font-size: 1.1rem;
    color: white;
    text-decoration: none;
    :hover{ box-shadow: inset 6px 6px 12px #C94040,inset -6px -6px 12px #FF5252; }

`