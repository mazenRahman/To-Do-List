const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");
const app = express();
var items = ["Buy Food",
            "Cook Food",
            "Eat Food"];
var workList = [];
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){

   
        let day = date.date();
        res.render("list",{listTitle: day, newItem: items});
    
});

app.post("/",function(req,res){
    var item = req.body.newItem;
    // console.log(req.body.list);
    if(req.body.list=="Work")
    {
        // console.log(req.body.list);
        workList.push(item);
     res.redirect("/work")
    }
    else{
    items.push(item);
     res.redirect("/")
    }
});

     app.get("/work",function(req,res){
     res.render("list",{listTitle: "Work List", newItem: workList});
 });

app.post("/work",function(req,res){
    var item = req.body.newItem;
    workList.push(item);
     res.redirect("/")
});
app.get("/about",function(req,res){
    res.render("about");
});

app.listen(3000,function(){
   console.log("Server started on port 3000");
});


