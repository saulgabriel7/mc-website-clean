// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom'; 

// Tema global para styled-components
const theme = {
  fontUm: 'Inter',
};

// Renderiza o app dentro do elemento root
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Necessário para o React Router funcionar */}
      <ThemeProvider theme={theme}>
        <GlobalStyle /> {/* Aplica os estilos globais */}
        <App /> {/* Componente principal da aplicação */}
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
