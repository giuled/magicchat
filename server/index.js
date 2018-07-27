/* Start creating your backend here */
const express = require('express');
const app = express();
const http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('dist'));
app.use(express.static('public'));

app.get("/", function(socket){
    res.sendFile(__dirname + "/index.html")
})

// io.emit("something", {for: "everyone"});

// io.on("connection", function(socket){
//     socket.broadcast.emit("hi");
// })

//user logged on or dissconectoed
io.on("connection", function(socket){
    io.emit("user connected");
    socket.on("disconnect", function(){
    io.emit("user disconnected");
    })
})    


  io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
  });

http.listen(process.env.PORT || 3000, () => console.log('Server is up!'));