import  User  from "../models/User.js";
import  Role from "../models/Role.js";
import { hashSync,compareSync } from "bcrypt";
import  jwt   from "jsonwebtoken";

const AuthController = {};
AuthController.register = async (req, res) => {
   console.log(req.body);
   try {
      const { name, email, password  } = req.body;
      // PASSWORD CODE VALIDATION
      if (password.length < 6) {
         return res.status(500).json({
            success: false,
            message: "Password is shorter than 6 characters",
         });
      }
      const encryptedPassword = hashSync(password, 10);
     // const newRole = {
     //    name: role,
     // };
      
      const newUser = {
         name: name,
         email: email,
         password: encryptedPassword,
         role_id:"63fb31d8a8b468001cbe98f3"


         
        
      };
     
      await User.create(newUser);
      return res.status(200).json({
         success: true,
         message: "Create user successfully",
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Error creating usuario",
         error: error?.message || error,
      });
   }
};
AuthController.login = async (req, res) => {
   console.log(req.headers);
   try {
      const { email, password } = req.body;  //le manda el body   
      //Validación de lo que me llega por body
     console.log(req.body)
      if (!email || !password) {
         return res.status(400).json({
            success: false,
            message: "Email and password are required",
         });
      }
    
      const user = await User.findOne({ email: email }).populate('role_id')
      console.log(user)
     // to do manejar si no existe usuario
      



      const isValidPassword = compareSync(password, user.password);
      if (!isValidPassword) {
         return res.status(401).json({
            success: false,
            message: "Bad Credentials",
         });
        
      }
      
     
      const token = jwt.sign(
         { user_id: user._id, user_role: user.role_id.name },
         process.env.JWT_SECRET,
         { expiresIn: "20m" }
         
      );
     
      return res.status(200).json({
         success: true,
         message: `Logged as ${user.role_id.name}`,
         token: token,
         role: user.role_id.name,
         id: user._id,
         email:user.email,
         name:user.name
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "User Login failed",
         error: error.message
      });
   }
};
AuthController.updateUser = async (req, res) => {
   
   try {
     const { id,name, email, password } = req.body
     // update user
     const encryptedPassword = hashSync(password, 10);
     
     const newUser = {
       email: email, //email creador del curso
       name: name, //nombre profesor
       password: encryptedPassword
       
     }
     await User.findOneAndUpdate({_id:id},{email:newUser.email,name:newUser.name,password:newUser.password})
     return res.status(200).json({
       success: true,
       message: 'User updated successfully',
     })
   } catch (error) {
     return res.status(500).json({
       success: false,
       message: 'Error updating curso',
       error: error?.message || error,
     })
   }
 }
export default  AuthController;





