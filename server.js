const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Importar rutas
const projectRoutes = require('./src/routes/projects.routes');
const taskRoutes = require('./src/routes/tasks.routes');
const peopleRoutes = require('./src/routes/people.routes');

// Usar rutas con prefijo
app.use('/api/v1/projects', projectRoutes);
app.use('/api/v1/tasks', taskRoutes);
app.use('/api/v1/people', peopleRoutes);

// Ruta raíz
app.get('/', (req, res) => {
    res.send('API funcionando correctamente 🚀');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
