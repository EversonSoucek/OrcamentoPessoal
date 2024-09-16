import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from "../Firebase"; 
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Despesas() {
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [user] = useAuthState(auth); 

  const handleAddDespesa = async (e) => {
    e.preventDefault();
    if (user) {
      try {
        await addDoc(collection(db, 'despesas'), {
          userId: user.uid,
          valor: parseFloat(valor),
          descricao,
          timestamp: new Date(),
        });
        setValor('');
        setDescricao('');
        alert('Despesa adicionada com sucesso!');
      } catch (error) {
        console.error('Erro ao adicionar despesa: ', error);
      }
    }
  };

  return (
    <div>
      <h2>Adicionar Despesa</h2>
      <form onSubmit={handleAddDespesa}>
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
        <button type="submit">Adicionar Despesa</button>
      </form>
    </div>
  );
}
