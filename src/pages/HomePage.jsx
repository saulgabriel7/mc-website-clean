import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CardImovel } from '../components/CardImovel';
import { Loader } from '../components/Loader';
import { MainContainer } from './HomePage.styles';
import { CarrosselContainer, CardsScroller, ScrollButton } from '../components/Carrossel.styles';

import img1 from '../assets/1.svg';
import img2 from '../assets/2.svg';
import img3 from '../assets/3.svg';


import imv1 from '../assets/IMV001 - copia.jpeg';
import imv2 from '../assets/IMV002 - copia.jpeg';
import imv3 from '../assets/IMV003 - copia.jpeg';
import imv4 from '../assets/IMV004 - copia.jpeg';
import imv5 from '../assets/IMV005 - copia.jpeg';
import imv6 from '../assets/IMV006 - copia.jpeg';

const imoveis = [
  {
    id: 1,
    codigo: 'IMV001',
    imagem: imv1,
    imovel: 'Galpão, 1566 m² - Vila Cardoso - Capivari/SP',
    descricao: 'Ótimo galpão comercial, com 1566 m² de área construída, excelente para supermercado ou agencia de carros.',
    cidade: 'São Paulo',
    regiao: 'Capivari',
    preco: 'R$ 50.000 / mês'
  },
  {
    id: 2,
    codigo: 'IMV002',
    imagem: imv2,
    imovel: 'Galpão, 949 m² - Bela Vista/SP',
    descricao: '- Área total de 949 m², bom fluxo de pedestres e veiculos',
    cidade: 'São Paulo',
    regiao: 'Bela Vista',
    preco: 'R$ 25.000 / mês'
  },
  {
    id: 3,
    codigo: 'IMV003',
    imagem: imv3,
    imovel: "Galpão, Ubatuba/SP",
    descricao: "Galpão commais de 1000m²",
    cidade: "Ubatuba",
    regiao: "Centro",
    preco: "R$25.000 / mês"
  },
  {
    id: 4,
    codigo: 'IMV004',
    imagem: imv4,
    imovel: "Galpão, Vila Nova Cachoeirinha 1350m²",
    descricao: "Vila Nova Cachoeirinha 1350m²",
    cidade: "São Paulo",
    regiao: "Vila Nova Cachoeirinha",
    preco: "R$ 24.000 / mês"
  },
  {
    id: 5,
    codigo: 'IMV005',
    imagem: imv5,
    imovel: "Galpão, São José dos Campos",
    descricao: "Galpão conta com 1596m²",
    cidade: "São José dos Campos",
    regiao: "Vila industrial",
    preco: "R$ 60.000/ mês"
  },
  {
    id: 6,
    codigo: 'IMV006',
    imagem: imv6,
    imovel: "Galpão, Centro São José dos Campos",
    descricao: "Galpão conta com 1400m²",
    cidade: "São José dos Campos",
    regiao: "Centro",
    preco: "R$ 28.000/ mês"
  }
];

export function HomePage() {
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (offset, scrollRef) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += offset;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Header />
      <MainContainer>
        <main>
          <section className='paragrafo'>
            <h2>Encontre seu imóvel dos sonhos hoje!</h2>
            <p>Descubra o lugar perfeito para viver com conforto e segurança. Temos as melhores opções para tornar seu sonho realidade. Comece sua busca agora! Encontre a casa dos seus sonhos em um ambiente acolhedor e protegido. Oferecemos diversas opções que se encaixam no seu estilo de vida. Não perca tempo, inicie sua jornada para um novo lar hoje mesmo!</p>
          </section>

          <section className="img-destaques">
            <div className="card destaque"><img src={img1} alt="Casa moderna" /></div>
            <div className="card"><img src={img2} alt="Casa aconchegante" /></div>
            <div className="card"><img src={img3} alt="Cobertura" /></div>
          </section>

          <section className='Destaques'>
            <h2>Imoveis em Destaque</h2>
            <div className="btn">
              <li className="dest">Destaques</li>
              <li onClick={() => navigate('/imoveis')}>Veja Mais</li>
            </div>
          </section>

          <CarrosselContainer>
            <ScrollButton className="left" onClick={() => scroll(-300, scrollRef)}>‹</ScrollButton>
            <ScrollButton className="right" onClick={() => scroll(300, scrollRef)}>›</ScrollButton>
            <CardsScroller ref={scrollRef}>
              {imoveis.map(item => <CardImovel key={item.id} item={item} />)}
            </CardsScroller>
          </CarrosselContainer>
        </main>
      </MainContainer>
      
      <Footer />
    </>
  );
}