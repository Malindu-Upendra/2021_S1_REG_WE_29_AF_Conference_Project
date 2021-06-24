import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import admin from './routes/admin.js'
import user from "./routes/user.js";
import editor from "./routes/editor.js";
import reviewer from "./routes/reviewer.js";

const app = express();
app.use(cors());
app.use(bodyparser.json({limit: "20mb", extended: true}));
app.use(bodyparser.urlencoded({limit: "20mb", extended: true}));

const PORT = process.env.PORT || 5000;

const connect_URI = 'mongodb+srv://C5MLGBSbHGMv1Xau:Rsp9GPKZMKgbjfPo@cluster0.r7ueu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(connect_URI,{useNewUrlParser:true, useUnifiedTopology:true ,useCreateIndex:true}).
then(() => app.listen(PORT,() => console.log(`connection stablished successfully on port: ${PORT}`))).
catch((err) => console.log(err.message));

mongoose.set('useFindAndModify',false);

//declaring path to use Rest Services
app.use('/admin',admin);
app.use('/user', user);
app.use('/editor', editor);
app.use('/reviewer', reviewer);

