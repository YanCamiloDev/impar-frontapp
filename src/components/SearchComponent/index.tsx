import * as React from 'react';
import styled from 'styled-components';
import image from '../../assets/fundo-busca.png';
import LupaIcon from '../../assets/lupa.png'

export default function SearchComponent() {

  return (
    <BoxSearch>
      <ImageBackground src={image} alt="Pessoas reunidas em uma sala em uma conversa descontraída" />
      <ContainerInput>
        <Input placeholder='Digite aqui sua busca' />
        <img src={LupaIcon} style={{ objectFit: 'contain', width: '30px', height: '30px' }} />
      </ContainerInput>
    </BoxSearch>
  )

}


const BoxSearch = styled.div`
  width: 100%;
  position:relative;
`

const ContainerInput = styled.div`
  background-color:#fff ;
  padding: 5px 10px;
  left: 0;
  right: 0;
  bottom: 50px;
  margin: 0 auto;
  position:absolute ;
  width: 70%;
  display:flex;
  align-items: center;
  border-radius: 8px;
  padding-right:20px;
`

const ImageBackground = styled.img`
  width: 100%;
  height: 261px;
  object-fit:cover;
`

const Input = styled.input`
  flex: 1;
  padding:10px 10px;
  background-color: #fff;
  width: 100%;
  text-align: left;
  font: normal normal 300 24px Inter;
  letter-spacing: 0px;
  color: #757575;
  border:none ;
  opacity: 1;
  &:focus {
        outline: none;
        border:none;
    }

    @media (max-width: 550px) {
        font-size: 1rem;

        & + img {
          width: 23px !important;
          height: 23px !important;
        }
    }
`