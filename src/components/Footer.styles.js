import styled from 'styled-components';

export const StyledFooterContainer = styled.footer`
  background-color: var(--primary-color);
  color: white;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .footer-logo {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto 2rem auto;
    display: flex;
    justify-content: flex-start;

    img {
      width: 96px;
    }
  }

  .footer-grid {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
  }

  .footer-column {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: justify;

    h3, h4 {
      margin: 0.5rem 0;
    }

    p {
      margin: 0;
      font-size: 0.95rem;
    }
  }

  hr {
    margin: 2rem 0 1rem;
    border: 0.5px solid #444;
    width: 100%;
    max-width: 1200px;
  }

  .copyright {
    font-size: 0.875rem;
    color: var(--gray);
    text-align: center;
  }

  @media (max-width: 768px) {
    .footer-logo {
      justify-content: center;
    }

    .footer-grid {
      text-align: center;
    }

    .footer-column {
      align-items: center;
    }
  }
`;
