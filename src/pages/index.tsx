import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SearchComponent from '../components/SearchComponent';
import { Button, ContainerFlex, Corpo, DefaultLayout, PaginationComp, Text } from '../StyledComponents';
import PokeCard from '../components/PokeCard';
import api from '../services';
import { AllDataPokemons, Pokemon } from '../types';
import axios from 'axios';
import { Pagination } from '@mui/material';
// import Pagination from '../components/Pagination';
export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  async function getPokemons() {
    const list = await api.get(`/pokemon/?limit=12&offset=${page * 10}`);
    const data = list.data as AllDataPokemons;
    setCount(data.count);
    let array = [];
    for (const result of data.results) {
      const dados = await axios.get(result.url);
      array.push(dados.data)
    }
    setPokemons(array)
  }
  useEffect(() => {
    getPokemons()
  }, [page])



  function handleChangePage(event: React.ChangeEvent<unknown>, value: number) {
    setPage(value)
    document.querySelector('body')?.scrollTo(0, 260)
  }

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
            {/* <Pagination /> */}
            <ContainerFlex fw='wrap' mt='30px' width='100%' fd='row'>
              {pokemons.map((item, index) => {
                return (
                  <PokeCard
                    key={`pokemon-${index}`}
                    image={item.sprites.front_default}
                    desc={item.name} />
                )
              })}
            </ContainerFlex>
            <PaginationComp>
              <Pagination
                count={Math.ceil(count / 12)}
                page={page}
                onChange={handleChangePage}
                color="primary"
              />
            </PaginationComp>
          </ContainerFlex>
        </main>
      </Corpo>
    </DefaultLayout>
  )
}
