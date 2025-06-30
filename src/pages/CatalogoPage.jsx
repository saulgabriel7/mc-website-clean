import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from '../components/HeaderImoveis';
import { Footer } from '../components/Footer';
import { CardImovel } from '../components/CardImovel';
import styled from 'styled-components';
import { imoveisMock } from '../data/imoveisMock';
import { Loader } from '../components/Loader';

const FiltrosContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  background: #f5f5f5;

  select, input {
    padding: 0.5rem;
    font-size: 1rem;
  }
`;

const GridImoveis = styled.div`
  display: grid;
  padding: 2rem;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;

export function CatalogoPage() {
  const [searchParams] = useSearchParams();

  const [cidade, setCidade] = useState('');
  const [tipo, setTipo] = useState('');
  const [precoMax, setPrecoMax] = useState('');

  // 👇 Inicializa com os filtros da URL ao carregar
  useEffect(() => {
    const cidadeURL = searchParams.get('cidade') || '';
    const tipoURL = searchParams.get('tipo') || '';
    const precoURL = searchParams.get('preco') || '';

    setCidade(cidadeURL);
    setTipo(tipoURL);
    setPrecoMax(precoURL);
  }, [searchParams]);

  const filtrarImoveis = () => {
    return imoveisMock.filter((item) => {
      const passaCidade = cidade ? item.cidade === cidade : true;
      const passaTipo = tipo ? item.tipo === tipo : true;
      const passaPreco = precoMax ? +item.preco.replace(/\D/g, '') <= +precoMax : true;
      return passaCidade && passaTipo && passaPreco;
    });
  };

  const cidadesUnicas = [...new Set(imoveisMock.map(i => i.cidade))];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) return <Loader />;

  return (
    <>
      <Header />

      <h1 style={{ padding: '2rem' }}>Todos os Imóveis</h1>

      <FiltrosContainer>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="">Todos os Tipos</option>
          <option value="venda">Venda</option>
          <option value="locacao">Locação</option>
        </select>

        <select value={cidade} onChange={(e) => setCidade(e.target.value)}>
          <option value="">Todas as Cidades</option>
          {cidadesUnicas.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Preço Máximo (R$)"
          value={precoMax}
          onChange={(e) => setPrecoMax(e.target.value)}
        />
      </FiltrosContainer>

      <GridImoveis>
        {filtrarImoveis().map((item) => (
          <CardImovel key={item.id} item={item} />
        ))}
      </GridImoveis>

      <Footer />
    </>
  );
}
