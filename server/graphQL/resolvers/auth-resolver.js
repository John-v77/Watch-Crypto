const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
const User = require('../../models/user-model')

//login user
// const login = async ({email, password}) =>{
//     const user = await User.findOne({email:email})
//     if(!user) throw new Error('Invalid Credentials: user not found')

//     return 
// }


//create user
const createUser = async (args) =>{
    try{
        //check if user exists
        const existingUser = await User.findOne({email: args.userInput.email})
        if(existingUser) throw new Error("User already exists")

        // save user to db
        const hashedPassword = await bcrypt.hash(args.userInput.password, 12)
        const user = new User({
            email:      args.userInput.email,
            password:   hashedPassword
        })
        const result = await user.save()

        //return created user
        return {...result._doc, password: null, _id: result.id}

    }catch(err) {throw err}
}

module.exports ={
    // login,
    createUser
}