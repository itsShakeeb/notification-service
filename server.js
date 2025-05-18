const http = require("http");
const { Server } = require('socket.io')
const app = require("./app");
const db = require("./config/db");
const subscribeToRedisEvents = require('./events/redisSubscriber')
const PORT = process.env.PORT || 5001;

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
    }
})

io.on('connection', (socket) => {
    console.log('Client connected successfully', socket.id);

    socket.on('register', (userId) => {
        socket.join(userId)
        console.log(`User with ID: ${socket.id} joined room: ${userId}`);
    })

    socket.on('disconnect', (socketId) => {
        console.log('Client disconnected', socketId);
    })
})

subscribeToRedisEvents(io)


db.then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}).catch((err) => {
    console.log("Database connection failed", err);
})
