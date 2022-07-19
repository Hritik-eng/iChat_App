const express = require('express')
const app = express()
const http = require('http').createServer(app)

const PORT = process.env.PORT || 5500

http.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`)
})


// Add middleWare
app.use(express.static(__dirname + '/public'))  // Express. js is a routing and Middleware framework for handling the different routing of the webpage and it works between the request and response cycle

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// Socket 
const io = require('socket.io')(http)

io.on('connection', (socket) => {
    console.log('Connected...')
    socket.on("new-user",(name)=>{
        socket.broadcast.emit("user",name)
    })
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })

})