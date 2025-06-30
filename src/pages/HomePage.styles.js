import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 4rem 2rem;
  background-color: var(--background-color);

  main {
    max-width: 1200px;
    margin: 0 auto;
  }

  .paragrafo {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 3rem;
    margin-bottom: 4rem;
    flex-wrap: wrap;
  }

  @media(max-width:1200px){
    .paragrafo{
      display: flex ;
      justify-content: center;
      align-items: center;
  }
  }

  .paragrafo h2 {
    font-size: 56px;
    line-height: 1.2;
    font-weight: 700;
    max-width: 550px;
  }

  .paragrafo h2 span {
    color: var(--span-color);
    display: block;
  }

  .paragrafo p {
    max-width: 500px;
    font-size: 15px;
    line-height: 1.6;
    color: var(--darker-text-color);
    text-align: justify;
  }

  .img-destaques {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
  }

  .card {
    position: relative;
    overflow: hidden;
    height: 100%;
  }

  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .card.destaque {
    grid-row: span 3;
    border-radius: 24px;
    box-sizing: border-box;
  }

  .Destaques { 
  padding-block: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.Destaques h2 {
  font-size: 42px;
  margin-bottom: 1.5rem;
}

.btn {
  display: flex;
  gap: 1rem;
}

.btn li{
  list-style: none;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid #aaa;
  background-color: var(--white);
  transition: all 0.3s ease;
  border: 1px solid var(--primary-color);
  font-weight: bold;
}
`;