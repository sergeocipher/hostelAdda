import express from "express";



const app = express();
app.get('/test', (req, res) => {
    console.log('Server at web ')
    res.send('Hello')
})


app.listen(3000 , () =>{
    console.log("server at 3000")
})