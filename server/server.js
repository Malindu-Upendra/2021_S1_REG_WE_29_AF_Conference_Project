const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const admin = require('./routes/admin.js');
const user = require("./routes/user.js");
const editor = require("./routes/editor.js");
const reviewer = require("./routes/reviewer.js");
const homepage = require("./routes/homepage.js")
const dotenv = require('dotenv');

const app = express();
app.use(cors());
app.use(bodyparser.json());
dotenv.config()

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true, useUnifiedTopology:true ,useCreateIndex:true , useFindAndModify:false}).
then(() => app.listen(PORT,() => console.log(`connection established successfully on port: ${PORT}`))).
catch((err) => console.log(err.message));

//declaring path to use Rest Services
app.use('/admin',admin);
app.use('/user', user);
app.use('/editor', editor);
app.use('/reviewer', reviewer);
app.use('homepage', homepage);

