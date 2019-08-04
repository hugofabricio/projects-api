# Rocketseat Desafio 01 - Conceitos do NodeJS

Aplicação desenvolvida para armazenamento de projetos e tarefas.projetos e suas tarefas com express.

## Rotas

- `GET /projects`
- `GET /projects/:id`
- `POST /projects`
- `PUT /projects/:id`
- `DELETE /projects/:id`
- `POST /projects/:id/tasks`

## Middlewares

- Criado um middleware que é utilizado em todas as rotas que recebem o parâmetro ID do projeto e verifica se o projeto existe, caso não encontrado retorna um erro 404, caso sucesso atribui o projeto a requisição.

- Criado um middleware global que contabiliza o número de requisições realizadas na aplicação.
