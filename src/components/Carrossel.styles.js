import styled from 'styled-components';

export const CarrosselContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

export const CardsScroller = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 2rem;
  padding: 2rem 0;
  scroll-behavior: smooth;
  transition: transform 0.2s ease-in-out;
  flex-shrink: 0;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.95);
  border: none;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  z-index: 2;
  border-radius: 50%;
  box-shadow: 0 0 6px rgba(0,0,0,0.15);
  transition: background 0.3s ease;

  &:hover {
    background: var(--claro);
  }

  &.left {
    left: -20px;
  }

  &.right {
    right: -20px;
  }

  @media (max-width:768px){
    display: none;
  }
`;
