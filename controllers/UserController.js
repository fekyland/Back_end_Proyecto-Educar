import User  from "../models/User.js";


const UserController = {};

UserController.getAll = async (req, res) => {
   console.log(req.params)
   try {
      const users = await User.find();

      return res.status(200).json({
         success: true,
         message: "Get all users retrieved successfully",
         data: users,
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Error retrieving users",
         error: error.message,
      });
   }
};

UserController.getById = async (req, res) => {
   try {
      const id = req.params.id
      const users = await User.findOne({_id:id});

      console.log(users)
      return res.status(200).json({
         success: true,
         message: "id retrieved successfully",
         data: users,
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Error retrieving users",
         error: error.message,
      });
   }
};

UserController.BuyUserCursos = async (req, res) => {
   console.log(req.params);
   try {
      //busca usuario
     const user = await User.findById(req.params.userId);
     console.log(user)
     //const movie = req.params.movieId;
     const curso = req.body;
     //console.log("validacion de alquiler")
     //console.log(movie)
     //const match = user.movies.find((m) => m == movie);
    const match = false;
     if (match) {
       res.json({
         message: "User already have this movie",
         inserted: false,
       });
     } else {
      //actualiza usuario en campo cursos comprados
       const updatedUser = await User.updateOne(
         { _id: req.params.userId },
         { $push: { cursos_comprados: curso} }
       );
       res.json({
         message: "Curso Rented successfully",
         data: updatedUser,
         inserted: true,
         cursos_comprados: user.cursos_comprados,
       });
     }
   } catch (error) {
     res.status(500).json({ message: error.message });
   }
  };
   UserController.deleteById = async (req,res) => {
    try {
       const deletedOne = await User.deleteOne({_id: req.params.id});
       res.json({
          message: `User ${req.params.id} has been DELETED`,
          data: deletedOne,
       });
    } catch (error){
       res.status(500).send ("internal error");
    };
 }
UserController.updateById = async (req, res) => {
   console.log(req.body)
   try {    
      const id = req.params.id
      await User.findOneAndUpdate({_id:id},req.body);
        
     return res.status(200).json({
       success: true,
       message: 'Update User successfully',
     })
 
   } catch (error) {
     return res.status(500).json({
       success: false,
       message: 'Error updating User',
       error: error?.message || error,
     })
   }
 }
 UserController.getByEmail= async (req, res) => {
   try {
      const {email} = req.params
      const cursos = await User.find({email:email});

     // console.log(curso)
      return res.status(200).json({
         success: true,
         message: "usuario por email retrieved successfully",
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
export default UserController;