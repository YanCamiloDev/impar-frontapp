import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={import.meta.env.BASE_URL} element={<Home />} >
          <Route path=":pokemonPesquisa" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
