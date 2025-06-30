import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ContainerHeader, Navegacao, MenuCompleto,} from './HeaderImoveis.styles';
import logo from '../assets/logo.png';
import whats from '../assets/whatsapp.svg';
import telefone from '../assets/telefone.svg';

export function Header() {
  const navigate = useNavigate();
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <ContainerHeader>
      <Navegacao>
        <div>
          <a href="/" onClick={(e) => handleNavigation(e, '/')}>
            <img src={logo} alt="Logo da MC Imobiliária" />
          </a>
        </div>

        <div className="contato-menu">
          <div className='right'>
            <span>
              <img src={telefone} alt="telefone" />
              (11) 9876-54321
            </span>
            <span>
              <img src={whats} alt="whatsapp logo" />
              (11) 9876-54321
            </span>
          </div>
          <div className='hamburguer' onClick={() => setMenuAberto(true)}>☰</div>
        </div>
      </Navegacao>


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
              <a href="#">Encontre o imóvel ideal para você</a>
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

    </ContainerHeader>
  );
}
