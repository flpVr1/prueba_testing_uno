// Aqui estará la conexión a nuestra base de datos
// También podemos exportarla aquí mismo
import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'prueba_testing'
})