import mongoose, {Schema } from "mongoose";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt"

const userSchema = new Schema({
    username:{
        type:String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,

    },
    email:{
        type:String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullname:{
        type: String,
        required: true,
        index: true,
        trim: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    coverImage:{
        type: String,
        required: true,
    },
    watchHistory:[
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password:{
        type: String,
        required: [true, 'Password is required']
    },
    refreshToken:{
        type: String,
    
    }
},
{
    timestamps: true
});

userSchema.pre("save",async function (next){
   this.password = bcrypt.hash(this.password, 10)
   next()
})

export const User = mongoose.model("User", userSchema)