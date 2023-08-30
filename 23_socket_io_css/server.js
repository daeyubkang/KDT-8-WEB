const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");

const PORT = 8000;
const app = express();

const server = http.createServer(app);
const io = SocketIO(server);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/:room", (req, res) => {
  const room = req.params.room;
});

function getUsersInRoom(room) {
  const users = [];
  const clients = io.sockets.adapter.rooms.get(room);
  console.log(clients);
  if (clients) {
    clients.forEach((socketId) => {
      const userSocket = io.sockets.sockets.get(socketId);
      users.push(userSocket.user);
    });
  }
  return users;
}

function getUsersInRoom2(room) {
  const users = [];
  const clients = io.sockets.adapter.rooms.get(room);
  const array = Array.from(clients);
  console.log(array);
  if (clients) {
    clients.forEach((socketId) => {
      const userSocket = io.sockets.sockets.get(socketId);
      users.push(userSocket.user);
    });
  }
  return array;
}
const roomList = [];

io.on("connection", (socket) => {
  //socket!//
  //socket은 접속한 웹페이지, io는 접속해있는 모든 웹페이지
  //웹 페이지가 접속이되면 고유한 id값이 생성됨. socket.id로 확인가능
  //console.log(io.sockets);
  //채팅방 목록 보내기
  socket.emit("roomList", roomList);
  //채팅방 만들기 생성
  socket.on("create", (roomName, userName, cb) => {
    //join(방이름) 해당 방이름으로 없다면 생성. 존재하면 입장
    //socket.rooms에 socket.id값과 방이름 확인가능
    socket.join(roomName);
    console.log(userName);
    //socket은 객체이며 원하는 값을 할당할 수 있음
    socket.room = roomName;
    socket.user = userName;
    io.to(socket.room).emit("newMessage", "입장", userName, 0);

    //채팅방 목록 갱신
    if (!roomList.includes(roomName)) {
      roomList.push(roomName);
      //갱신된 목록은 전체가 봐야함
      io.emit("roomList", roomList);
    }
    const usersInRoom = getUsersInRoom(roomName);
    io.to(roomName).emit("userList", usersInRoom);
    cb();
  });

  socket.on("sendMessage", (message) => {
    const users1 = getUsersInRoom2(socket.room);
    const name1 = getUsersInRoom(socket.room);
    console.log(users1);
    if (!users1[message.user]) {
      io.to(socket.room).emit("newMessage", message.message, message.nick, 0);
    } else if (users1[message.user] && message.nick == name1[message.user]) {
      socket.emit("newMessage", message.message, message.nick, 1);
    } else {
      io.to(users1[message.user]).emit(
        "newMessage",
        message.message,
        message.nick,
        1
      );
      socket.emit("newMessage", message.message, message.nick, 1);
    }
  });

  socket.on("disconnect", () => {
    if (socket.room) {
      socket.leave(socket.room);
    }
  });
});

server.listen(8000, () => {
  console.log(`http://localhost:${PORT}`);
});
