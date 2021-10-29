const express = require('express');

const app = express()

const bodyParser = require('body-parser');
const userRouter = require('./router/user');
const GlobalErrorController = require('./controller/GlobalErrorController');
const AppError = require('./utils/AppError')
const path = require('path')


const cors = require('cors')




app.use(cors({origin: 'http://localhost:3000'})); 
process.on('uncaughtException',err => {
    console.log('Uncaught Exception occurs');
    console.log(err.message,err.name);
    process.exit(1);
})



app.use(bodyParser.json({limit:'10kb'}));








app.use(express.static(path.join(__dirname, 'public')));

app.use('/user',userRouter)//mounting a router

app.use('*',(req,res,next )=> {
   next(new AppError('this route is not defined',400))
})


app.use(GlobalErrorController)





process.on('unhandledRejection',(err) => {
    console.log(err.name,err.message);
    process.exit(1);
});


module.exports = app