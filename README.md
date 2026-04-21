# LanMsg

Aplicação web simples criada para demonstração acadêmica de deploy em servidor Linux com Docker, acessível em rede local (LAN).

O objetivo não é a aplicação em si — é demonstrar na prática como subir um serviço real em um servidor CentOS dentro de uma VM, e permitir que qualquer dispositivo na mesma rede acesse pelo navegador, sem instalar nada.

---

## Sobre

Projeto desenvolvido como seminário prático para a disciplina de Sistemas Operacionais, no curso de Análise e Desenvolvimento de Sistemas — FATEC São Sebastião.

A aplicação em si é intencionalmente simples: um formulário para enviar mensagens e uma página para listar todas as mensagens enviadas, salvas em banco de dados PostgreSQL. O foco está na infraestrutura, não na aplicação.

---

## O que é demonstrado

- Sistema operacional de servidor (CentOS Stream 10)
- Virtualização com VirtualBox em modo Bridge
- Containerização com Docker e Docker Compose
- Deploy de aplicação Spring Boot
- Banco de dados PostgreSQL em container
- Frontend servido via Nginx
- Acesso simultâneo por vários dispositivos na mesma rede local

---

## Tecnologias

| Tecnologia | Uso |
|---|---|
| Java 21 | Linguagem do backend |
| Spring Boot 3.4 | Framework REST |
| Spring Data JPA | Persistência |
| PostgreSQL | Banco de dados |
| Lombok | Redução de boilerplate |
| HTML, CSS e JavaScript | Frontend estático |
| Nginx | Servidor do frontend |
| Docker / Docker Compose | Containerização e orquestração |
| CentOS Stream 10 | Sistema operacional do servidor |

---

## Estrutura

```
LanMsg/
├── api/               # Backend Spring Boot
│   ├── src/
│   ├── pom.xml
│   └── Dockerfile
├── frontend/          # Frontend estático
│   ├── index.html
│   └── mensagens.html
└── docker-compose.yml
```

---

## Endpoints

| Método | Rota | Descrição |
|---|---|---|
| POST | `/api/mensagens` | Salva uma mensagem |
| GET | `/api/mensagens` | Lista todas as mensagens |

---

## Como rodar

```bash
# Clone o repositório
git clone https://github.com/LS-PLuka/lanmsg.git
cd lanmsg

# Sobe tudo
docker compose up --build
```

Acesse:
- **Frontend:** `http://localhost`
- **API:** `http://localhost:8080/api/mensagens`

---

## Acesso em rede local

Quando rodando em uma VM com rede em modo Bridge, qualquer dispositivo na mesma rede acessa pelo IP da VM:

```
http://192.168.1.25
```

Sem instalar nada nos outros dispositivos.
