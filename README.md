# 🏥 API de Preenchimento de Produtos

Esta é uma API desenvolvida em **Node.js** com **TypeScript** para preencher automaticamente a descrição, categoria e código de barras (EAN) de produtos no banco de dados. O projeto utiliza **Azure** para hospedagem do banco de dados e integração com a API do ChatGPT para gerar os dados.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript no servidor.
- **TypeScript** - Superset do JavaScript para tipagem estática.
- **Express** - Framework web rápido e minimalista para Node.js.
- **Knex.js** - Query builder para interação com o banco de dados.
- **SQLite / SQL Server** - Banco de dados utilizado no Azure.
- **Dotenv** - Gerenciamento de variáveis de ambiente.

## 📌 Funcionalidades

✅ Buscar produtos sem descrição no banco de dados  
✅ Gerar descrição, categoria e EAN via API do ChatGPT  
✅ Validar a categoria com uma lista pré-definida  
✅ Atualizar o banco de dados com os novos dados

## 📂 Estrutura do Projeto

## Structure

    📦 projeto

    │-- 📂 src │

        ├── 📂 config # Configuração do banco de dados │

        ├── 📂 controllers # Controladores das requisições │

        ├── 📂 services # Serviços externos (API do ChatGPT) │

        ├── 📂 utils # Funções auxiliares (validação de categorias) │

    ├── 📜 app.ts # Arquivo principal da aplicação │

    ├── 📜 routes.ts # Definição das rotas da API

    │-- 📜 .env # Variáveis de ambiente (NÃO COMITAR!)

    │-- 📜 .gitignore # Arquivos ignorados pelo Git

    │-- 📜 package.json # Dependências do projeto

    │-- 📜 README.md # Documentação do projeto
