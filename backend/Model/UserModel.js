// Models for User
// - Name
// - email
// - password
// - pic 

import moongoose from "moongoose";


const UserModel = moongoose.Schema({
    name : { type : String , required : true},
    email : { type : String , required : true},
    password : { type : String , required : true},
    pic : {
        type : String,
        required : true,
        default :  "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    }
},
{
    timestamps : true
}

)


const User = moongoose.model("User" , UserModel);
export default User;