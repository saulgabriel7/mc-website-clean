import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const ImagemContainer = styled.div`
  margin-bottom: 2rem;

  .carousel .slide img {
    border-radius: 10px;
    max-height: 500px;
    object-fit: cover;
  }

  .carousel .thumbs {
    margin-top: 10px;
  }

  .carousel .thumb img {
    border-radius: 4px;
  }
`;

export const Info = styled.div`
  background: #fdfdfd;
  padding: 1.5rem 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  margin-bottom: 2rem;

  h1 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #333;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  font-size: 1rem;
  color: #555;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    strong {
      color: #222;
    }
  }
`;

export const Detalhes = styled.div`
  margin-top: 2rem;
  background: #fff;
  border-left: 4px solid #0077ff;
  padding: 1rem 1.5rem;
  border-radius: 6px;

  h2 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #444;
    line-height: 1.6;
  }
`;

export const PriceHighlight = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #00a859;
`;

export const CTAButtons = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;

  button {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s;

    &.primary {
      background: #0077ff;
      color: white;

      &:hover {
        background: #005edc;
      }
    }

    &.secondary {
      background: #e0e0e0;
      color: #333;

      &:hover {
        background: #ccc;
      }
    }
  }
`;

export const Facilidades = styled.div`
  margin: 2rem 0;
  background: #f7f7f7;
  padding: 1.5rem;
  border-radius: 10px;

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;
      font-size: 1rem;

      &::before {
        content: '✔️';
        margin-right: 0.5rem;
        color: #00a859;
      }
    }
  }
`;
