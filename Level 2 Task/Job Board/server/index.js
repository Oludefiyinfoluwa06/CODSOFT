const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const usersRoute = require('./routes/usersRoute');
const employersRoute = require('./routes/employersRoute');
const jobsRoute = require('./routes/jobsRoute');

const app = express();
const port = 5000;

const dbURI = "mongodb+srv://timothy:timothy@jobboard.runaqaw.mongodb.net/users?retryWrites=true&w=majority";
mongoose.connect(dbURI)
    .then(res => console.log(res))
    .catch(err => console.log(err));

app.use(cors({
    origin: "https://jobboard-app.vercel.app/",
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/jobboard', usersRoute);
app.use('/jobboard', employersRoute);
app.use('/jobboard', jobsRoute);

app.get('/', (req, res) => res.json('Hello World!'));
