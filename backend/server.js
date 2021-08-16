const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const db = require('./config/db')
const morgan = require('morgan')
const productRoutes = require('./routes/productRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const uploadRoutes = require('./routes/uploadRoutes')
const adminRoutes = require('./routes/adminRoutes')
const apiErrorHandler = require('./utils/api-error-handler')

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
app.use('/categories', categoryRoutes)
app.use('/upload', uploadRoutes)
app.use('/admin', adminRoutes)

app.use(apiErrorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server runing in ${process.env.NODE_ENV} port ${PORT}`))
