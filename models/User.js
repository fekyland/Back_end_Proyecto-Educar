import { Schema,model }  from "mongoose"


const UserSchema = new Schema(
   {
      name: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
         lowercase: true,
         match: /.+\@.+\..+/,
      },
      password: {
         type: String,
         required: true,
         minlength: 6,
      },
      role_id: { 
         type: Schema.ObjectId, 
         ref: "Role" ,
         required: true
       }
   },
   {
      timestamps: true,
   }
);

const User = model("User", UserSchema);

export default User;
