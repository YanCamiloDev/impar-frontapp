import React from 'react';
import styled from 'styled-components';
import TesteImg from '../../../public/logo-teste.svg';

export default function Header() {

  return (
    <HeaderStyled>
      <img src={TesteImg} />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
  grid-area: header;
  background-color: #000;
  background: linear-gradient(to bottom right, #601478, #A92670);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  display: flex;
  padding: 10px 20px;
  align-items: center;
  border-bottom: 1px solid ;
`
