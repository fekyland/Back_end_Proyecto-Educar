import Cursada from '../models/Cursada.js'


const CursadaController = {}
//registra una cursada
CursadaController.register = async (req, res) => {
  console.log(req.body)
  try {
    const { name, email, title, description, video, price } = req.body
    // crear curso
    const newCursada = {
      email: email, //email creador del curso
      name: name, //nombre profesor
      title: title,
      description: description,
      video: video,
      price: price,
    }
    await Cursada.create(newCursada)
    return res.status(200).json({
      success: true,
      message: 'Create curso successfully',
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error creating curso',
      error: error?.message || error,
    })
  }
}
CursadaController.updateCursada = async (req, res) => {
  console.log(req.body)
  try {
    const { id,name, email, title, description, video, price } = req.body
    // crear curso
    const newCursada = {
      email: email, //email creador del curso
      name: name, //nombre profesor
      title: title,
      description: description,
      video: video,
      price: price,
      
    }
    await Cursada.findOneAndUpdate({_id:id},{title:newCursada.title,description:newCursada.description,video:newCursada.video,price:newCursada.price})
    return res.status(200).json({
      success: true,
      message: 'curso updated successfully',
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error updating curso',
      error: error?.message || error,
    })
  }
}

// para mapear los cursos propios del user ,despues los comparo con el user ID
CursadaController.getByEmail = async (req, res) => {
  console.log(req.params)
  try {
    const email = req.params.email
    console.log(email)
    const cursada = await Cursada.find({ email: email })
    // console.log(cursos)
    // console.log(curso)
    return res.status(200).json({
      success: true,
      message: 'cursos por profesor retrieved successfully',
      data: cursada,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error retrieving cursos',
      error: error.message,
    })
  }
}
//find all para mapear todos los cursos en la pagina principal
CursadaController.getAll = async (req, res) => {
  console.log(req.params)
  try {
    const cursos = await Cursada.find()

    return res.status(200).json({
      success: true,
      message: 'Get all cursos retrieved successfully',
      results: cursos,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error retrieving cursos',
      error: error.message,
    })
  }
}

CursadaController.getById = async (req, res) => {
  try {
    const id = req.params.id
    const curso = await Cursada.findOne({ _id: id })

    // console.log(curso)
    return res.status(200).json({
      success: true,
      message: 'id retrieved successfully',
      data: curso,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error retrieving cursos',
      error: error.message,
    })
  }
}
CursadaController.deleteById = async (req, res) => {
  try {
    const deletedOne = await Cursada.deleteOne({ _id: req.params.id })
    res.json({
      message: `Cursada ${req.params.id} has been DELETED`,
      data: deletedOne,
    })
  } catch (error) {
    res.status(500).send('internal error')
  }
}

CursadaController.updateById = async (req, res) => {
  console.log(req.body)
  try {
    const id = req.params.id
    await Cursada.findOneAndUpdate({ _id: id }, req.body)

    return res.status(200).json({
      success: true,
      message: 'update curso successfully',
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error actualizando curso',
      error: error?.message || error,
    })
  }
}
//buscador de cursos 
CursadaController.searchByTitle = async (req, res) => {
  try {
    const titlesearch = req.params.title
    console.log(titlesearch)
    const busqueda = await Cursada.find({
      title: { $regex: titlesearch, $options: 'i' },
    })
    console.log(busqueda)
    return res.status(200).json({
      success: true,
      message: 'id retrieved successfully',
      data: busqueda,
    })
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: 'Error cursada not found',
      error: error?.message || error,
    })
  }
}
//compra peliculas y se almacena en el campo orders id
CursadaController.buyById = async (req, res) => {
  
  try {
    const Id = req.params.id
    const order = await Cursada.findById({ _id: Id })
    
    //const match = user.movies.find((m) => m == movie);
    const match = false
    if (match) {
      res.json({
        message: 'User already have this movie',
        inserted: false,
      })
    } else {
      const updatedCursada = await Cursada.updateOne(
        { _id: req.params.id },
        { $push: { orders_id: req.params.userId } },
      )
      res.json({
        message: 'Cursada it`s buyed',
        data: updatedCursada,
        inserted: true,
        orders: order.orders_id,
      })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
//para mapear las peliculas compradas 
CursadaController.findBuyersById = async (req, res) => {
  const Id = req.params.userId
  console.log(Id)
  try {
    const resultado = await Cursada.find({ orders_id: { $in: [Id] } })
    console.log(resultado)
    
    return res.status(200).json({
      success: true,
      message: 'cursos comprados retrieved succesfuly',
      results: resultado,
      
    })
  } catch (error) {
   
      res.status(500).json({ message: error.message })
  }
}
//redirigir si esta comprada por el usuario o no
CursadaController.checkCursada = async (req, res) => {
   const Id = req.params.id
   const userId = req.params.userId
   console.log(Id)
   console.log(userId)
   try {
     const resultado = await Cursada.findOne({ _id:Id, orders_id: userId  })
     console.log(resultado)
     if (resultado === null){
      return res.status(200).json({
         success: true,
         message: 'este curso no esta comprado',
         results: resultado
      })}else{
     return res.status(200).json({
       success: true,
       message: 'este curso esta comprado',
       results: resultado
     })
      }
   } catch (error) {
    
       res.status(500).json({ message: error.message })
   }
 }


export default CursadaController
