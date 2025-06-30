// Importando styled-components para criar componentes com estilo
import styled from 'styled-components';

// Estilo do container principal do header
export const ContainerHeader = styled.header`
  height: 90vh;
  background-size: cover;
  background-position: center;
  color: white;
  position: relative;

  .buscar {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 0.5rem;
    z-index: 10;

    input {
      padding: 0.6rem;
      border-radius: 10px;
      border: 1px solid #ccc;
      padding-right: 1rem;
      width: 250px;
      font-size: 1rem;
      text-transform: uppercase;
    }

    button {
      padding: 0.6rem 1.2rem;
      border: none;
      border-radius: 10px;
      background-color: var(--primary-color);
      color: white;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        background-color: var(--hover-gray);
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;

      input {
        width: 100%;
      }

      button {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    height: 80vh;
  }
`;

export const Navegacao = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 2rem;

  img {
    width: 96px;
  }

  .contato-menu {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .right {
    display: flex;
    align-items: center;
    gap: 2rem;

    span {
      display: flex;
      align-items: center;
      font-size: 1.25rem;
      gap: 0.5rem;

      img {
        width: 24px;
      }
    }
  }

  .hamburguer {
    font-size: 2rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .right {
      display: none;
    }
  }
`;

export const MenuCompleto = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  z-index: 100;
  background-color: var(--primary-color);
  color: white;
  font-family: sans-serif;
  transition: opacity 0.4s ease, transform 0.3s ease;

  opacity: ${({ open }) => (open ? 1 : 0)};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};

  .menu-lateral {
    width: 20%;
    background-color: var(--background-color);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 2rem;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    font-size: 5rem;
    font-weight: bold;
    color: #444;
  }

  .menu-conteudo {
    flex: 1;
    padding: 4rem 3rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }

  .fechar {
    position: absolute;
    top: 1.5rem;
    right: 2rem;
    font-size: 2rem;
    cursor: pointer;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    section {
      h4 {
        font-weight: 400;
        color: var(--dark-text-color);
        margin-bottom: 0.5rem;
      }

      a {
        display: block;
        color: var(--white);
        text-decoration: none;
        font-size: 1.1rem;
        margin-bottom: 0.25rem;

        &:hover {
          color: var(--span-color);
        }
      }
    }
  }

  .contato {
    font-size: 0.9rem;
    color: #ccc;

    p {
      margin: 0.25rem 0;

      img {
        width: 16px;
        margin-right: 0.5rem;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .menu-lateral {
      writing-mode: horizontal-tb;
      width: 100%;
      justify-content: flex-start;
      font-size: 2rem;
      padding: 1rem 2rem;
    }

    .menu-conteudo {
      padding: 2rem;
    }

    .fechar {
      top: 1rem;
      right: 1.5rem;
    }
  }
`;

export const TituloSite = styled.h1`
  font-size: 72px;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 1200px;
  transform: translateX(-50%) translateY(-60%);
  text-align: center;
  z-index: 6;
  padding: 2rem;

  @media (max-width: 768px) {
    font-size: 56px;
    max-width: 650px;
    transform: translateX(-50%) translateY(-70%);
    padding-bottom: 50px;
  }
`;
