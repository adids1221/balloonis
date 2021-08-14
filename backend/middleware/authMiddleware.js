const jwt = require('jsonwebtoken')
const { User } = require('../models')
const AppError = require('../utils/appError')

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
            next(AppError.badRequest('Not authorized, token failed'))
            return;
        }
    }

    if (!token) {
        next(AppError.badRequest('Not authorized, no token!'))
        return;
    }
}

const isAdmin = (req, res, next) => {
    let user = req.user[0].dataValues
    if (user.id && user.is_admin) {
        next()
    } else {
        next(AppError.badRequest('Not authorized as an admin'))
        return;
    }
}


exports.protect = protect
exports.isAdmin = isAdmin