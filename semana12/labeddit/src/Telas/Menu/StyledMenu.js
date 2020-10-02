import styled from 'styled-components'

export const Menu = styled.div`
    position:relative;
    min-height:10vh;
    background: #e44949;
    display: flex;
    justify-content: space-between; 
    align-items: center;
    :hover{box-shadow: 6px 2px 6px #C94040,-6px -2px 6px #FF5252;}

`
export const Boto = styled.button`
    display: flex;
    border-style: none;
    padding: 12px 24px;
    background: #e44949;
    box-shadow: 6px 6px 12px #C94040,-6px -6px 12px #FF5252;
    border-radius: 10px;
    font-size: 1.1rem;
    color: white;
    text-decoration: none;
    :hover{ box-shadow: inset 6px 6px 12px #C94040,inset -6px -6px 12px #FF5252; }
    outline: none;
`