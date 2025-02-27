# 🏠 Desafio Anfitriões de Aluguel

Este é um projeto desenvolvido para o **Desafio Anfitriões de Aluguel**, uma aplicação responsiva que permite listar acomodações, filtrá-las por cidade e favoritar as preferidas. O projeto utiliza **Flask** no backend e **React** no frontend, sendo executado via **Docker**.

## 🚀 Tecnologias Utilizadas

### **Backend** (API REST com Flask)

- **Python 3.9**
- **Flask**
- **Flask-CORS**
- **SQLite** (para armazenamento de dados temporário)

### **Frontend** (Interface do Usuário)

- **React**
- **Node.js 14**
- **Bootsrap**

### **Infraestrutura**

- **Docker & Docker Compose**

## 📋 Requisitos

Antes de iniciar, certifique-se de ter os seguintes requisitos instalados:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## ⚙️ Como Rodar o Projeto no Docker

1. **Clone o repositório:**

   ```sh
   git clone https://github.com/seu-usuario/desafio-anfitrioes-aluguel.git
   cd desafio-anfitrioes-aluguel
   ```

2. **Construa e execute os containers:**

   ```sh
   docker compose up --build
   ```

3. **Acesse a aplicação:**

   - Backend: `http://localhost:5000`
   - Frontend: `http://localhost:3000`

## 🌟 Funcionalidades Principais

- **Listar acomodações** disponíveis
- **Filtrar acomodações por cidade**
- **Favoritar acomodações** preferidas
- **Interface responsiva**, adaptada para desktop e mobile

## 📡 Endpoints da API

| Método | Rota                                | Descrição                                     |
| ------ | ----------------------------------- | --------------------------------------------- |
| GET    | `/acomodacoes`                      | Retorna uma lista de acomodações              |
| GET    | `/acomodacoes/{id}`                 | Retorna detalhes de uma acomodação específica |
| GET    | `/acomodacoes?cidade=Florianópolis` | Filtra acomodações por cidade                 |

---

Se precisar de mais alguma informação ou ajuste, me avise! 🚀

