// Datos iniciales simulados (sin base de datos)
const projects = [
    { id: 1, name: "Plataforma Educativa", description: "Sistema de cursos online" }
];

const tasks = [
    { id: 1, title: "Diseñar UI", description: "Pantalla principal", status: "todo", projectId: 1, assignedTo: 1 }
];

const people = [
    { id: 1, name: "William Andres Mera", email: "williamandresmera@gmail.com.com", role: "Líder Técnico" }
];

module.exports = { projects, tasks, people };
