const { projects } = require('../data/data');

const getAllProjects = (req, res) => res.json(projects);

const getProjectById = (req, res) => {
    const project = projects.find(p => p.id == req.params.id);
    project ? res.json(project) : res.status(404).json({ message: "Proyecto no encontrado" });
};

const createProject = (req, res) => {
    const newProject = { id: projects.length + 1, ...req.body };
    projects.push(newProject);
    res.status(201).json({ message: "Proyecto creado", newProject });
};

const updateProject = (req, res) => {
    const project = projects.find(p => p.id == req.params.id);
    if (project) {
        Object.assign(project, req.body);
        res.json({ message: "Proyecto actualizado", project });
    } else {
        res.status(404).json({ message: "Proyecto no encontrado" });
    }
};

const deleteProject = (req, res) => {
    const index = projects.findIndex(p => p.id == req.params.id);
    if (index !== -1) {
        projects.splice(index, 1);
        res.json({ message: "Proyecto eliminado" });
    } else {
        res.status(404).json({ message: "Proyecto no encontrado" });
    }
};

module.exports = { getAllProjects, getProjectById, createProject, updateProject, deleteProject };
