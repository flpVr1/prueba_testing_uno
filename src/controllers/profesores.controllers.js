// Aquí se alojan los controladores del CRUD
import { pool} from "../db.js"

export const getProfesores = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM profesores')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo inesperado ocurrió'
        })
    }
}

export const getProfesor = async (req, res) => {
    try {
        console.log(req.params.id)
        const [rows] = await pool.query('SELECT * FROM profesores WHERE id = ?', [req.params.id])
        console.log(rows)

        if (rows.length <= 0 ) return res.status(404).json({
        message: 'Profesor no encontrado'
        })

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Oops, algo salió mal'
        })
    }
}

export const createProfesores = async (req, res) => {
    const {rut, nombre, apellido} = req.body

    try {   
        const [rows] = await pool.query('INSERT INTO profesores (rut, nombre, apellido) VALUES (?, ?, ?)', [rut, nombre, apellido])
        res.send({
            id: rows.insertId,
            rut,
            nombre,
            apellido
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Oops, algo salió mal'
        })
    }
}

export const deleteProfesores = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM profesores WHERE id = ?', [req.params.id])

        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Profesor no encontrado'
        })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Lo sentimos, algo salió mal'
        })
    }
}

export const updateProfesores = async (req, res) => {
    const {id} = req.params
    const {rut, nombre, apellido} = req.body
    
    try {
        const [result] = await pool.query('UPDATE profesores SET rut = ?, nombre = IFNULL(?, nombre), apellido = IFNULL(?, apellido) WHERE id = ?', [rut, nombre, apellido, id])

        console.log(result)

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Profesor no encontrado'
        })

        const [rows] = await pool.query('SELECT * FROM profesores WHERE id = ?', [id])

        res.json(rows[0]) 
    } catch (error) {
        return res.status(500).json({
            message: "Lo sentimos, algo salió mal"
        })
    }
}