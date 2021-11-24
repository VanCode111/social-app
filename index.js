const app = require("express")();
const cors = require("cors");
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT || 7000;

app.use(cors());

let users = [];

const addUser = (userId, socketId) => {
  let indexUser;
  console.log("add user");
  users.forEach((user, index) => {
    if (user.userId == userId) {
      indexUser = index;
    }
  });
  const userObject = { userId, socketId };
  users.push(userObject);
  console.log(users);
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUsers = (userId) => {
  const onlineUser = users.filter((user) => user.userId == userId);
  return onlineUser;
};

io.on("connection", (socket) => {
  //take userId and socketId from user
  console.log("connection");
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
  });

  //send and get message
  socket.on("sendMessage", ({ user, conversationUser, text }) => {
    console.log(conversationUser, " ", text);
    const userCurr = getUsers(conversationUser);
    console.log("sended ", userCurr);
    if (!userCurr) {
      return;
    }
    console.log("sended ", users);
    userCurr.forEach((userCur) => {
      io.to(userCur.socketId).emit("getMessage", {
        sender: user,
        message: text,
      });
    });
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    console.log(users);
  });
});

server.listen(PORT, () => {
  console.log("server has been started");
});
