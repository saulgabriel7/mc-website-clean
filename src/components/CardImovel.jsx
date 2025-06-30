import React from 'react';
import { Card, Imagem, Infos, Botao, BotaoC } from './CardImovel.styles';
import arrow from '../assets/arrow-up-right.svg';

export function CardImovel({ item }) {
  return (
    <Card>
      <Imagem src={item.imagem} alt={item.imovel} />
      <Infos>
        <h3>{item.imovel}</h3>
        <p>{item.cidade} - {item.bairro}</p>
        <strong>{item.preco}</strong>
        <div className="button">
          <Botao>
            Disponível
          </Botao>
          <a
            href={`/imoveis/imovel/${item.codigo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BotaoC>
              <img src={arrow} alt='seta' />
            </BotaoC>
          </a>
        </div>
      </Infos>
    </Card>
  );
}
