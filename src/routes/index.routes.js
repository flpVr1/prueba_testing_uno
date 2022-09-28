import {Router} from "express";
import {ping} from '../controllers/index.controller.js'

const router = Router()

// Confirmamos la conexión a la base de datos y le pasamos un dato para verificar.
router.get('/ping', ping);

export default router