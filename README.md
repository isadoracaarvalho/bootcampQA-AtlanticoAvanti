# 🧪 Projeto Bugzilla – Automação de Testes com Cypress

Repositório desenvolvido pela equipe **Bugzilla** durante o **Bootcamp de Quality Assurance da Escola Atlântico Avanti**.

Este projeto reúne:
- As **documentações da Fase 1** (testes manuais);
- E a **automação de testes da Fase 2** (usando Cypress), aplicada ao sistema <span><a href="https://www.saucedemo.com/" target="_blank" rel="noopener noreferrer"><strong>Swag Labs</strong></a></span>.
---

## 🧭 Estrutura do Repositório

| Pasta | Conteúdo |
|-------|-----------|
| `/docs` | Documentações da Fase 1 (Plano de Testes, Especificação, Relatório de Testes e Relatório de Bugs). |
| `/cypress/e2e/login` | Testes automatizados do módulo de **Autenticação (Login)**. |
| `/cypress/e2e/checkout` | Testes automatizados do módulo de **Fluxo de Compras (Checkout)**. |
| `cypress.config.js` | Configurações principais do Cypress (URL base, dimensões, gravação de vídeo, etc.). |
| `package.json` | Dependências e scripts do projeto. |

---

## 🎯 Objetivo do Projeto

Demonstrar a aplicação prática dos conhecimentos de **Quality Assurance (QA)**, abordando as etapas de:

1. **Planejamento e Estratégia de Testes**  
2. **Execução e Registro de Resultados**  
3. **Análise de Métricas e Relatórios de Bugs**  
4. **Automação de Casos de Teste Funcionais com Cypress**

---

## 💻 Cenários Automatizados

### 🔹 **Autenticação (Login)**
| ID | Caso de Teste | Responsável |
|----|----------------|-------------|
| CT001 | Login com credenciais válidas | Fernanda |
| CT002 | Login com usuário bloqueado | Isadora |
| CT005 | Login com senha inválida | Emily |

### 🔹 **Fluxo de Compras (Checkout)**
| ID | Caso de Teste | Responsável |
|----|----------------|-------------|
| CT018 | Checkout com todos os dados válidos | Leandro |
| CT019 | Checkout com dados inválidos | João |
| CT021 | Prosseguir no checkout deixando cada campo obrigatório em branco, um de cada vez | Isadora |

---

## ⚙️ Tecnologias e Ferramentas Utilizadas

- [**Cypress**](https://www.cypress.io/) – Framework de automação E2E  
- **Node.js** – Ambiente de execução JavaScript  
- **npm** – Gerenciador de pacotes  
- **Git & GitHub** – Versionamento e colaboração em equipe  
- **Google Docs / Sheets** – Apoio à documentação manual  

---

## 📝 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) (instalado junto com o Node)
- [Git](https://git-scm.com/)

Verifique as versões com:

```bash
node -v
npm -v
git --version
```

## 🚀 Como Executar o Projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/isadoraccarvalho/bootcampQA-AtlanticoAvanti.git
cd bootcampQA-AtlanticoAvanti
```

### 2️⃣ Instalar as dependências
```bash
npm install
```

### 3️⃣ Executar o Cypress em modo interativo
```bash
npx cypress open
```

💡 Este comando abrirá a interface gráfica do Cypress.
Escolha “E2E Testing” → selecione o navegador desejado → clique no teste que deseja executar.

### 4️⃣ Executar em modo headless (sem interface gráfica)
```bash
npx cypress run
```

## 👥 Equipe Bugzilla

| Integrante | Função |
|-------------|--------|
| [Isadora Carvalho](https://github.com/IsadoraCarvalho) | QA / Automação e Documentação |
| [Fernanda Tiyomi](https://github.com/FernandaTiyomi) | QA / Automação |
| [Emily Carla](https://github.com/EmilyCarla) | QA / Automação |
| [João Gilberto](https://github.com/JoaoGilberto) | QA / Automação |
| [Leandro Freire](https://github.com/LeandroFreire) | QA / Automação |


## 🧠 Sobre o Bootcamp

O **Bootcamp Atlântico Avanti – Quality Assurance** tem como objetivo capacitar profissionais na área de **garantia da qualidade de software**, abordando **testes manuais e automatizados** com foco em **metodologias ágeis** e **boas práticas de QA**.

⭐ Desenvolvido com dedicação pela equipe **Bugzilla** durante o **Bootcamp QA - Atlântico Avanti**.


