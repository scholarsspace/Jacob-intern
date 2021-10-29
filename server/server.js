const mongoose  = require('mongoose')
const dotenv = require('dotenv')


dotenv.config({path:'./dotenv.env'})

// console.log(process.argv)



const app = require('./app')



if(process.argv[2] === '--production'){
    process.env.NODE_ENV = 'production'
}

console.log(process.env.NODE_ENV)

const server = process.env.PORT || 3001;
 

mongoose.connect('mongodb://localhost/project',{ useNewUrlParser: true,useUnifiedTopology: true  })
.then(()=>{
    app.listen(server,()=>{
        console.log(`connected to port ${process.env.PORT}`)
    })
})



process.on('unhandledRejection',(err) => {
    console.log(err.name,err.message);
    process.exit(1);
});