import { ObjectId } from "mongodb"
import { connectToDatabase } from "../database/mongodb.js"

export const getUsersController =async (req,res)=>{
    const client = await connectToDatabase()
    const db = client.db("limot_db")

    const usersCollection = await db.collection("users").find().toArray()
    res.status(200).json({
        message:"Users data fetching...",
        users:usersCollection
    })
}

export const getUserController=async(req,res)=>{
    const client = await connectToDatabase()
    const db = client.db("limot_db")
    const {userId}= req.params

    const objectId = new ObjectId(userId)

    try {
        const user = await db.collection('users').findOne({_id:objectId})
        res.status(200).json({
            message: 'one user endpoint',
            user
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteUserController= async(req,res)=>{
    const client = await connectToDatabase()
    const db =client.db("limot_db")
    const {userId}=req.params

    const objectId = new ObjectId(userId)

    try{
        const user = await db.collection('users').deleteOne({_id:objectId})
        res.status(200).json({
            message:'user deleted'
        })
        console.log(`${user} has been deleted`);

    }catch(error){
        console.log(error);
    }
}


export const postNewUser =async(req,res)=>{
    const client = await connectToDatabase()
    const db = client.db("limot_db")

    const newUser = req.body

    const userCollection =db.collection('users')
    const insertedUser =await userCollection.insertOne(newUser)

    res.status(201).json({
        message:"user created",
        id:insertedUser.insertedId
    })
}
