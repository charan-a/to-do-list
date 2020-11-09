const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let items = ["123","abc","xyz"];
let workitems = [];

app.get("/",function (req, res){
    day = date.getDay();
    res.render("list",{listTitle : day , newListItems : items});
});

app.post("/",function (req, res){
    item = req.body.newItem
    if(req.body.list === "Work"){
        workitems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    } 
});

app.get("/work",function (req, res){
    res.render("list",{listTitle : "Work" ,newListItems : workitems })
});

app.listen(1618 , function (){
    console.log("ported started on 1618");
});