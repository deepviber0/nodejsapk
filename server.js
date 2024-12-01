const express=require('express')
const app=express()
const port=process.env.PORT || 4000;
const path=require('path')
const layout=require('express-ejs-layouts')
app.set("view engine","ejs")
app.set("views", path.join(__dirname)); 

//app.use(express.static(path.join(__dirname, "views"))); 
//app.use(layout)
app.get('/', (req, res) => {
    res.render("st");  // Response for the root URL
});
app.get('/portfolio',(req,res)=>{
    try {
        res.send("SORRY NOT UPLOADED"); // Ensure "home.ejs" exists in the views folder.
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while rendering the page.");
    }
})

app.get('/P-ET',(req,res)=>{
    res.render("about")
})

app.listen(port,()=>{
    console.log(`SERVER IS RUNNING ON ${port}`);   
})
