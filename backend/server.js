import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import db from './config/db.js'
import morgan from 'morgan'
import productRoutes from './routes/productRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

dotenv.config()

//check db connection
db.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err))

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.get('/', (req, res) => { res.send('Hello World!') })
app.use('/products', productRoutes)
app.use('/upload', uploadRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server runing in ${process.env.NODE_ENV} port ${PORT}`))
