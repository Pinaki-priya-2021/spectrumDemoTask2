const mysql = require('mysql');

const db=mysql.createConnection({
    host: 'localhost',//process.env.DATABASE_HOST,
    user: 'root', //process.env.DATABASE_USER,
    password: '', //process.env.DATABASE_PASSWORD,
    database: 'spectrumdemo' //process.env.DATABASE

})
const email=req.body;
db.query('SELECT Name ,Email,Mobile,Branch,Year,Domain FROM userdetails WHERE Email=?',email,(error,results) =>{
if(error){
    console.log(error);
}
else{
    console.log(results[0]);
    document.getElementById("pname").innerHTML=res.json(results[0]);
}
});

