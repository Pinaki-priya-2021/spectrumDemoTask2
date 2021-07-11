const express = require('express');
const router=express.Router();
const authController=require('../controller/auth');

 router.post('/registered' , authController.registered)//{
//     res.render('dashboard');
// });

 router.post('/loggedin' , authController.loggedin)//{
//     res.render('dashboard');
// });


module.exports = router;