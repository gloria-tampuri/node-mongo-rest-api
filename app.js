import express from 'express';
import productRouter from './routes/products.js'
import userRouter from './routes/user.js'
import resourceRouter from './routes/resource.js'
import bodyParser from 'body-parser';

const app = express()
const port = 5000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// User Route
app.use('/', userRouter)
// Resource route
app.use('/', resourceRouter)

app.use('/', productRouter )

app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);
})