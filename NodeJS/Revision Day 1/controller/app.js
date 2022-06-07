const express = require('express');
const app = express();
const { loginRoute } = require('./login.js');
const { rootRoute } = require('./root.js');


app.use(loginRoute, rootRoute);

app.listen(8081);