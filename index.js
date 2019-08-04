const express = require("express");

const server = express();

server.use(express.json());

const projects = [
  {
    id: "1",
    title: "Projeto da FIAP",
    tasks: []
  },
  {
    id: "2",
    title: "Projeto da Rocketseat",
    tasks: []
  },
  {
    id: "3",
    title: "Projeto da BRZ Digital",
    tasks: []
  }
];

let appRequests = 0;

function checkProjectExists(req, res, next) {
  const { id } = req.params;
  const project = projects.find(project => project.id == id);

  if (!project) {
    return res.status(404).json({ error: "Project not found" });
  }

  req.project = project;

  return next();
}

function countRequests(req, res, next) {
  appRequests++;
  console.log(`Requests: ${appRequests}`);
  return next();
}

server.use(countRequests);

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.get("/projects/:id", checkProjectExists, (req, res) => {
  return res.json(req.project);
});

server.post("/projects", (req, res) => {
  const { id, title } = req.body;

  projects.push({ id, title, tasks: [] });

  return res.json(projects);
});

server.put("/projects/:id", checkProjectExists, (req, res) => {
  const { title } = req.body;

  req.project.title = title;

  return res.json(projects);
});

server.delete("/projects/:id", checkProjectExists, (req, res) => {
  projects.splice(projects.indexOf(req.project), 1);

  return res.send();
});

server.post("/projects/:id/tasks", checkProjectExists, (req, res) => {
  const { title } = req.body;

  req.project.tasks.push(title);

  return res.json(projects);
});

server.listen(3000);
