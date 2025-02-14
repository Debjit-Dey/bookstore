import User from '../models/user.model.js';
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const {name, email, password} = req.body;
    const user =await  User.findOne({email});
    if(user){
        return res.status(400).json({message: 'User already exists'});
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({name, email, password : hashedPassword});
    await newUser.save();
    return res.status(201).json({message: 'User created successfully', user:{
        name: newUser.name,
        email: newUser.email,
        _id: newUser._id
    }});

    } catch (error) {
        return res.status(500).json({message: error.message});
        
    }
    
};

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User?.findOne({email});
        const isValid = await bcrypt.compare(password, user?.password);
        if(!user || !isValid){
            return res.status(400).json({message: 'Invalid email or password'});
        }
        else{
            const userWithoutPass = {...user.toObject(), password: undefined};

            return res.status(200).json({message: 'Login successful', userWithoutPass});
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
        
    }
}