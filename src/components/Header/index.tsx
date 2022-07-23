import * as React from 'react';
import TesteImg from '../../assets/logo-teste.svg';
import { HeaderStyled } from '../../StyledComponents';

export default function Header() {

  return (
    <HeaderStyled>
      <img src={TesteImg} />
    </HeaderStyled>
  )
}

