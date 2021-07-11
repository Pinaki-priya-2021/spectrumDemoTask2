const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { json } = require('express');

const db=mysql.createConnection({
    host: 'localhost',//process.env.DATABASE_HOST,
    user: 'root', //process.env.DATABASE_USER,
    password: '', //process.env.DATABASE_PASSWORD,
    database: 'spectrumdemo' //process.env.DATABASE
})
/*****************Registration*****************/
exports.registered = (req,res) => {
    console.log(req.body);
    // const name=req.body.name;
    // const email=req.body.email;
    // const mobile=req.body.mobile;
    // const branch=req.body.branch;
    // const year=req.body.year;
    // const pass=req.body.pass;
    // const cpass=req.body.cpass;

    const {name, email, mobile, branch, year, domain, pass, cpass}=req.body;  //this is same as above commented declarations.
    
    db.query('SELECT Email FROM userdetails WHERE Email= ?', email, async (error,results) =>{
        if(error){
            console.log(error);
            
        }

        if(results.length > 0){
            res.send('Email Already Registered!');
            return;
            // return res.render('registration',{
            //     message: 'Email Already Registered!'
            // });
        }else if(pass !== cpass){
            res.send("Passwords Donot Match");
            return;
        //     return res.render('registration',{
                    
        // });
        }


        let hassedPassword = await bcrypt.hash(pass , 8);
        console.log(hassedPassword);

        db.query('INSERT INTO userdetails SET ?', {Name: name, Email: email, Mobile: mobile, Branch: branch, Year: year, Domain: domain, Password: pass}, (error, results) =>{
        if(error){
            console.log(error);
            res.send("problem in registration");
            return;
        }
        else{
            console.log("User registered");
            res.render('dashboard');
        }
        })
        db.query('INSERT INTO logindetails SET ?',{Email: email, Password:hassedPassword, Plnpassword:pass},(error,results) =>{
        if(error){
            console.log(error);
            res.send("problem in Login");
            return;
        }
        else{
            console.log("User logged in");
            
        }
        })
        // res.send("form submiitted");

    })

   // res.send("form submiitted");
}
 /**************************************************************************************************************/

 /*********************************************************Log in***********************************************************/

    exports.loggedin = (req,res) =>{
        console.log(req.body);
        const {email, pass}=req.body;

        db.query('SELECT Email FROM logindetails WHERE Email=?',email, /*async*/ (error,result) =>{
            if(error){
                console.log(error);
                res.send("error");
                return;
                }
            else if(result.length===0){
                console.log("email is not registered");
                res.send("email is not registered");
                return;
            }else{
                // let hassedPassword = await bcrypt.hash(pass , 8);
                db.query('SELECT Plnpassword FROM logindetails WHERE Plnpassword',pass, (error,result) =>{
                    if(error){
                        console.log(error);
                        res.send("error");
                        return;
                    }else if(result.length===0){
                        console.log("password is wrong");
                        console.log(hassedPassword);
                        res.send("Wrong password");
                        return;
                    }else{
                        console.log("User Logged In");
                        res.render('dashboard');
                    }
                })
            }

        })
    }
/**********************************************************************************/
    