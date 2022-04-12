'use strict';

const express = require('express');

// Constants
const PORT = 5000;
const HOST = 'localhost';

// App
const app = express();
app.use(express.static('js'));
app.use(express.static('css'));
app.use(express.static('.'));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);