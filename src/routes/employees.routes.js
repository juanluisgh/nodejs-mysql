import {Router} from 'express'
import {getEmployees,createEmployees,updateEmployees,deleteEmployees,getEmployee} from '../controllers/employees.controllers.js'
const router=Router()
router.get('/Empleados',getEmployees)
router.get('/Empleados/:id',getEmployee)
router.post('/Empleados',createEmployees)
router.put('/Empleados/:id',updateEmployees) //para actualizar
router.delete('/Empleados/:id',deleteEmployees)
export default router