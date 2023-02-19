const Koa = require("koa");
const { createServer } = require("http");
const { Server } = require("socket.io");
const {koaBody} = require('koa-body');
let items = require('./items.js');


const app = new Koa();


const httpServer = createServer(app.callback());
const io = new Server(httpServer, { /* options */ });
app.use(koaBody());
app.use(items.routes());

io.on("connection", (socket) => {
    console.log(socket.id)
    socket.join('plaza')
    socket.emit('greeting',{text:"hello "+socket.id})
    // ...
});

httpServer.listen(3200);
