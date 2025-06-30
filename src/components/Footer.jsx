import React from 'react';
import logo from '../assets/logo-fundo.svg';
import { StyledFooterContainer } from '../components/Footer.styles.js';

export function Footer() {
  return (
    <StyledFooterContainer>
        <div className="footer-logo">
            <img src={logo} alt="Logo MC Imobiliária" />
        </div>

      <div className="footer-grid">
        <div className="footer-column">
          <h3>Sobre Nós</h3>
          <p>
            Conectando pessoas ao lar dos seus sonhos. Especialistas em compra, venda e aluguel de imóveis, oferecemos atendimento personalizado e as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="footer-column">
          <h3>Contatos</h3>
          <h4>Whatsapp</h4>
          <p>+55 11 987654321</p>
          <p>Segunda a Sexta das 9h às 18h</p>
          <h4>Email</h4>
          <p>mc.imoveis11@gmail.com</p>
        </div>

        <div className="footer-column">
          <h3>Links Úteis</h3>
          <p>Comprar</p>
          <p>Alugar</p>
          <p>Quem Somos</p>
          <p>Contato</p>
        </div>
      </div>

      <hr />
      <div className="copyright">
        © 2025 MC Imóveis. Todos os direitos reservados.
      </div>
    </StyledFooterContainer>
  );
}
