const express = require('express');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const userRoutes=require('./routes/user.routes');
const postRoutes=require('./routes/post.routes');
const path=require('path')

const {checkUser, requireAuth}=require('./middleware/auth.middleware')
const cors = require('cors')
const port = process.env.PORT || 5001

require('dotenv').config({path:'./config/.env' })
require('./config/db')
const app=express();
app.use(express.static('client/build'))

app.use(cors({origin: 'http://localhost:3000', credentials: true}))


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser());

//jwt
app.get('*',checkUser)
app.get('/jwtid',requireAuth,(req,res)=>{
    res.status(200).send(res.locals.user._id)

})

//routes
app.use('/api/user',userRoutes);
app.use('/api/post',postRoutes)


//server
app.get('/*',(_, res)=>{
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})
app.listen(port,()=>{
    console.log(`listening on port `+port );
})