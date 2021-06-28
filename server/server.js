import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import admin from './routes/admin.js'
import user from "./routes/user.js";
import editor from "./routes/editor.js";
import reviewer from "./routes/reviewer.js";
import dotenv from 'dotenv';

const app = express();
app.use(cors());
app.use(bodyparser.json({limit: "20mb", extended: true}));
app.use(bodyparser.urlencoded({limit: "20mb", extended: true}));
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

