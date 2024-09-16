import React from 'react';
import "./SobrePage.css"
import Header from '../../components/Header/Header';

export default function SobrePage() {
  return (
    <div>
      <Header />

      <div className="sobre-container">
        <h1>Sobre Mim</h1>
        <p className="sobre-description">
          Sou um <strong>estudante de Engenharia de Software</strong>, atualmente trabalhando como <strong>Analista de Qualidade de Software (QA)</strong> na <strong>Visual Software</strong>.
          Tenho experiência com a stack <strong>MERN</strong> (MongoDB, Express, React, Node.js), e busco constantemente expandir meus conhecimentos em desenvolvimento full stack.
        </p>

        <h2>Minhas Habilidades</h2>
        <ul className="sobre-skills">
          <li>Desenvolvimento Frontend com React</li>
          <li>Desenvolvimento Backend com Node.js e Express</li>
          <li>Gerenciamento de banco de dados com MongoDB</li>
          <li>Testes de software e garantia de qualidade (QA)</li>
        </ul>
      </div>
    </div>
  );
}
