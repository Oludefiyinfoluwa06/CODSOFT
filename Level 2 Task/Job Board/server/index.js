const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const usersRoute = require('./routes/usersRoute');

const app = express();
const port = 5000;

const dbURI = "mongodb+srv://timothy:timothy@jobboard.runaqaw.mongodb.net/users?retryWrites=true&w=majority";
mongoose.connect(dbURI)
    .then(res => app.listen(port, () => console.log(`Server running on port ${port}!`)))
    .catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/jobboard', usersRoute);

app.get('/', (req, res) => res.send('Hello World!'));
