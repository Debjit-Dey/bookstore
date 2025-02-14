import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import bookRouter from './routes/book.route.js'
import userRouter from './routes/user.route.js'
import cors from 'cors'
const app = express()
const port = process.env.PORT || 3001
app.use(cors())
app.use(express.json())


try {
    const mongoURI = process.env.mongoURI;
    mongoose.connect(mongoURI);
    console.log('MongoDB is connected');
} catch (error) {
    console.log('MongoDB connection unsuccessful');
    console.log(error);
    
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/book', bookRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})