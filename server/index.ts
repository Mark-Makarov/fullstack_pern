import dotenv from 'dotenv';
import express from 'express'
import sequelize from "./db.js";
import fileUpload from "express-fileupload"
import cors from 'cors';
import router from './routes/index.js';
import {errorHandlingMiddleware} from "./middleware/ErrorHandlingMiddleware.js";
import path, {dirname} from "path";
import {fileURLToPath} from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

//Обработка ошибок
app.use(errorHandlingMiddleware)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Сервер стартовал на порту: ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start();

