import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../Firebase';  // Importando o Firestore
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Receitas() {
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [user] = useAuthState(auth);  // Pega o usuário autenticado

  const handleAddReceita = async (e) => {
    e.preventDefault();
    if (user) {
      try {
        await addDoc(collection(db, 'receitas'), {
          userId: user.uid,
          valor: parseFloat(valor),
          descricao,
          timestamp: new Date(),
        });
        setValor('');
        setDescricao('');
        alert('Receita adicionada com sucesso!');
      } catch (error) {
        console.error('Erro ao adicionar receita: ', error);
      }
    }
  };

  return (
    <div>
      <h2>Adicionar Receita</h2>
      <form onSubmit={handleAddReceita}>
        <input
          type="text"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          required
        />
        <button type="submit">Adicionar Receita</button>
      </form>
    </div>
  );
}
