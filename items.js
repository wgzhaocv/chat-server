const Router = require('koa-router');

// Prefix all routes with: /items
const router = new Router({
    prefix: '/api'
});

let items = [
    { id: 100, iname: 'Quartz Analog Wrist Watch', price: 'US $4.99'},
    { id: 101, iname: 'Leather Peep Pump Heels', price: 'US $33.56'},
    { id: 102, iname: 'Apple iPod', price: 'US $219.99'},
    { id: 103, iname: 'Prince Phantom 97P Tennnis Racket', price: 'US $50.00'},
];

// Routes

router.get('/items', (ctx, next) => {
    ctx.body = items;
    next();
});

module.exports = router;
