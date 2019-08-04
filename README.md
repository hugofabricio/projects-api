# Rocketseat Challenge 01 - NodeJS Concepts

NodeJS Express App to create projects and tasks.

## Routes

- `GET /projects`
- `GET /projects/:id`
- `POST /projects`
- `PUT /projects/:id`
- `DELETE /projects/:id`
- `POST /projects/:id/tasks`

## Middlewares

- Middleware used in all routes that receive Project ID, if project does not founded returns error 404, in success case, assign the project to req.project.

- Global Middleware to sum number of reqs on app.
