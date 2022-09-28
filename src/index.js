// Configuración del servidor de manera básica
import express from 'express'
import profesoresRoutes from './routes/profesores.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())
// Aquí es donde usaremos nuestros archivos creados dentro de la carpeta routes

app.use(indexRoutes)
app.use('/api', profesoresRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Punto final no encontrado'
    })
})

// Condición para confirmar que el servidor si está "escuchando"
app.listen(3000)
console.log('Server running on port 3000')