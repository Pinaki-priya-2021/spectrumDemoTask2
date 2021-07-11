//const cons = require('consolidate');
const express = require('express');
const path = require('path');
const app = express();
const pageRouter = require('./routes/pages');
const authRouter = require('./routes/auth');
const mysql = require('mysql');
const dotenv = require('dotenv');


dotenv.config({path: './.env'});

/**********************************Database connection******************************************/

//creation
const db=mysql.createConnection({
    host: 'localhost',//process.env.DATABASE_HOST,
    user: 'root', //process.env.DATABASE_USER,
    password: '', //process.env.DATABASE_PASSWORD,
    database: 'spectrumdemo' //process.env.DATABASE

})

//connection
db.connect((error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("database connected.....");
    }
});

/*********************************************************************************************/

app.use(express.urlencoded ({extended : false}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'/assets')));
app.set('views' , path.join(__dirname , 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine' , 'html');


/**************************************Defining Routes*******************************************************/
app.use('/',pageRouter);
app.use('/auth', authRouter);



app.listen(3000, ()=>{
    console.log('server is connected at port 3000....');
});

// modeule.exports=app;