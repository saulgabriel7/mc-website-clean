// src/components/CidadeRegiaoFilter.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Select = styled.select`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

export function CidadeRegiaoFilter({ onChangeCidade, onChangeRegiao }) {
  const [cidades, setCidades] = useState([]);
  const [cidadeSelec, setCidadeSelec] = useState('');
  const [regioes, setRegioes] = useState([]);
  const [regiaoSelec, setRegiaoSelec] = useState('');

  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP/municipios')
      .then(res => res.json())
      .then(data => setCidades(data.sort((a, b) => a.nome.localeCompare(b.nome))));
  }, []);

  useEffect(() => {
    if (!cidadeSelec) return setRegioes([]);
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${cidadeSelec}/distritos`)
      .then(res => res.json())
      .then(data => setRegioes(data.map(d => d.nome)));
    setRegiaoSelec('');
  }, [cidadeSelec]);

  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Select value={cidadeSelec} onChange={e => {
        setCidadeSelec(e.target.value);
        onChangeCidade?.(e.target.value);
      }}>
        <option value="">Selecione uma cidade</option>
        {cidades.map(c => (
          <option key={c.id} value={c.id}>{c.nome}</option>
        ))}
      </Select>

      <Select
        value={regiaoSelec}
        onChange={e => {
          setRegiaoSelec(e.target.value);
          onChangeRegiao?.(e.target.value);
        }}
        disabled={!cidadeSelec}
      >
        <option value="">
          {cidadeSelec ? 'Selecione uma região' : 'Região'}
        </option>
        {regioes.map(r => (
          <option key={r} value={r}>{r}</option>
        ))}
      </Select>
    </div>
  );
}