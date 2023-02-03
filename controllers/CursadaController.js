import Cursada from "../models/Cursada.js"


const CursadaController = {}
CursadaController.register = async (req, res) => {
  console.log(req.body)
  try {
    const { name, email, title, description, video } = req.body
    // crear curso
    const newCursada = {
      name: name,
      email: email,
      title: title,
      description: description,
      video: video,
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
CursadaController.getByEmail= async (req, res) => {
    try {
       const {email} = req.body
       const cursos = await Cursada.find({email:email});
 
      // console.log(curso)
       return res.status(200).json({
          success: true,
          message: "cursos por profesor retrieved successfully",
          data: cursos,
       });
    } catch (error) {
       return res.status(500).json({
          success: false,
          message: "Error retrieving cursos",
          error: error.message,
       });
    }
 };

 CursadaController.getAll = async (req, res) => {
    console.log(req.params)
    try {
       const cursos = await Cursada.find();
 
       return res.status(200).json({
          success: true,
          message: "Get all cursos retrieved successfully",
          data: cursos,
       });
    } catch (error) {
       return res.status(500).json({
          success: false,
          message: "Error retrieving cursos",
          error: error.message,
       });
    }
 };

 CursadaController.getById = async (req, res) => {
    try {
       const id = req.params.id
       const curso = await Cursada.findOne({_id:id});
 
      // console.log(curso)
       return res.status(200).json({
          success: true,
          message: "id retrieved successfully",
          data: curso,
       });
    } catch (error) {
       return res.status(500).json({
          success: false,
          message: "Error retrieving cursos",
          error: error.message,
       });
    }
 };
 CursadaController.deleteById = async (req,res) => {
    try {
       const deletedOne = await Cursada.deleteOne({_id: req.params.id});
       res.json({
          message: `Cursada ${req.params.id} has been DELETED`,
          data: deletedOne,
       });
    } catch (error){
       res.status(500).send ("internal error");
    };
 }
export default CursadaController;