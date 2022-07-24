import * as React from 'react';
import { Link } from 'react-router-dom';
import TesteImg from '../../assets/logo-teste.svg';
import { HeaderStyled } from '../../StyledComponents';

export default function Header() {

  return (
    <HeaderStyled>
      <Link to={import.meta.env.BASE_URL}>
        <img src={TesteImg} />
      </Link>
    </HeaderStyled>
  )
}

