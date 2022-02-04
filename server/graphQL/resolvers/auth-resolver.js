const bcrypt = require('bcryptjs')
const User = require('../../models/user-model')

//login user
// const login = async ({email, password}) =>{
//     const user = await User.findOne({email:email})
//     if(!user) throw new Error('Invalid Credentials: user not found')


// }


//create user
const createUser = async (args) =>{
    try{


        const user = new User({
            email:      args.userInput.email,
            password:   args.userInput.password
        })

        const result = await user.save()

        return {...result._doc, password: null, _id: result.id}
    }catch(err) {throw err}
}

module.exports ={
    // login,
    createUser
}