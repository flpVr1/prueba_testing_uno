import { Router } from "express";
import {getProfesores, createProfesores, updateProfesores, deleteProfesores, getProfesor} from '../controllers/profesores.controllers.js'

const router = Router()

// Rutas para CRUD
router.get('/profesores', getProfesores)

router.get('/profesores/:id', getProfesor)

router.post('/profesores', createProfesores)

router.patch('/profesores/:id', updateProfesores)

router.delete('/profesores/:id', deleteProfesores)

export default router