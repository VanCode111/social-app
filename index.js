const io = require("socket.io")(7000, {
  cors: {
    origin: "http://localhost:3000",
  },
});

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
  if (indexUser) {
    users[index] = userObject;
  }
  users.push(userObject);
  console.log(users);
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  const onlineUser = users.find((user) => user.userId == userId);
  return onlineUser;
};

io.on("connection", (socket) => {
  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
  });

  //send and get message
  socket.on("sendMessage", ({ user, conversationUser, text }) => {
    const userCurr = getUser(conversationUser);
    if (!userCurr) {
      return;
    }
    io.to(userCurr.socketId).emit("getMessage", {
      sender: user,
      text,
    });
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    console.log(users);
  });
});
