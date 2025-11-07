import express from 'express';
import dotenv from './config/config.js';
import db from './config/db.js';
import router from './router/router.js';


const port = dotenv.PORT || 3000;
const app = express();

app.use(express.static('public'));
app.use('/uploads',express.static('uploads'));
app.set('view engine','ejs');
app.use('/',router);
app.listen(port,(err)=>{
    if(!err) console.log(`Server is  running on http://localhost:${port}`);
    else console.log(`error in server setup : ${err}`);
})