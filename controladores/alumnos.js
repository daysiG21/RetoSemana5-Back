const alumnos =[]

export const crearAlumno=(req, res)=> {
  alumnos.push(req.body);
  return res.json({
    content:alumnos[alumnos.length-1],
  });
};

export const listarAlumnos=(req, res)=>{
  return res.json ({
    content:alumnos,
  });
};

export const listarAlumnoPorId = (req, res)=>{
 const {id} = req.params
 if(alumnos[id-1]){
  return res.json({
    content:alumnos[id-1]
  })
 }
 else{
  return res.status(404).json({
    message:"No existe el alumno"
  })
 }
 
};

export const actualizarAlumno = (req,res) => {
  const {id} = req.params
  if(alumnos[id-1]){
    alumnos[id-1] = req.body
    return res.json({
      content: alumnos[id-1]
    })
  }
  return res.status(404).json({
    content: `El alumno no existe`
  })
}

export const eliminarAlumno = (req,res) => {
  const {id} = req.params
  if(alumnos[id-1]){
    const alumno_eliminado = alumnos.splice(id-1,1)
    return res.json({
      content: alumno_eliminado
    })
  }
  return res.status(404).json({
    content: `El aluno no existe`
  })
}