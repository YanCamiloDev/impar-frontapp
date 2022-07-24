import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path=":pokemonPesquisa" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
