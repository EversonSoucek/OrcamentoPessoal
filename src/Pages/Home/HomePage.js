import React from 'react';
import './HomePage.css';
import Header from '../../components/Header/Header';

export default function HomePage() {
  return (
    <div>
      <Header />

      <div className="home-container">
        <h1>Bem-vindo ao Gerenciador de Orçamento Pessoal</h1>
        
        <p className="home-description">
          O <strong>Gerenciador de Orçamento Pessoal</strong> é uma aplicação web criada para ajudar você a gerenciar sua renda e despesas mensais de forma simples e eficiente.
          Com esta ferramenta, você pode acompanhar suas finanças em um só lugar, garantindo controle sobre seus gastos e uma visão clara de seu saldo restante.
        </p>

        <h2>Funcionalidades</h2>
        <ul className="home-features">
          <li>Adicione entradas de renda e despesas facilmente.</li>
          <li>Edite ou exclua registros conforme necessário.</li>
          <li>Veja um resumo claro de seu total de renda, despesas e saldo disponível.</li>
          <li>Acompanhe seu progresso financeiro mês a mês.</li>
        </ul>

        <p className="home-call-to-action">
          Comece agora a organizar suas finanças e tenha controle total sobre seu orçamento mensal!
        </p>
      </div>
    </div>
  );
}
