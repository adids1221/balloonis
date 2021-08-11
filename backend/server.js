import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import db from './config/db.js'
//import productRoutes from './routes/productRoutes.js'

dotenv.config()

//check db connection
db.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err))

const app = express()
app.use(cors());

app.get('/', (req, res) => { res.send('Hello World!') })
//app.use('/products', productRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server runing in ${process.env.NODE_ENV} port ${PORT}`))
