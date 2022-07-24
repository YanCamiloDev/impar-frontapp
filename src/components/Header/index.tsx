import * as React from 'react';
import { Link } from 'react-router-dom';
import TesteImg from '../../assets/logo-teste.svg';
import { HeaderStyled } from '../../StyledComponents';

export default function Header() {

  return (
    <HeaderStyled>
      <Link to='/'>
        <img src={TesteImg} />
      </Link>
    </HeaderStyled>
  )
}

