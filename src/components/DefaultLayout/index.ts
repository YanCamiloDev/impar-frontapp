import styled from 'styled-components'

export const DefaultLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:
    "header"
    "main";
  grid-template-rows: 1fr 9fr;
  grid-template-columns: 100vw;
`