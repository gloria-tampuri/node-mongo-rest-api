
import { ObjectId } from "mongodb"
import { connectToDatabase } from "../database/mongodb.js"


export const getProductsController = async (req, res) => {

    const client = await connectToDatabase()
    const db = client.db("limot_db")

    const productsCollection = await db.collection("products").find().toArray()

    res.status(200).json({
        message: 'products endpoint',
        products: productsCollection
    })
}

export const getProductController = async (req, res) => {
    const client = await connectToDatabase()
    const db = client.db("limot_db")
    const { productId } = req.params;

    const objectId = new ObjectId(productId)

    try {

        const product = await db.collection('products').findOne({ _id: objectId })
        res.status(200).json({
            message: 'product endpoint',
            product
        })
    } catch (error) {
        console.log(error);
    }
}

export const postNewProduct = async (req, res) => {
    const client = await connectToDatabase()
    const db = client.db("limot_db")

    const newProduct = req.body

    const productCollection = db.collection('products')
    const insertedProduct = await productCollection.insertOne(newProduct)

    res.status(201).json({
        message: "Product created",
        id: insertedProduct.insertedId
    })
}