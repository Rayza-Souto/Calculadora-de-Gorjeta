# To-Do List — Projeto de QA

## 📌 Descrição
Aplicação simples de calculadora de gorjeta, desenvolvida em JavaScript puro, com foco em práticas de **Quality Assurance (QA)**, validação de dados, testes manuais e testes de borda.

---

## 🎯 Objetivo do Projeto
Praticar:
- Criação de casos de teste manuais
- Testes de borda (valores limite e entradas inválidas)
- Execução e documentação de testes
- Identificação, registro e correção de bugs
- Organização de repositório com foco em QA

---

## 🧩 MVP (Minimum Viable Product)

Funcionalidades incluídas:
- Informar valor da conta
- Informar porcentagem de gorjeta
- Calcular valor da gorjeta
- Calcular valor total a pagar
- Exibir mensagens de erro para entradas inválidas

Funcionalidades fora do escopo:
- Divisão de conta entre pessoas
- Persistência de dados
- Estilização avançada
- Internacionalização de moeda

---

## 🛠️ Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript (Vanilla JS)

---

## 🧪 Testes

A documentação de testes está localizada na pasta `qa/`.

- Casos de teste: `qa/testes.md`
- Registro de bugs: `qa/bugs.md`

### Tipos de teste aplicados
- Testes funcionais
- Testes manuais
- Testes de borda
- Testes negativos

### Exemplos de testes de borda aplicados
- Valor da conta vazio
- Gorjeta vazia
- Valor da conta igual a 0
- Gorjeta igual a 0
- Valor da conta com vírgula (10,50)
- Letras nos campos
- Erro ao manipular elemento inexistente no DOM

---

## Como Executar o Projeto
1. Clonar o repositório
2. Abrir o arquivo `index.html` no navegador  
   *(ou utilizar Live Server)*

---

## Estrutura do Projeto

```text
├── index.html
├── app.js
├── README.md
└── qa
    ├── testes.md
    └── bugs.md
