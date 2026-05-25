# TravelOps — Plataforma de Gestão Logística de Pessoas

## Objetivo do Projeto

Construir uma plataforma backend profissional para gestão logística de pessoas, focada em:

- hospedagem
- viagens
- deslocamentos
- vendors
- aprovações
- custos
- integrações externas

O projeto servirá para:

- estudo backend moderno
- preparação para entrevistas senior Node.js
- portfólio profissional
- uso real no contexto operacional da empresa

O frontend será desenvolvido futuramente em Angular consumindo esta API.

---

# Objetivos Técnicos

Este projeto será utilizado para estudar e praticar:

- Node.js moderno
- TypeScript
- APIs REST profissionais
- Clean Architecture
- SOLID
- Redis
- Filas e eventos
- Docker
- CI/CD
- Observabilidade
- Integrações externas
- Sistemas de alto volume

---

# Stack Principal

## Backend

- Node.js
- TypeScript
- Fastify

---

## Banco de Dados

- PostgreSQL

---

## ORM

- Prisma

---

## Cache / Filas

- Redis
- BullMQ

---

## Testes

- Jest

---

## Infraestrutura

- Docker
- Docker Compose
- GitHub Actions

---

# Arquitetura

## Estratégia

Iniciar como:

```txt
Monólito Modular
```

Com separação clara de domínios.

---

# Estrutura Inicial

```txt
src/
 ├── modules/
 │    ├── auth/
 │    ├── users/
 │    ├── vendors/
 │    ├── travels/
 │    ├── hotels/
 │    ├── flights/
 │    ├── transports/
 │    ├── approvals/
 │    ├── notifications/
 │    └── reports/
 │
 ├── shared/
 ├── infra/
 ├── config/
 └── main/
```

---

# Regras Arquiteturais

## Utilizar:

- SOLID
- Clean Architecture
- Repository Pattern
- Service Layer
- DTOs
- Dependency Injection

---

# Conceito Principal do Sistema

## Fluxo básico

```txt
Vendor
↓
Solicitação de viagem
↓
Reserva de hotel
↓
Reserva de voo
↓
Solicitação de transporte
↓
Aprovação
↓
Execução da viagem
↓
Histórico e relatórios
```

---

# FASE 1 — Setup Inicial

## Objetivos

Criar base sólida do backend.

---

## Implementar

### Configuração inicial

- Fastify
- TypeScript
- ESLint
- Prettier
- tsup
- dotenv

---

## Configurar

### Docker

Containers:

- api
- postgres
- redis

---

## Criar

### Health Check

```http
GET /health
```

---

# FASE 2 — Autenticação

## Objetivos

Implementar autenticação profissional.

---

## Funcionalidades

### Usuários

- cadastro
- login
- perfil

---

## Utilizar

- JWT
- bcrypt

---

## Endpoints

```http
POST /auth/register
POST /auth/login
GET /me
```

---

# FASE 3 — Vendors

## Objetivos

Gerenciar pessoas/viajantes.

---

## Campos sugeridos

```txt
id
name
email
phone
document
company
status
```

---

## Endpoints

```http
GET /vendors
GET /vendors/:id
POST /vendors
PUT /vendors/:id
DELETE /vendors/:id
```

---

# FASE 4 — Gestão de Viagens

## Objetivos

Criar núcleo principal do sistema.

---

## Entidade Travel

### Campos

```txt
id
vendorId
origin
destination
startDate
endDate
status
estimatedCost
notes
```

---

## Status

```txt
REQUESTED
APPROVED
BOOKED
IN_PROGRESS
FINISHED
CANCELLED
```

---

## Endpoints

```http
GET /travels
GET /travels/:id
POST /travels
PUT /travels/:id
```

---

# FASE 5 — Hospedagem

## Objetivos

Gerenciar hotéis.

---

## Funcionalidades

- cadastro hotel
- reserva
- checkin
- checkout

---

## Campos

```txt
hotelName
address
city
checkIn
checkOut
cost
```

---

# FASE 6 — Transportes

## Objetivos

Gerenciar deslocamentos.

---

## Tipos

```txt
UBER
TAXI
TRANSFER
RENTAL_CAR
```

---

## Funcionalidades

- origem
- destino
- distância
- custo estimado

---

# FASE 7 — Integrações Externas

## Objetivos

Simular ambiente corporativo real.

---

# Integrações

## Google Maps API

### Funcionalidades

- cálculo de distância
- tempo estimado
- geolocalização

---

## ViaCEP

### Funcionalidades

- busca automática de endereço

---

# Implementar

## Resiliência

- retry
- timeout
- fallback
- logs de erro

---

# FASE 8 — Redis Cache

## Objetivos

Melhorar performance.

---

# Cachear

## Dados

- hotéis mais acessados
- viagens recentes
- dashboards
- vendors ativos

---

# Aprender

## Conceitos

- TTL
- cache invalidation
- cache aside
- distributed cache

---

# FASE 9 — Filas e Eventos

## Objetivos

Processamento assíncrono.

---

# Utilizar

- BullMQ
- Redis

---

# Eventos

## Exemplos

### Quando criar viagem

Executar:

- envio de email
- notificação
- atualização dashboard
- geração de auditoria

---

# Conceitos

## Aprender

- jobs
- retries
- dead letter
- async processing

---

# FASE 10 — Aprovações

## Objetivos

Fluxo corporativo.

---

# Fluxo

```txt
Solicitado
↓
Aguardando aprovação
↓
Aprovado
↓
Reservado
↓
Concluído
```

---

# Regras

## Implementar

- aprovação por usuário
- histórico
- observações
- rejeição

---

# FASE 11 — Logs e Observabilidade

## Objetivos

Simular ambiente profissional.

---

# Implementar

## Logs estruturados

Adicionar:

- requestId
- userId
- execution time
- error tracking

---

# Ferramentas

Pode utilizar:

- Pino
- Winston

---

# FASE 12 — Testes

## Objetivos

Garantir qualidade.

---

# Implementar

## Testes unitários

Cobrir:

- services
- use cases

---

## Testes de integração

Cobrir:

- rotas
- autenticação
- banco

---

# FASE 13 — CI/CD

## Objetivos

Automação básica.

---

# GitHub Actions

## Pipeline

- install
- lint
- test
- build

---

# FASE 14 — Documentação

## Objetivos

Criar projeto profissional.

---

# Criar

## Swagger/OpenAPI

Documentar:

- rotas
- payloads
- autenticação

---

# README profissional

Adicionar:

- arquitetura
- setup
- docker
- endpoints
- regras do sistema

---

# Conceitos Importantes para Estudo

## Backend

- event loop
- async/await
- streams
- filas
- concorrência

---

## Arquitetura

- monolito modular
- microsserviços
- SOLID
- Clean Architecture

---

## APIs

- REST
- versionamento
- idempotência
- status HTTP

---

## Performance

- Redis
- índices
- paginação
- cache

---

# Roadmap Futuro

## Frontend Angular

Será desenvolvido posteriormente.

---

## Funcionalidades previstas

- dashboard operacional
- agenda de viagens
- mapa/logística
- fluxo de aprovações
- relatórios
- gestão financeira

---

# Objetivo Final

Ao concluir o projeto, o sistema deverá demonstrar:

- arquitetura backend moderna
- integrações robustas
- uso correto de Redis
- processamento assíncrono
- observabilidade
- qualidade de código
- boas práticas backend
- capacidade de atuar em sistemas corporativos de alta complexidade

---

# Meta Principal

Construir um backend profissional enquanto aprende conceitos modernos utilizados em empresas de grande porte.