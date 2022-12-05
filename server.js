const jsonServer = require('json-server');
const server = jsonServer.create();
const citiesRouter = jsonServer.router('citiesList.json');
const countriesRouter= jsonServer.router('countriesList.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use('/cities',citiesRouter);
server.use('/countries',countriesRouter);

server.listen(port);