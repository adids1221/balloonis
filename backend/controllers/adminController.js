const { User } = require('../models')
const { generateToken } = require('../utils/generateToken')
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const AppError = require('../utils/appError');

// @route    POST api/users/login
// @desc     Auth user & get token
// @access   Public
const authUser = async (req, res, next) => {
    const { username, password } = req.body
    let cur_user
    const user = await User.findAll({
        where: { user_name: username }
    })

    user.forEach(u => {
        if (u.user_name === username) {
            cur_user = u;
        }
    })

    const validPassword = bcrypt.compare(password, cur_user.password)
    const token = generateToken(cur_user.id)

    if (!validPassword) {
        next(AppError.badRequest("Invalid Credential"))
        return;
    }
    return res.status(200).json({ token });
}

// @route    POST api/users
// @desc     Register new user
// @access   Public
const registerUser = async (req, res, next) => {
    const { username, password } = req.body
    const uuid = uuidv4()
    const salt = await bcrypt.genSalt(10)
    const bcryptPassword = await bcrypt.hash(password, salt);

    const user = await User.findAll({
        where: { user_name: username }
    })

    user.forEach(u => {
        if (u.user_name === username) {
            next(AppError.badRequest('User already exists'))
            return;
        }
    })

    await User.create({ id: uuid, user_name: username, password: bcryptPassword, is_admin: true })
        .then(res.status(201).send({ message: "User created" }))
        .catch((error) => {
            next(AppError.badRequest(error.message))
            return;
        });
}

exports.authUser = authUser
exports.registerUser = registerUser