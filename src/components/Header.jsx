import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ContainerHeader,
  Navegacao,
  MenuCompleto,
  TituloSite
} from './Header.styles';

import capa from '../assets/capa.svg';
import logo from '../assets/logo.svg';
import whats from '../assets/whatsapp.svg';
import telefone from '../assets/telefone.svg';

export function Header() {
  const navigate = useNavigate();

  const [menuAberto, setMenuAberto] = useState(false);
  const [codigoBusca, setCodigoBusca] = useState('');

  const handleNavigation = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  const buscarPorCodigo = () => {
    const codigo = codigoBusca.trim().toUpperCase();

    if (!codigo || !/^IMV\d{3}$/i.test(codigo)) {
      alert('Informe um código válido, ex: IMV001');
      return;
    }

    navigate(`/imoveis/imovel/${codigo}`);
  };

  return (
    <ContainerHeader style={{ backgroundImage: `url(${capa})` }}>
      <Navegacao>
        <div>
          <a href="/" onClick={(e) => handleNavigation(e, '/')}>
            <img src={logo} alt="Logo da MC Imobiliária" />
          </a>
        </div>

        <div className="contato-menu">
          <div className="right">
            <span>
              <img src={telefone} alt="telefone" />
              (11) 9876-54321
            </span>
            <span>
              <img src={whats} alt="whatsapp logo" />
              (11) 9876-54321
            </span>
          </div>
          <div className="hamburguer" onClick={() => setMenuAberto(true)}>☰</div>
        </div>
      </Navegacao>

      <TituloSite>MC Assessoria Imobiliária</TituloSite>

      <MenuCompleto open={menuAberto}>
        <div className="menu-lateral">Menu</div>
        <div className="menu-conteudo">
          <div className="fechar" onClick={() => setMenuAberto(false)}>✕</div>

          <div className="links">
            <section>
              <a href="/" onClick={(e) => handleNavigation(e, '/')}>Home</a>
            </section>

            <section>
              <h4>Para Proprietários</h4>
              <a href="#">Anuncie seu imóvel</a>
            </section>

            <section>
              <h4>Sobre Nós</h4>
              <a href="#">Nossos Corretores</a>
              <Link to="/sobre">Conheça a MC Imóveis</Link>
            </section>

            <section>
              <h4>Nossos Serviços</h4>
              <a href="#">Gestão de Imóveis</a>
              <a href="/imoveis" onClick={(e) => handleNavigation(e, '/imoveis')}>Encontre o imóvel ideal para você</a>
            </section>

            <section>
              <h4>Entre em Contato</h4>
              <a href="#">Fale com nossa equipe</a>
            </section>
          </div>

          <div className="contato">
            <p><img src={telefone} alt="tel" />(11) 1111-1111 (Telefone)</p>
            <p><img src={whats} alt="whatsapp" />(11) 98765-4321 (WhatsApp)</p>
            <p>MC Imóveis</p>
          </div>
        </div>
      </MenuCompleto>

      {/*busca por código*/}
      <div className="buscar" style={{  marginBottom: '3rem', padding: '1rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
        <input
          type="text"
          placeholder="Buscar(ex: IMV001)"
          value={codigoBusca}
          onChange={(e) => setCodigoBusca(e.target.value.toUpperCase())}
          onKeyDown={(e) => {
            if (e.key === 'Enter') buscarPorCodigo();
          }}
          style={{
            textTransform: 'uppercase',
            width: '300px',
            padding: '1rem',
            fontSize: '1rem',
            borderRadius: '4px',
            border: 'none',
          }}
        />
        <button
          onClick={() => {
            const codigo = codigoBusca.trim().toUpperCase();
            if (!codigo || !/^IMV\d{3}$/i.test(codigo)) {
              alert('Informe um código válido, Ex: IMV001');
              return;
            }
            window.open(`/imoveis/imovel/${codigo}`, '_blank');
          }}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            backgroundColor: 'var(--primary-color)',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Buscar
        </button>
      </div>
    </ContainerHeader>
  );
}
