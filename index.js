const express=require("express");
const app=express();
app.use(express.urlencoded());

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

app.post('/',(req,res)=>{
    // console.log(req.body);
    const n1=req.body.num1;
    const n2=req.body.num2;
    const result=n1/(n2*n2);
    res.send(`BMI of ${n1} and ${n2} is: `+result);   
});

app.listen(80,()=>
{
    console.log("file is running on port 80");
});