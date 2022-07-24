import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SearchComponent from '../components/SearchComponent';
import { Button, ContainerFlex, Corpo, DefaultLayout, PaginationComp, Skeleton, Text, TextH1 } from '../StyledComponents';
import PokeCard from '../components/PokeCard';
import api from '../services';
import { AllDataPokemons, Pokemon } from '../types';
import axios from 'axios';
import { Pagination } from '@mui/material';
import AlertInfo from '../components/AlertInfo';
import { useParams } from 'react-router-dom';
const ROWS_PER_PAGE = 15

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [infoAlert, setInfoAlert] = useState('');
  let { pokemonPesquisa } = useParams();
  async function getAllPokemons() {
    try {
      setLoading(true)
      const list = await api.get(`/pokemon/?limit=12&offset=${page * ROWS_PER_PAGE}`);
      const data = list.data as AllDataPokemons;
      setCount(data.count);
      let array = [];
      for (const result of data.results) {
        const dados = await axios.get(result.url);
        array.push(dados.data)
      }
      setPokemons(array)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  async function searchPokemon() {
    try {
      setLoading(true)
      const list = await api.get(`/pokemon/${pokemonPesquisa?.trim().toLowerCase()}`);
      setPokemons([list.data])
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setPokemons([])
    }
  }
  useEffect(() => {
    pokemonPesquisa ? searchPokemon() : getAllPokemons()
  }, [page, pokemonPesquisa])

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
          <AlertInfo
            infoAlert={infoAlert}
            setInfoAlert={setInfoAlert} />
          <ContainerFlex width='70%' fd='column'>
            <ContainerFlex width='100%' fw='wrap' fd='row' ai="center" jc='space-between'>
              <Text as={TextH1} size='32px' weight={500} >
                {pokemonPesquisa ? 'Resultado da pesquisa' : 'Lista de Pokemóns'}
              </Text>
              {loading ? <Skeleton w='183px' h='60px' /> : <Button onClick={() => setInfoAlert('Função não implementada')}>Novo Pokemon</Button>}
            </ContainerFlex>
            <ContainerFlex centerOnMobile={true} fw='wrap' mt='30px' width='100%' fd='row'>
              {loading && [...Array(10).keys()].map((item, index) => {
                return (
                  <Skeleton key={`sk-${index}`} />
                )
              })}

              {!loading && pokemons.length === 0 && (
                <Text size='20px' mb='30%' weight={500} mt="20px" color="#263238" >
                  Nenhum pokemón encontrado :(
                </Text>
              )}
              {pokemons.map((item, index) => {
                return (
                  <PokeCard
                    key={`pokemon-${index}`}
                    image={item.sprites.front_default}
                    desc={item.name}
                    alertInfo={setInfoAlert}
                  />
                )
              })}
            </ContainerFlex>
            {!pokemonPesquisa && (
              <PaginationComp>
                <Pagination
                  count={Math.ceil(count / ROWS_PER_PAGE)}
                  page={page}
                  onChange={handleChangePage}
                  color="primary"
                />
              </PaginationComp>
            )}

          </ContainerFlex>
        </main>
      </Corpo>
    </DefaultLayout >
  )
}
