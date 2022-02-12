const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../../models-Mongoose/user-model')


// login user
const login = async ({email, password}) =>{

    const user = await User.findOne({email:email})
    if(!user) throw new Error('Invalid Credentials: user not found')


    const isEqual = await bcrypt.compare(password, user.password)
    if(!isEqual) throw new Error('Invalid Credentials: incorrect password')
    
    
    //asign new token for current login
    const token = await jwt.sign(
        {   userId: user.id,   email:user.email },
        'SecureLongSecretKey687',
        {expiresIn: '1h'}
    )

    return {
        userId: user.id,
        userName: user.userName,
        email:  user.email,
        token:  token, 
        tokenExpiration: 1,
        votes: user.votes
    } 
}


//create user
const createUser = async (args) =>{
    try{
        //check if user exists
        const existingUser = await User.findOne({email: args.userInput.email})
        if(existingUser) throw new Error("User already exists")

        // save user to db
        const hashedPassword = await bcrypt.hash(args.userInput.password, 12)
        const user = new User({
            userName:   args.userInput.userName,
            email:      args.userInput.email,
            password:   hashedPassword,

        })
        const result = await user.save()

        //return created user
        return {...result._doc, password: null, _id: result.id, tokenExpiration: 1}

    }catch(err) {throw err}
}

module.exports ={
    login,
    createUser
}