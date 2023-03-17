import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'
import {PORT} from './config.js'
const app=express()
app.use(express.json())
app.use(indexRoutes)
app.use("/api",employeesRoutes)
app.use(function (req, res, next) {
    res.status(404).json({
        message: 'Ruta no encontrada'
    })
  });
  export default app;