import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {User, Basket} from "../models/models.js";
import {ApiError} from "../error/ApiError.js";

function generateJwt(user, email, role) {
    return jwt.sign(
        {id: user, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'})
}

async function registration(req, res, next) {
    const {email, password, role} = req.body
    console.log(email, password)
    if (!email || !password) {
        return next(ApiError.badRequest('Некорректные данные'))
    }
    const candidate = await User.findOne({where: {email: email}})
    if (candidate) {
        return next(ApiError.badRequest('Пользователь с таким логином уже существует'))
    }
    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({email, role, password: hashPassword})
    const basket = await Basket.create({userId: user.get('id')})
    const token = generateJwt({user: user.get('id')}, {email: user.get('email')}, {role: user.get('role')})
    return res.json(token)
}

async function login(req, res, next) {
    const {email, password} = req.body
    const user = await User.findOne({where: {email: email}})
    if (!user) {
        return next(ApiError.internal('Пользователя с таким логином не существует'))
    }
    let comparePassword = bcrypt.compareSync(password, user.get('password'))
    if (!comparePassword) {
        return next(ApiError.internal('Пароль неверен'))
    }
    const token = generateJwt({user: user.get('id')}, {email: user.get('email')}, {role: user.get('role')})
    return res.json(token)
}

async function check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role)
    return res.json({token})
}

export {registration, login, check};