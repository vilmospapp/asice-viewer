'use strict';

const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.static('js'));
app.use(express.static('css'));
app.use(express.static('.'));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);