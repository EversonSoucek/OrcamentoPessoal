# Gerenciador de Orçamento Pessoal

## Visão Geral

O **Gerenciador de Orçamento Pessoal** é uma aplicação web desenvolvida com **React** e **Firebase** que permite aos usuários gerenciar suas finanças pessoais. Com este aplicativo, os usuários podem adicionar, editar e excluir receitas e despesas, além de visualizar um resumo atualizado do total de receitas, despesas e o saldo restante.

### Principais Funcionalidades

- **Autenticação**: Login com Firebase Authentication via Google ou email/senha.
- **Gerenciamento de Receitas e Despesas**: Adição, edição e exclusão de entradas de receitas e despesas.
- **Dashboard**: Visualização do total de receitas, despesas e saldo restante.
- **Armazenamento**: Dados persistidos no **Firestore** (Firebase).

---

## Tecnologias Utilizadas

- **React**
- **Firebase Authentication**
- **Firestore**
- **Firebase Hosting**
- **React Firebase Hooks**

---

## Acesse a Aplicação

Você pode acessar a aplicação em produção através do seguinte link:

[Gerenciador de Orçamento Pessoal](https://orcamentopessoal-665b2.firebaseapp.com/login)

---

## Funcionalidades

### 1. Login com Firebase Authentication

Os usuários podem fazer login com sua conta do Google ou email/senha. A autenticação é gerenciada pelo **Firebase Authentication**.

### 2. Gerenciamento de Receitas e Despesas

- **Receitas**: Os usuários podem adicionar, editar e excluir receitas. Todas as entradas são salvas no Firestore com o `userId` do usuário autenticado.
- **Despesas**: Funcionalidade semelhante às receitas, mas para despesas.

### 3. Dashboard

O **Dashboard** exibe um resumo dos totais de receitas, despesas e saldo restante em tempo real, consultando os dados armazenados no Firestore.

---

## Firebase Hosting

A aplicação está hospedada no **Firebase Hosting** e pode ser acessada no seguinte link: https://orcamentopessoal-665b2.firebaseapp.com/login

## Autor

Desenvolvido por [Everson](https://github.com/EversonSoucek)
