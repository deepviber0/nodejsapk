const express=require('express')
const app=express()
const port=8082
const path=require('path')
const layout=require('express-ejs-layouts')
app.use(express.static(path.join(__dirname,"views")))
app.set("view engine","ejs")
//app.use(layout)
app.get('/home',(req,res)=>{
    try {
        res.render("home",{user:"umar"}); // Ensure "home.ejs" exists in the views folder.
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while rendering the page.");
    }
})

app.get('/abt',(req,res)=>{
    res.render("about")
})

app.listen(port,()=>{
    console.log(`SERVER IS RUNNING ON ${port}`);   
})