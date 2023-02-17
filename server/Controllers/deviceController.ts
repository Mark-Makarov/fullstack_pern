import uuid from "uuid"


async function create(req, res) {
    const {name, price, brandId, typeId, info} = req.body
    const {img} = req.files
    let fileName = uuid.v4() + '.jpg'
}

async function getAll(req, res) {

}

async function getOne(req, res) {

}

export { create, getAll, getOne };