import {Router} from "express"
import {crearAlumno, listarAlumnos, listarAlumnoPorId, actualizarAlumno, eliminarAlumno} from "../controladores/alumnos"

export const alumnos_router = Router();

alumnos_router.route("/alumnos").post(crearAlumno).get(listarAlumnos);
alumnos_router.route("/alumnos/:id").get(listarAlumnoPorId).put(actualizarAlumno).delete(eliminarAlumno);