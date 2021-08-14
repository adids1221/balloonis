const { User } = require('../models')
const { generateToken } = require('../utils/generateToken')
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');

// @route    POST api/users/login
// @desc     Auth user & get token
// @access   Public
const authUser = async (req, res) => {
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
        return res.status(401).json("Invalid Credential");
    }
    else {
        return res.status(200).json({ token });
    }
}

// @route    POST api/users
// @desc     Register new user
// @access   Public
const registerUser = async (req, res, next) => {
    const { username, password } = req.body
    const uuid = uuidv4() //generate id by myself?
    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    const user = await User.findAll({
        where: { user_name: username }
    })

    user.forEach(u => {
        if (u.user_name === username) {
            res.status(400)
            throw new Error('User already exists')
        }
    })

    await User.create({ id: uuid, user_name: username, password: bcryptPassword, is_admin: true })
        .then(res.status(201).send({ message: "User created" }))
        .catch((error) => {
            console.log(error);
            res.status(400).send(error);
        });
}

exports.authUser = authUser
exports.registerUser = registerUser