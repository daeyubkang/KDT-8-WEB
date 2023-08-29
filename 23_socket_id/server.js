const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");
const app = express();
const PORT = 8000;

//http서버
const server = http.createServer(app);
//socket서버
const io = SocketIO(server);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

app.get("/chat", (req, res) => {
  res.render("chat");
});

////////////////소켓
io.on("connection", (socket) => {
  socket.on("join", (chatroom) => {
    socket.join(chatroom);
    //join 전과 후의 socket.rooms 값이 다르다.
    console.log(socket.id, socket.rooms);
    socket.room = chatroom;
    //broadcast 포함시 나를 제외한 전체사용자에게 메세지 전달
    socket.emit("userjoin", `${socket.rooms}`, `${socket.id}`);
  });

  socket.on("message", (message) => {
    //io.to(특정방).emit(이벤트): 특정 방의 전체 사용자에게 메세지 전달
    io.to(socket.room).emit("chat", `${message}`, `${socket.id}`);
  });
  //   socket.on("new message", (arg, cb) => {
  //     console.log(arg);
  //     cb(arg);
  //   });
  //   socket.on("hello", (arg, cb) => {
  //     console.log("client : ", arg.message);
  //     cb(arg, "안녕하세요.");
  //   });
  //   socket.on("study", (arg, cb) => {
  //     console.log("client : ", arg.message);
  //     cb(arg, "공부합시다!");
  //   });
  //   socket.on("bye", (arg, cb) => {
  //     console.log("client : ", arg.message);
  //     cb(arg, "잘가~");
  //   });
});

//서버오픈
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
