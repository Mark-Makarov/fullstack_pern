import {ApiError} from "../error/ApiError.js";

async function registration(req, res) {

}

async function login(req, res) {

}

async function check(req, res, next) {
    const {id} = req.query
    if (!id) {
       return next(ApiError.badRequest('No id'))
    }
    res.json(id)
}

export {registration, login, check};