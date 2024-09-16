import React, { useEffect, useState } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../../components/Firebase'; 
import { useAuthState } from 'react-firebase-hooks/auth';
import Receitas from '../../components/Receitas/Receitas';
import Despesas from '../../components/Despesas/Despesas';
import "./DashboardPage.css"
import Header from '../../components/Header/Header';

export default function DashboardPage() {
    const [user] = useAuthState(auth);
    const [receitas, setReceitas] = useState(0);
    const [despesas, setDespesas] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            const receitasQuery = query(collection(db, 'receitas'), where('userId', '==', user.uid));
            const despesasQuery = query(collection(db, 'despesas'), where('userId', '==', user.uid));

            const unsubscribeReceitas = onSnapshot(receitasQuery, (snapshot) => {
                const totalReceitas = snapshot.docs.reduce((total, doc) => total + doc.data().valor, 0);
                setReceitas(totalReceitas);
            });

            const unsubscribeDespesas = onSnapshot(despesasQuery, (snapshot) => {
                const totalDespesas = snapshot.docs.reduce((total, doc) => total + doc.data().valor, 0);
                setDespesas(totalDespesas);
            });

            setLoading(false);

            return () => {
                unsubscribeReceitas();
                unsubscribeDespesas();
            };
        }
    }, [user]);

    const saldoRestante = receitas - despesas;

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <>
            <Header />
            <div className="dashboard-container">
                <h1>Resumo do Orçamento</h1>
                <div className="summary">
                    <p><strong>Total de Receitas:</strong> R${receitas.toFixed(2)}</p>
                    <p><strong>Total de Despesas:</strong> R${despesas.toFixed(2)}</p>
                    <p><strong>Saldo Restante:</strong> R${saldoRestante.toFixed(2)}</p>
                </div>

                <Receitas />
                <Despesas />
            </div>
        </>
    );
}
