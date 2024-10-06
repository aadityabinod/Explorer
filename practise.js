import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send("listening")
})
app.listen(port, ()=>{
    console.log(`example app listening at port ${port}`)
}

)