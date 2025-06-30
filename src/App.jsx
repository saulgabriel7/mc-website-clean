// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { SobrePage } from './pages/SobrePage';
import { CatalogoPage } from './pages/CatalogoPage';
import { ImovelDetalhe } from './pages/ImovelDetalhe';

import './styles/colors.css';
import './styles/Loader.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre" element={<SobrePage />} />
      <Route path="/imoveis" element={<CatalogoPage />} />
      <Route path="/imoveis/imovel/:codigo" element={<ImovelDetalhe />} />
    </Routes>
  );
}
