const Koa = require('koa');
const {koaBody} = require('koa-body');

const app = new Koa();

// middleware
app.use(koaBody());

// Require the routers

// use the routes

app.listen(3000);
