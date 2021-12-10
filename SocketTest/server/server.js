console.log("hello!")
console.log("hello! again")

const io = require('socket.io')(3000)

io.on('connection', socket => {
    console.log(socket.id)
})