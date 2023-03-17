import {pool} from '../db.js'
export const getEmployees=async (req,res)=>{
    try{
        //throw new Error('Mi error')
        const[filas]=await pool.query('SELECT * FROM empleados')
        res.json(filas)
    } catch{
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}
export const getEmployee=async (req,res)=>{
    try {
        //throw new Error('Error inesperado')
        const [filas]=await pool.query('SELECT * FROM empleados WHERE id=?',[req.params.id])
        if(filas.length<=0) return res.status(404).json({
            message:'Empleado no encontrado'
        })
        res.json(filas[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}
export const createEmployees=async (req,res)=>{
    const {nombre,salario}=req.body
    try {
        const [filas]=await pool.query('INSERT INTO empleados (nombre,salario) VALUES (?,?)',[nombre,salario])
        res.send({
            id: filas.insertId,
            nombre,
            salario
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}
export const deleteEmployees=async (req,res)=>{
    try {
        const [result]=await pool.query('DELETE FROM empleados WHERE id=?',[req.params.id])
        if(result.affectedRows<=0) res.status(404).json({
            message:'Empleado no encontrado'
        }); 
        else res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

export const updateEmployees=async (req,res)=>{
    const {id}=req.params  
    //o también así: const id=req.params.id
    const {nombre,salario}=req.body
    try {
        const [result]=await pool.query('UPDATE empleados SET nombre=IFNULL(?,nombre),salario=IFNULL(?,salario) WHERE id=?',[nombre,salario,id])
        if(result.affectedRows===0) res.status(404).json({
            message:'Empleado no encontrado'
        }); 
        else{
            const [filas]=await pool.query('SELECT * FROM empleados WHERE id=?',[req.params.id])
            res.json(filas[0])
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}
