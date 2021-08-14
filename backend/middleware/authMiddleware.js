const jwt = require('jsonwebtoken')
const { User } = require('../models')
const bcrypt = require('bcryptjs');
const protect = async (req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            const user = await User.findAll({
                where: {
                    id: decoded.id
                }
            })
            if (user) {
                req.user = user
                next()
            }

        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('Not authorized, token failed')
        }
    }

    if (!token) {
        res.status(401)
        throw new Error('not authorized, no token!')
    }
}

const isAdmin = (req, res, next) => {
    let user = req.user[0].dataValues
    if (user.id && user.is_admin) {
        next()
    } else {
        res.status(401)
        throw new Error('Not authorized as an admin')
    }
}


exports.protect = protect
exports.isAdmin = isAdmin