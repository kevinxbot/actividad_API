const express = require('express');
const app = express();

app.use(express.json());

// Importar rutas
const projectsRoutes = require('./routes/projects.routes');
const tasksRoutes = require('./routes/tasks.routes');
const peopleRoutes = require('./routes/people.routes');

// Usar rutas con prefijos
app.use('/api/v1/projects', projectsRoutes);
app.use('/api/v1/tasks', tasksRoutes);
app.use('/api/v1/people', peopleRoutes);

app.get('/', (req, res) => {
    res.send('API Gestor de Proyectos funcionando 🚀');
});

module.exports = app;
