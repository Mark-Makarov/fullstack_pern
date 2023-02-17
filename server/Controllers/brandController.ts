import {Brand} from "../models/models.js"

async function create(req, res) {
    const {name} = req.body
    const brand = await Brand.create({name})
    return res.json(brand)
}

async function getAll(req, res) {
    const brands = await Brand.findAll()
    return res.json(brands)
}


export { create, getAll };