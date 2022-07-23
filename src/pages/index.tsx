import * as React from 'react';
import Header from '../components/Header';
import SearchComponent from '../components/SearchComponent';
import Icone from '../assets/icone.png';
import { Button, ContainerFlex, Corpo, DefaultLayout, Text } from '../StyledComponents';
import PokeCard from '../components/PokeCard';
import api from '../services';
import { AllDataPokemons, Pokemon } from '../types';
import axios from 'axios';

export default function Home() {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);

  React.useEffect(() => {
    async function getPokemons() {
      const list = await api.get(`/pokemon/?limit=20&offset=20`);
      const data = list.data as AllDataPokemons;
      for (const result of data.results) {
        const dados = await axios.get(result.url);
        setPokemons((old) => [...old, dados.data])
      }
    }
    getPokemons()
  }, [])

  React.useEffect(() => {
    console.log(pokemons);
  }, [pokemons])
  return (
    <DefaultLayout>
      <Header />
      <Corpo>
        <SearchComponent />
        <main style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <ContainerFlex width='70%' fd='column'>
            <ContainerFlex width='100%' fd='row' ai="center" jc='space-between'>
              <Text size='32px' weight={500} >Resultados da pesquisa</Text>
              <Button>Novo Card</Button>
            </ContainerFlex>
            <ContainerFlex fw='wrap' mt='30px' width='100%' fd='row'>
              <PokeCard image={Icone} desc="Lorem ipsum dolor sit amet consectetur" />
            </ContainerFlex>
          </ContainerFlex>
        </main>
      </Corpo>
    </DefaultLayout>
  )
}
