import styled from 'styled-components';

export const Card = styled.div`
  background: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;
  min-width: 260px;
  transition: transform 0.2s ease-in-out;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 480px) {
    min-width: 220px;
  }
`;

export const Imagem = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const Infos = styled.div`
  padding: 1rem;
  width: 100%;

  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: var(--text-color);
  }

  p {
    color: var(--dark-text-color);
    margin-bottom: 0.5rem;
  }

  strong {
    display: block;
    margin-bottom: 1rem;
    color: var(--prymary-color);
    font-size: 1.2rem;
  }

  .button{
    display: flex;
    justify-content: space-between;  
    align-items: center;            
    width: 100%;  
  }
`;


export const Botao = styled.button`
  padding: 0.5rem 1rem;

  background: var(--span-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: var(--hover-gray);
  }
`;

export const BotaoC = styled.button`
  padding: 0.5rem;
  background: var(--primary-color);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background: var(--hover-gray);
  }

  img{
    width: 22px;
    height: auto;
  }
`;

// Estilo externo para lista de cards (ideal importar no container da Home)



export const CardsLista = styled.div`
  display: ${({ destaque }) => (destaque ? 'flex' : 'grid')};
  flex-direction: row;
  overflow-x: ${({ destaque }) => (destaque ? 'auto' : 'unset')};
  gap: 1.5rem;
  padding: 1.5rem 0;
  scroll-behavior: smooth;

  ${({ destaque }) =>
    !destaque &&
    `
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  `}

  &::-webkit-scrollbar {
    display: none;
  }
`;


export const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(255,255,255,0.9);
  border: none;
  font-size: 2rem;
  cursor: pointer;
  padding: 0 1rem;

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem; // Tamanho menor para dispositivos móveis
  }
`;

