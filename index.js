'use strict'
//modulos
const app = require('./bin');
const routes = require('./routes/public');
const routesPrivate = require('./routes/private');
const config = require('./config');

app.config();
app.routesPublic('/', routes);
app.routesPrivates('/app', routesPrivate);
app.dbConnection(config.db.connection);
app.server(config.server.port);
