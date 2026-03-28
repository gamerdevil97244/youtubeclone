import mongoose, { Schema } from "mongoose";
import  JsonWebToken  from "jsonwebtoken";
import bcrypt from 'bcrypt'

export const UserSchema = new Schema({
    UserId : {
        type : String,
        isunique : true,
        required : true,
        index : true
    },
    FullName : {
        type : String,
        isunique : true,
        required : true,
        index : true
    },
    Avatar : {
        type : String,
    },
    WatchHistory :[
        {
            type : Schema.Types.ObjectId,
            referance : "VIDEO"
        }
    ],
    password :[
        {
            type : String,
            required : [true,"password is must"]
        }
    ],
    refreshToken : {
        type : String,
    },
},
{
    timestamps : true
}
)

const UserModel = mongoose.model("USER",UserSchema)


UserSchema.pre("save",async function (next) {
    if(this.isModified('password'))
    {
        this.password = bcrypt.hash(this.password, 8)
        next()
    }
})

UserSchema.methods.check_password = async function (password) {
    return await bcrypt.compare(password,this.password)
}

UserSchema.methods.accesstokenfunction = async function (params) {
    return await JsonWebToken.sign({
        _id : this.UserId,
        username : this.username
    },
    process.env.PRIVATE_ACCESS_TOKEN,
    {
        expiresIn : process.env.ACCESS_TOKEN_EXPIRY
    }
)
}
UserSchema.methods.refreshTokenfunction = async function (params) {
    return await JsonWebToken.sign({
        _id : this.UserId,
    },
    process.env.REFRESH_TOKEN_PRIVATE,
    {
        expiresIn : process.env.REFRESH_TOKEN_EXPIRY
    }
)
}
module.exports = UserModel