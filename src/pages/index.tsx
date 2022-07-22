import React from 'react';
import styled from 'styled-components';
import { DefaultLayout } from '../components/DefaultLayout';
import Header from '../components/Header';
import SearchComponent from '../components/SearchComponent';
import { TextInter } from '../components/TextInter';

export default function Home() {
  return (
    <DefaultLayout>
      <Header />
      <Corpo>
        <SearchComponent />
        <ContainerFlex width='100%' jc='center'>
          <ContainerFlex width='70%'>
            <TextInter size='1.8rem' weight={500} >Resultados da pesquisa</TextInter>
          </ContainerFlex>
        </ContainerFlex>

      </Corpo>
    </DefaultLayout>
  )
}

const Corpo = styled.div`
  grid-area: main;
  background: #F6F4F6 0% 0% no-repeat padding-box;
  opacity: 1;
`

const ContainerFlex = styled.main<{ width?: string; jc?: string }>`
  display: flex;
  justify-content:${props => props.jc};
  width: ${props => props.width};
  padding:10px ;
`