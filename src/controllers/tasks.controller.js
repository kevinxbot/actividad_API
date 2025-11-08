const { tasks } = require('../data/data');

const getAllTasks = (req, res) => res.json(tasks);

const getTaskById = (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    task ? res.json(task) : res.status(404).json({ message: "Tarea no encontrada" });
};

const createTask = (req, res) => {
    const newTask = { id: tasks.length + 1, ...req.body };
    tasks.push(newTask);
    res.status(201).json({ message: "Tarea creada", newTask });
};

const updateTask = (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    if (task) {
        Object.assign(task, req.body);
        res.json({ message: "Tarea actualizada", task });
    } else {
        res.status(404).json({ message: "Tarea no encontrada" });
    }
};

const deleteTask = (req, res) => {
    const index = tasks.findIndex(t => t.id == req.params.id);
    if (index !== -1) {
        tasks.splice(index, 1);
        res.json({ message: "Tarea eliminada" });
    } else {
        res.status(404).json({ message: "Tarea no encontrada" });
    }
};

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask };
