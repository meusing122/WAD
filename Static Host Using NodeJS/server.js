const express = require('express')
const app = express()
app.use(express.static('public'))

app.get("/signup",(req,resp)=>{
    resp.sendFile(__dirname + "/public/signup.html")
})
app.listen(5000, ()=>{
    console.log("Server is Listening");
    console.log(__dirname);

})