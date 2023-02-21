import dotenv from 'dotenv';
import express from 'express'
import sequelize from "./db.js";
import fileUpload from "express-fileupload"
import cors from 'cors';
import router from './routes/index.js';
import {errorHandlingMiddleware} from "./middleware/ErrorHandlingMiddleware.js";
import path, {dirname} from "path";
import {fileURLToPath} from "url";
import * as http from "http";
import * as socketIo from "socket.io";
import {createServer} from "http";
import {Server} from "socket.io";


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

const httpServer = createServer(app);
const io = new Server(httpServer, {cors: {
        origin: ["http://localhost:5000" , "http://169.254.65.250:5000"],
    }});

io.on("connection", (socket) => {
    const { id } = socket;
    console.log(`Socket connected: ${id}`);

    // сообщение себе
    socket.on("message-to-me", (msg) => {
        msg.type = "me";
        socket.emit("message-to-me", msg);
    });

    // сообщение для всех
    socket.on("message-to-all", (msg) => {
        msg.type = "all";
        socket.broadcast.emit("message-to-all", msg);
        socket.emit("message-to-all", msg);
    });

    // работа с комнатами
    const { roomName } = socket.handshake.query;
    console.log(`Socket roomName: ${roomName}`);
    socket.join(roomName);
    socket.on("message-to-room", (msg) => {
        msg.type = `room: ${roomName}`;
        socket.to(roomName).emit("message-to-room", msg);
        socket.emit("message-to-room", msg);
    });

    socket.on("disconnect", () => {
        console.log(`Socket disconnected: ${id}`);
    });
});

// io.on('connection',(socket)=>{
//     console.log(`client connected: ${socket.id}`)
//     socket.on('message', ({text, name}) => {
//             console.log(text,name);
//             socket.emit('res', ({text, name}))
//         });
//     // socket.on("hello", (arg) => {
//     //     console.log(arg); // world
//     // });
//     // socket.emit("hello", "world");
//     io.socketsJoin("room1");
//     socket.join(`clock-room`)
//
//     socket.on('disconnect',(reason)=>{
//         console.log(reason)
//     })
// })

// io.listen(8080);

//Обработка ошибок
app.use(errorHandlingMiddleware)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        // app.listen(PORT, () => console.log(`Сервер стартовал на порту: ${PORT}`))
        httpServer.listen(PORT, () => {console.log(`Сервер стартовал на порту: ${PORT}`);});
    } catch (e) {
        console.log(e)
    }
}

start();

