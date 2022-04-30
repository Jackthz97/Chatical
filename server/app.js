const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { Server } = require("socket.io");
const db = require('./configs/db.config');
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter(db));

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    method: ["GET", "POST"],
  },
});
const STATIC_CHANNELS = [
  {
    name: "Trending",
    img: "https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/field/image/1597430564.8627.jpg?itok=k7m8PyxC",
    dis: "Join the room to talk about what's hot in the crypto market.",
    participants: 0,
    id: 1,
    sockets: [],
  },
  {
    name: "Market",
    img: "https://mtltimes.ca/wp-content/uploads/2022/02/crypto-market.jpg",
    dis: "Join the room to talk about anything related to the crypto Market.",
    participants: 0,
    id: 2,
    sockets: [],
  },
  {
    name: "Events",
    img: "https://www.altcoinbuzz.io/wp-content/uploads/2022/01/Top-crypto-news-1200-x-630-px.jpg",
    dis: "Join the room to talk about any events related to any crypto.",
    participants: 0,
    id: 3,
    sockets: [],
  },
  {
    name: "General",
    img: "https://image.cnbcfm.com/api/v1/image/106837526-1612866638564-gettyimages-1294702554-yn_cryptoimages_016.jpeg?v=1638814215&w=1920&h=1080",
    dis: "Join the room to talk about anything related to crypto.",
    participants: 0,
    id: 4,
    sockets: [],
  },
];

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
// someone has connected listener!
io.on("connection", (socket) => {
  // socket object may be used to send specific messages to the new connected client
  console.log("new client connected");
  socket.emit("connection", null);
  socket.on("channel-join", (id) => {
    console.log("channel join", id);
    STATIC_CHANNELS.forEach((c) => {
      if (c.id === id) {
        if (c.sockets.indexOf(socket.id) === -1) {
          c.sockets.push(socket.id);
          c.participants++;
          io.emit("channel", c);
        }
      } else {
        let index = c.sockets.indexOf(socket.id);

        if (index !== -1) {
          c.sockets.splice(index, 1);
          c.participants--;
          io.emit("channel", c);
        }
      }
    });

    return id;
  });
  socket.on("send-message", (message) => {
    io.emit("message", message);
  });

  socket.on("disconnect", () => {
    STATIC_CHANNELS.forEach((c) => {
      let index = c.sockets.indexOf(socket.id);

      if (index !== -1) {
        c.sockets.splice(index, 1);
        c.participants--;
        io.emit("channel", c);
      }
    });
  });
});

/**
 * @description This methos retirves the static channels
 */
app.get("/getChannels", (req, res) => {
  res.json({
    channels: STATIC_CHANNELS,
  });
});

module.exports = { app, server };

