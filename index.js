const express = require('express');
const app = express();
const path = require('path');
const { request } = require('http');
const fs = require('fs');
const { truncate } = require("fs");
const mongoose = require("mongoose");
var XLSX = require("xlsx");

const hostname = '127.0.0.1';
const port = process.env.PORT || 3005;


require("./conn");
const usera1 = require("./forma1");
const usera2 = require("./forma2");
const usera3 = require("./forma3");

const userb1 = require("./formb1");
const userb2 = require("./formb2");
const userb3 = require("./formb3");

const userc1 = require("./formc1");
const userc2 = require("./formc2");
const userc3 = require("./formc3");

const userd1 = require("./formd1");
const userd2 = require("./formd2");
const userd3 = require("./formd3");
const { parallel } = require('async');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));


app.set("view engine", "ejs");
const newitem = fs.readFileSync('./newitem.html');

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/newitem.html', (req, res) => {
    res.end(newitem);
});

app.post('/newitem.ejs/a1',(req, res) => {
    try {
        const Employee = new usera1({
            size: req.body.size,
            gct: req.body.gct,
            ht: req.body.ht
        })
        const saved =  Employee.save();
    } catch (error) {
        res.send(error);
    }
});


app.post('/newitem.ejs/a2',(req, res) => {
    try {
        const Employee = new usera2({
            size: req.body.size,
            gct: req.body.gct,
            ht: req.body.ht
        })
        const saved =  Employee.save();
    } catch (error) {
        res.send(error);
    }
});


app.post('/newitem.ejs/a3',(req, res) => {
    try {
        const Employee = new usera3({
            size: req.body.size,
            gct: req.body.gct,
            ht: req.body.ht
        })
        const saved =  Employee.save();
    } catch (error) {
        res.send(error);
    }
});

app.post('/newitem.ejs/b1',(req, res) => {
    try {
        const Employee = new userb1({
            size: req.body.size,
            gct: req.body.gct,
            ht: req.body.ht
        })
        const saved =  Employee.save();
    } catch (error) {
        res.send(error);
    }
});


app.post('/newitem.ejs/b2',(req, res) => {
    try {
        const Employee = new userb2({
            size: req.body.size,
            gct: req.body.gct,
            ht: req.body.ht
        })
        const saved =  Employee.save();
    } catch (error) {
        res.send(error);
    }
});


app.post('/newitem.ejs/b3',(req, res) => {
    try {
        const Employee = new userb3({
            size: req.body.size,
            gct: req.body.gct,
            ht: req.body.ht
        })
        const saved =  Employee.save();
    } catch (error) {
        res.send(error);
    }
});

app.post('/newitem.ejs/c1',(req, res) => {
    try {
        const Employee = new userc1({
            size: req.body.size,
            gct: req.body.gct,
            ht: req.body.ht
        })
        const saved =  Employee.save();
    } catch (error) {
        res.send(error);
    }
});


app.post('/newitem.ejs/c2',(req, res) => {
    try {
        const Employee = new userc2({
            size: req.body.size,
            gct: req.body.gct,
            ht: req.body.ht
        })
        const saved =  Employee.save();
    } catch (error) {
        res.send(error);
    }
});


app.post('/newitem.ejs/c3',(req, res) => {
    try {
        const Employee = new userc3({
            size: req.body.size,
            gct: req.body.gct,
            ht: req.body.ht
        })
        const saved =  Employee.save();
    } catch (error) {
        res.send(error);
    }
});


app.post('/newitem.ejs/d1',(req, res) => {
    try {
        const Employee = new userd1({
            size: req.body.size,
            gct: req.body.gct,
            ht: req.body.ht
        })
        const saved =  Employee.save();
    } catch (error) {
        res.send(error);
    }
});


app.post('/newitem.ejs/d2',(req, res) => {
    try {
        const Employee = new userd2({
            size: req.body.size,
            gct: req.body.gct,
            ht: req.body.ht
        })
        const saved =  Employee.save();
    } catch (error) {
        res.send(error);
    }
});


app.post('/newitem.ejs/d3',(req, res) => {
    try {
        const Employee = new userd3({
            size: req.body.size,
            gct: req.body.gct,
            ht: req.body.ht
        })
        const saved =  Employee.save();
    } catch (error) {
        res.send(error);
    }
});


app.get('/station.ejs',async (req, res) => {
    usera1.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.render("station", { records: data });
        };
    });
});

app.get('/a1.ejs', (req, res) => {
    usera1.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.render("a1", { records: data });
        };
    });
});

app.get('/a2.ejs', (req, res) => {
    usera2.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.render("a2", { records: data });
        };
    });
});

app.get('/a3.ejs', (req, res) => {
    usera3.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.render("a3", { records: data });
        };
    });
});

app.get('/b1.ejs', (req, res) => {
    userb1.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.render("b1", { records: data });
        };
    });
});

app.get('/b2.ejs', (req, res) => {
    userb2.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.render("b2", { records: data });
        };
    });
});

app.get('/b3.ejs', (req, res) => {
    userb3.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.render("b3", { records: data });
        };
    });
});
app.get('/c1.ejs', (req, res) => {
    userc1.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.render("c1", { records: data });
        };
    });
});

app.get('/c2.ejs', (req, res) => {
    userc2.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.render("c2", { records: data });
        };
    });
});

app.get('/c3.ejs', (req, res) => {
    userc3.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.render("c3", { records: data });
        };
    });
});
app.get('/d1.ejs', (req, res) => {
    userd1.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.render("d1", { records: data });
        };
    });
});

app.get('/d2.ejs', (req, res) => {
    userd2.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.render("d2", { records: data });
        };
    });
});

app.get('/d3.ejs', (req, res) => {
    userd3.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.render("d3", { records: data });
        };
    });
});

app.get('/generatesheet/a1',async (req, res) => {
    var wb = XLSX.utils.book_new();
    usera1.find((err, data) => {
        if(err){
            console.log(err);
        } else {
            var temp = JSON.stringify(data);
            temp = JSON.parse(temp);
            var ws = XLSX.utils.json_to_sheet(temp);
            var now = new Date();
            var down = __dirname + '/a1-'+ now.getDate() + "-"+ now.getMonth() + "-" + now.getFullYear() +'.xlsx'
            XLSX.utils.book_append_sheet(wb,ws,"sheet 1");
            XLSX.writeFile(wb,down);
            res.download(down);
        }
    });
});

app.get('/generatesheet/a2',async (req, res) => {
    var wb = XLSX.utils.book_new();
    usera2.find((err, data) => {
        if(err){
            console.log(err);
        } else {
            var temp = JSON.stringify(data);
            temp = JSON.parse(temp);
            var ws = XLSX.utils.json_to_sheet(temp);
            var now = new Date();
            var down = __dirname + '/a2-'+ now.getDate() + "-"+ now.getMonth() + "-" + now.getFullYear() +'.xlsx'
            XLSX.utils.book_append_sheet(wb,ws,"sheet 1");
            XLSX.writeFile(wb,down);
            res.download(down);
        }
    });
});

app.get('/generatesheet/a3',async (req, res) => {
    var wb = XLSX.utils.book_new();
    usera3.find((err, data) => {
        if(err){
            console.log(err);
        } else {
            var temp = JSON.stringify(data);
            temp = JSON.parse(temp);
            var ws = XLSX.utils.json_to_sheet(temp);
            var now = new Date();
            var down = __dirname + '/a3-'+ now.getDate() + "-"+ now.getMonth() + "-" + now.getFullYear() +'.xlsx'
            XLSX.utils.book_append_sheet(wb,ws,"sheet 1");
            XLSX.writeFile(wb,down);
            res.download(down);
        }
    });
});

app.get('/generatesheet/b1',async (req, res) => {
    var wb = XLSX.utils.book_new();
    userb1.find((err, data) => {
        if(err){
            console.log(err);
        } else {
            var temp = JSON.stringify(data);
            temp = JSON.parse(temp);
            var ws = XLSX.utils.json_to_sheet(temp);
            var now = new Date();
            var down = __dirname + '/b1-'+ now.getDate() + "-"+ now.getMonth() + "-" + now.getFullYear() +'.xlsx'
            XLSX.utils.book_append_sheet(wb,ws,"sheet 1");
            XLSX.writeFile(wb,down);
            res.download(down);
        }
    });
});

app.get('/generatesheet/b2',async (req, res) => {
    var wb = XLSX.utils.book_new();
    userb2.find((err, data) => {
        if(err){
            console.log(err);
        } else {
            var temp = JSON.stringify(data);
            temp = JSON.parse(temp);
            var ws = XLSX.utils.json_to_sheet(temp);
            var now = new Date();
            var down = __dirname + '/b2-'+ now.getDate() + "-"+ now.getMonth() + "-" + now.getFullYear() +'.xlsx'
            XLSX.utils.book_append_sheet(wb,ws,"sheet 1");
            XLSX.writeFile(wb,down);
            res.download(down);
        }
    });
});

app.get('/generatesheet/b3',async (req, res) => {
    var wb = XLSX.utils.book_new();
    userb3.find((err, data) => {
        if(err){
            console.log(err);
        } else {
            var temp = JSON.stringify(data);
            temp = JSON.parse(temp);
            var ws = XLSX.utils.json_to_sheet(temp);
            var now = new Date();
            var down = __dirname + '/b3-'+ now.getDate() + "-"+ now.getMonth() + "-" + now.getFullYear() +'.xlsx'
            XLSX.utils.book_append_sheet(wb,ws,"sheet 1");
            XLSX.writeFile(wb,down);
            res.download(down);
        }
    });
});


app.get('/generatesheet/c1',async (req, res) => {
    var wb = XLSX.utils.book_new();
    userc1.find((err, data) => {
        if(err){
            console.log(err);
        } else {
            var temp = JSON.stringify(data);
            temp = JSON.parse(temp);
            var ws = XLSX.utils.json_to_sheet(temp);
            var now = new Date();
            var down = __dirname + '/c1-'+ now.getDate() + "-"+ now.getMonth() + "-" + now.getFullYear() +'.xlsx'
            XLSX.utils.book_append_sheet(wb,ws,"sheet 1");
            XLSX.writeFile(wb,down);
            res.download(down);
        }
    });
});

app.get('/generatesheet/c2',async (req, res) => {
    var wb = XLSX.utils.book_new();
    userc2.find((err, data) => {
        if(err){
            console.log(err);
        } else {
            var temp = JSON.stringify(data);
            temp = JSON.parse(temp);
            var ws = XLSX.utils.json_to_sheet(temp);
            var now = new Date();
            var down = __dirname + '/c2-'+ now.getDate() + "-"+ now.getMonth() + "-" + now.getFullYear() +'.xlsx'
            XLSX.utils.book_append_sheet(wb,ws,"sheet 1");
            XLSX.writeFile(wb,down);
            res.download(down);
        }
    });
});

app.get('/generatesheet/c3',async (req, res) => {
    var wb = XLSX.utils.book_new();
    userc3.find((err, data) => {
        if(err){
            console.log(err);
        } else {
            var temp = JSON.stringify(data);
            temp = JSON.parse(temp);
            var ws = XLSX.utils.json_to_sheet(temp);
            var now = new Date();
            var down = __dirname + '/c3-'+ now.getDate() + "-"+ now.getMonth() + "-" + now.getFullYear() +'.xlsx'
            XLSX.utils.book_append_sheet(wb,ws,"sheet 1");
            XLSX.writeFile(wb,down);
            res.download(down);
        }
    });
});


app.get('/generatesheet/d1',async (req, res) => {
    var wb = XLSX.utils.book_new();
    userd1.find((err, data) => {
        if(err){
            console.log(err);
        } else {
            var temp = JSON.stringify(data);
            temp = JSON.parse(temp);
            var ws = XLSX.utils.json_to_sheet(temp);
            var now = new Date();
            var down = __dirname + '/d1-'+ now.getDate() + "-"+ now.getMonth() + "-" + now.getFullYear() +'.xlsx'
            XLSX.utils.book_append_sheet(wb,ws,"sheet 1");
            XLSX.writeFile(wb,down);
            res.download(down);
        }
    });
});

app.get('/generatesheet/d2',async (req, res) => {
    var wb = XLSX.utils.book_new();
    userd2.find((err, data) => {
        if(err){
            console.log(err);
        } else {
            var temp = JSON.stringify(data);
            temp = JSON.parse(temp);
            var ws = XLSX.utils.json_to_sheet(temp);
            var now = new Date();
            var down = __dirname + '/d2-'+ now.getDate() + "-"+ now.getMonth() + "-" + now.getFullYear() +'.xlsx'
            XLSX.utils.book_append_sheet(wb,ws,"sheet 1");
            XLSX.writeFile(wb,down);
            res.download(down);
        }
    });
});

app.get('/generatesheet/d3',async (req, res) => {
    var wb = XLSX.utils.book_new();
    userd3.find((err, data) => {
        if(err){
            console.log(err);
        } else {
            var temp = JSON.stringify(data);
            temp = JSON.parse(temp);
            var ws = XLSX.utils.json_to_sheet(temp);
            var now = new Date();
            var down = __dirname + '/d3-'+ now.getDate() + "-"+ now.getMonth() + "-" + now.getFullYear() +'.xlsx'
            XLSX.utils.book_append_sheet(wb,ws,"sheet 1");
            XLSX.writeFile(wb,down);
            res.download(down);
        }
    });
});

app.post('/useda1',async (req,res) => {
    await usera1.deleteOne({ size: req.body.size }, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("Object Deleted");
    res.redirect("/a1.ejs")
})

app.post('/a2.ejs',async (req,res) => {
    usera2.deleteOne({ size: req.body.size }, function(err) {
        if (err) {
            console.log(err);
        }
    });
    res.redirect("/a2.ejs")
})

app.post('/a3.ejs',async (req,res) => {
    usera3.deleteOne({ size: req.body.size }, function(err) {
        if (err) {
            console.log(err);
        }
    });
    res.redirect("/a3.ejs")
})


app.post('/b1.ejs',async (req,res) => {
    userb1.deleteOne({ size: req.body.size }, function(err) {
        if (err) {
            console.log(err);
        }
    });
    res.redirect("/b1.ejs")
})

app.post('/b2.ejs',async (req,res) => {
    userb2.deleteOne({ size: req.body.size }, function(err) {
        if (err) {
            console.log(err);
        }
    });
    res.redirect("/b2.ejs")
})

app.post('/b3.ejs',async (req,res) => {
    userb3.deleteOne({ size: req.body.size }, function(err) {
        if (err) {
            console.log(err);
        }
    });
    res.redirect("/b3.ejs")
})


app.post('/c1.ejs',async (req,res) => {
    userc1.deleteOne({ size: req.body.size }, function(err) {
        if (err) {
            console.log(err);
        }
    });
    res.redirect("/c1.ejs")
})

app.post('/c2.ejs',async (req,res) => {
    userc2.deleteOne({ size: req.body.size }, function(err) {
        if (err) {
            console.log(err);
        }
    });
    res.redirect("/c2.ejs")
})

app.post('/c3.ejs',async (req,res) => {
    userc3.deleteOne({ size: req.body.size }, function(err) {
        if (err) {
            console.log(err);
        }
    });
    res.redirect("/c3.ejs")
})


app.post('/d1.ejs',async (req,res) => {
    userd1.deleteOne({ size: req.body.size }, function(err) {
        if (err) {
            console.log(err);
        }
    });
    res.redirect("/d1.ejs")
})

app.post('/d2.ejs',async (req,res) => {
    userd2.deleteOne({ size: req.body.size }, function(err) {
        if (err) {
            console.log(err);
        }
    });
    res.redirect("/d2.ejs")
})

app.post('/d3.ejs',async (req,res) => {
    userd3.deleteOne({ size: req.body.size }, function(err) {
        if (err) {
            console.log(err);
        }
    });
    res.redirect("/d3.ejs")
})

app.post('/a1',async (req, res) => {
    const dest = req.body.example;
    try {
        if(dest == "a2")
        {
            const Employee = new usera2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a1.ejs")
        }
        else if (dest == "a3"){
            const Employee = new usera3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a1.ejs")
        }
        else if (dest == "b1"){
            const Employee = new userb1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a1.ejs")
        }
        else if (dest == "b2"){
            const Employee = new userb2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a1.ejs")
        }
        else if (dest == "b3"){
            const Employee = new userb3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a1.ejs")
        }
        else if (dest == "c1"){
            const Employee = new userc1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a1.ejs")
        }
        else if (dest == "c2"){
            const Employee = new userc2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a1.ejs")
        }
        else if (dest == "c3"){
            const Employee = new userc3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a1.ejs")
        }
        else if (dest == "d1"){
            const Employee = new userd1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a1.ejs")
        }
        else if (dest == "d2"){
            const Employee = new userd2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a1.ejs")
        }
        else if (dest == "d3"){
            const Employee = new userd3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a1.ejs")
        }
        else{
            console.log("Error in selecting route");
        }
    } catch (error) {
        res.send(error);
    }
    usera1.deleteOne({ size: req.body.size }, function(err) {
        if (err) {
            console.log(err);
        }
    });
})

app.post('/a2',async (req, res) => {
    const dest = req.body.example;
    try {
        if(dest == "a1")
        {
            const Employee = new usera1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a2.ejs")
        }
        else if (dest == "a3"){
            const Employee = new usera3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a2.ejs")
        }
        else if (dest == "b1"){
            const Employee = new userb1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a2.ejs")
        }
        else if (dest == "b2"){
            const Employee = new userb2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a2.ejs")
        }
        else if (dest == "b3"){
            const Employee = new userb3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a2.ejs")
        }
        else if (dest == "c1"){
            const Employee = new userc1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a2.ejs")
        }
        else if (dest == "c2"){
            const Employee = new userc2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a2.ejs")
        }
        else if (dest == "c3"){
            const Employee = new userc3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a2.ejs")
        }
        else if (dest == "d1"){
            const Employee = new userd1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a2.ejs")
        }
        else if (dest == "d2"){
            const Employee = new userd2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a2.ejs")
        }
        else if (dest == "d3"){
            const Employee = new userd3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a2.ejs")
        }
        else{
            console.log("Error in selecting route");
        }
    } catch (error) {
        res.send(error);
    }
    usera2.deleteOne({ size: req.body.size }, function(err) {
        if (err) {
            console.log(err);
        }
    });
})

app.post('/a3',async (req, res) => {
    const dest = req.body.example;
    try {
        if(dest == "a1")
        {
            const Employee = new usera1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a3.ejs")
        }
        else if (dest == "a2"){
            const Employee = new usera2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            console.log("New user created");
            const saved = await Employee.save();
            console.log("New user saved");
            res.redirect("/a3.ejs")
        }
        else if (dest == "b1"){
            const Employee = new userb1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a3.ejs")
        }
        else if (dest == "b2"){
            const Employee = new userb2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a3.ejs")
        }
        else if (dest == "b3"){
            const Employee = new userb3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a3.ejs")
        }
        else if (dest == "c1"){
            const Employee = new userc1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a3.ejs")
        }
        else if (dest == "c2"){
            const Employee = new userc2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a3.ejs")
        }
        else if (dest == "c3"){
            const Employee = new userc3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a3.ejs")
        }
        else if (dest == "d1"){
            const Employee = new userd1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a3.ejs")
        }
        else if (dest == "d2"){
            const Employee = new userd2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a3.ejs")
        }
        else if (dest == "d3"){
            const Employee = new userd3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a3.ejs")
        }
        else{
            console.log("Error in selecting route");
        }
    } catch (error) {
        res.send(error);
    }
    usera3.deleteOne({ size: req.body.size }, function(err) {
        if (err) {
            console.log(err);
        }
    });
})


app.post('/b1',async (req, res) => {
    const dest = req.body.example;
    try {
        console.log("Inside try block");
        if(dest == "a1")
        {
            const Employee = new usera1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            console.log("New user created");
            const saved = await Employee.save();
            console.log("New user saved");
            res.redirect("/b1.ejs")
        }
        else if (dest == "a2"){
            const Employee = new usera2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b1.ejs")
        }
        else if (dest == "a3"){
            const Employee = new usera3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b1.ejs")
        }
        else if (dest == "b2"){
            const Employee = new userb2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b1.ejs")
        }
        else if (dest == "b3"){
            const Employee = new userb3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b1.ejs")
        }
        else if (dest == "c1"){
            const Employee = new userc1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b1.ejs")
        }
        else if (dest == "c2"){
            const Employee = new userc2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b1.ejs")
        }
        else if (dest == "c3"){
            const Employee = new userc3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b1.ejs")
        }
        else if (dest == "d1"){
            const Employee = new userd1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b1.ejs")
        }
        else if (dest == "d2"){
            const Employee = new userd2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b1.ejs")
        }
        else if (dest == "d3"){
            const Employee = new userd3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b1.ejs")
        }
        else{
            console.log("Error in selecting route");
        }
    } catch (error) {
        res.send(error);
    }
    userb1.deleteOne({ size: req.body.size }, function(err) {
        if (err) {
            console.log(err);
        }
    });
})


app.post('/b2',async (req, res) => {
    const dest = req.body.example;
    try {
        if(dest == "a1")
        {
            const Employee = new usera1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            console.log("New user created");
            const saved = await Employee.save();
            console.log("New user saved");
            res.redirect("/b2.ejs")
        }
        else if (dest == "a2"){
            const Employee = new usera2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b2.ejs")
        }
        else if (dest == "a3"){
            const Employee = new usera3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b2.ejs")
        }
        else if (dest == "b1"){
            const Employee = new userb1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b2.ejs")
        }
        else if (dest == "b3"){
            const Employee = new userb3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b2.ejs")
        }
        else if (dest == "c1"){
            const Employee = new userc1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b2.ejs")
        }
        else if (dest == "c2"){
            const Employee = new userc2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b2.ejs")
        }
        else if (dest == "c3"){
            const Employee = new userc3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b2.ejs")
        }
        else if (dest == "d1"){
            const Employee = new userd1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b2.ejs")
        }
        else if (dest == "d2"){
            const Employee = new userd2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b2.ejs")
        }
        else if (dest == "d3"){
            const Employee = new userd3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b2.ejs")
        }
        else{
            console.log("Error in selecting route");
        }
    } catch (error) {
        res.send(error);
    }
    userb2.deleteOne({ size: req.body.size }, function(err) {
        if (err) {
            console.log(err);
        }
    });
})


app.post('/b3',async (req, res) => {
    const dest = req.body.example;
    try {
        if (dest == "a1"){
            const Employee = new usera1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b3.ejs")
        }
        else if(dest == "a2")
        {
            const Employee = new usera2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b3.ejs")
        }
        else if (dest == "a3"){
            const Employee = new usera3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b3.ejs")
        }
        else if (dest == "b1"){
            const Employee = new userb1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b3.ejs")
        }
        else if (dest == "b2"){
            const Employee = new userb2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b3.ejs")
        }
        else if (dest == "c1"){
            const Employee = new userc1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b3.ejs")
        }
        else if (dest == "c2"){
            const Employee = new userc2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b3.ejs")
        }
        else if (dest == "c3"){
            const Employee = new userc3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b3.ejs")
        }
        else if (dest == "d1"){
            const Employee = new userd1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b3.ejs")
        }
        else if (dest == "d2"){
            const Employee = new userd2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b3.ejs")
        }
        else if (dest == "d3"){
            const Employee = new userd3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/b3.ejs")
        }
        else{
            console.log("Error in selecting route");
        }
    } catch (error) {
        res.send(error);
    }
    userb3.deleteOne({ size: req.body.size }, function(err) {
        if (err) {
            console.log(err);
        }
    });
})


app.post('/c1',async (req, res) => {
    const dest = req.body.example;
    try {
        
        if (dest == "a1"){
            const Employee = new usera1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c1.ejs")
        }
        else if(dest == "a2")
        {
            const Employee = new usera2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c1.ejs")
        }
        else if (dest == "a3"){
            const Employee = new usera3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c1.ejs")
        }
        else if (dest == "b1"){
            const Employee = new userb1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c1.ejs")
        }
        else if (dest == "b2"){
            const Employee = new userb2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c1.ejs")
        }
        else if (dest == "b3"){
            const Employee = new userb3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c1.ejs")
        }
        
        else if (dest == "c2"){
            const Employee = new userc2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c1.ejs")
        }
        else if (dest == "c3"){
            const Employee = new userc3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c1.ejs")
        }
        else if (dest == "d1"){
            const Employee = new userd1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c1.ejs")
        }
        else if (dest == "d2"){
            const Employee = new userd2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c1.ejs")
        }
        else if (dest == "d3"){
            const Employee = new userd3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c1.ejs")
        }
        else{
            console.log("Error in selecting route");
        }
    } catch (error) {
        res.send(error);
    }
    userc1.deleteOne({ size: req.body.size }, function(err) {
        if (err) {
            console.log(err);
        }
    });
})


app.post('/c2',async (req, res) => {
    const dest = req.body.example;
    try {
        console.log("Inside try block");
        
        if (dest == "a1"){
            const Employee = new usera1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c2.ejs")
        }
        else if(dest == "a2")
        {
            const Employee = new usera2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c2.ejs")
        }
        else if (dest == "a3"){
            const Employee = new usera3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c2.ejs")
        }
        else if (dest == "b1"){
            const Employee = new userb1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c2.ejs")
        }
        else if (dest == "b2"){
            const Employee = new userb2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c2.ejs")
        }
        else if (dest == "b3"){
            const Employee = new userb3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c2.ejs")
        }
        else if (dest == "c1"){
            const Employee = new userc1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c2.ejs")
        }
        
        else if (dest == "c3"){
            const Employee = new userc3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c2.ejs")
        }
        else if (dest == "d1"){
            const Employee = new userd1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c2.ejs")
        }
        else if (dest == "d2"){
            const Employee = new userd2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c2.ejs")
        }
        else if (dest == "d3"){
            const Employee = new userd3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c2.ejs")
        }
        else{
            console.log("Error in selecting route");
        }
    } catch (error) {
        res.send(error);
    }
    userc2.deleteOne({ size: req.body.size }, function(err) {
        if (err) {
            console.log(err);
        }
    });
})


app.post('/c3',async (req, res) => {
    const dest = req.body.example;
    try {
        
        if (dest == "a1"){
            const Employee = new usera1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c3.ejs")
        }
        else if(dest == "a2")
        {
            const Employee = new usera2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c3.ejs")
        }
        else if (dest == "a3"){
            const Employee = new usera3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/a3.ejs")
        }
        else if (dest == "b1"){
            const Employee = new userb1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c3.ejs")
        }
        else if (dest == "b2"){
            const Employee = new userb2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c3.ejs")
        }
        else if (dest == "b3"){
            const Employee = new userb3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c3.ejs")
        }
        else if (dest == "c1"){
            const Employee = new userc1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c3.ejs")
        }
        else if (dest == "c2"){
            const Employee = new userc2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c3.ejs")
        }
        else if (dest == "d1"){
            const Employee = new userd1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c3.ejs")
        }
        else if (dest == "d2"){
            const Employee = new userd2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c3.ejs")
        }
        else if (dest == "d3"){
            const Employee = new userd3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/c3.ejs")
        }
        else{
            console.log("Error in selecting route");
        }
    } catch (error) {
        res.send(error);
    }
    userc3.deleteOne({ size: req.body.size }, function(err) {
        if (err) {
            console.log(err);
        }
    });
})


app.post('/d1',async (req, res) => {
    const dest = req.body.example;
    try {
        if (dest == "a1"){
            const Employee = new usera1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d1.ejs")
        }
        else if(dest == "a2")
        {
            const Employee = new usera2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d1.ejs")
        }
        else if (dest == "a3"){
            const Employee = new usera3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d1.ejs")
        }
        else if (dest == "b1"){
            const Employee = new userb1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d1.ejs")
        }
        else if (dest == "b2"){
            const Employee = new userb2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d1.ejs")
        }
        else if (dest == "b3"){
            const Employee = new userb3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d1.ejs")
        }
        else if (dest == "c1"){
            const Employee = new userc1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d1.ejs")
        }
        else if (dest == "c2"){
            const Employee = new userc2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d1.ejs")
        }
        else if (dest == "c3"){
            const Employee = new userc3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d1.ejs")
        }
        else if (dest == "d2"){
            const Employee = new userd2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d1.ejs")
        }
        else if (dest == "d3"){
            const Employee = new userd3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d1.ejs")
        }
        else{
            console.log("Error in selecting route");
        }
    } catch (error) {
        res.send(error);
    }
    userd1.deleteOne({ size: req.body.size }, function(err) {
        if (err) {
            console.log(err);
        }
    });
})


app.post('/d2',async (req, res) => {
    const dest = req.body.example;
    try {
        
        if (dest == "a1"){
            const Employee = new usera1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d2.ejs")
        }
        else if(dest == "a2")
        {
            const Employee = new usera2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d2.ejs")
        }
        else if (dest == "a3"){
            const Employee = new usera3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d2.ejs")
        }
        else if (dest == "b1"){
            const Employee = new userb1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d2.ejs")
        }
        else if (dest == "b2"){
            const Employee = new userb2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d2.ejs")
        }
        else if (dest == "b3"){
            const Employee = new userb3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d2.ejs")
        }
        else if (dest == "c1"){
            const Employee = new userc1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d2.ejs")
        }
        else if (dest == "c2"){
            const Employee = new userc2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d2.ejs")
        }
        else if (dest == "c3"){
            const Employee = new userc3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d2.ejs")
        }
        else if (dest == "d1"){
            const Employee = new userd1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d2.ejs")
        }
        else if (dest == "d3"){
            const Employee = new userd3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d2.ejs")
        }
        else{
            console.log("Error in selecting route");
        }
    } catch (error) {
        res.send(error);
    }
    userd2.deleteOne({ size: req.body.size }, function(err) {
        if (err) {
            console.log(err);
        }
    });
})


app.post('/d3',async (req, res) => {
    const dest = req.body.example;
    try {
        if (dest == "a1"){
            const Employee = new usera1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d3.ejs")
        }
        else if(dest == "a2")
        {
            const Employee = new usera2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d3.ejs")
        }
        
        else if (dest == "b1"){
            const Employee = new userb1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d3.ejs")
        }
        else if (dest == "b2"){
            const Employee = new userb2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d3.ejs")
        }
        else if (dest == "b3"){
            const Employee = new userb3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d3.ejs")
        }
        else if (dest == "c1"){
            const Employee = new userc1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d3.ejs")
        }
        else if (dest == "c2"){
            const Employee = new userc2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d3.ejs")
        }
        else if (dest == "c3"){
            const Employee = new userc3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d3.ejs")
        }
        else if (dest == "d1"){
            const Employee = new userd1({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d3.ejs")
        }
        else if (dest == "d2"){
            const Employee = new userd2({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d3.ejs")
        }
        else if (dest == "a3"){
            const Employee = new usera3({
                size: req.body.size,
                gct: req.body.gct,
                ht: req.body.ht
            })
            const saved = await Employee.save();
            res.redirect("/d3.ejs")
        }
        else{
            console.log("Error in selecting route");
        }
    } catch (error) {
        res.send(error);
    }
    userd3.deleteOne({ size: req.body.size }, function(err) {
        if (err) {
            console.log(err);
        }
    });
})

// app.post("/search", function(req, res) {  
//     const a = usera1.find({
//         size: req.body.query
//     })
//     console.log("Query is: ",req.body.query);
//     console.log("Query Output is: ",a);
//     res.redirect("/")
// })

// app.post("/search", function(req, res) { 
//     userc3.find({size: req.body.query}, function (err, data) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.render("index", { records: data });
//         };
//     });
// })

app.post("/search",function(req,res){
    var regex = new RegExp(req.body.query);
    usera1.find({size:regex}).then((result)=>{
        // res.status(200).json(result)
        res.render("search.ejs", { records: result });
    })
})

app.post('/search/a1', function(req, res){
    var regex = new RegExp(req.body.query);
    usera1.find({size:regex}).then((result)=>{
        // res.status(200).json(result)
        res.render("a1", { records: result });
    })
});
app.post('/search/a2', function(req, res){
    var regex = new RegExp(req.body.query);
    usera1.find({size:regex}).then((result)=>{
        // res.status(200).json(result)
        res.render("a2", { records: result });
    })
});
app.post('/search/a3', function(req, res){
    var regex = new RegExp(req.body.query);
    usera1.find({size:regex}).then((result)=>{
        // res.status(200).json(result)
        res.render("a3", { records: result });
    })
});
app.post('/search/b1', function(req, res){
    var regex = new RegExp(req.body.query);
    usera1.find({size:regex}).then((result)=>{
        // res.status(200).json(result)
        res.render("b1", { records: result });
    })
});
app.post('/search/b2', function(req, res){
    var regex = new RegExp(req.body.query);
    usera1.find({size:regex}).then((result)=>{
        // res.status(200).json(result)
        res.render("b2", { records: result });
    })
});
app.post('/search/b3', function(req, res){
    var regex = new RegExp(req.body.query);
    usera1.find({size:regex}).then((result)=>{
        // res.status(200).json(result)
        res.render("b3", { records: result });
    })
});
app.post('/search/c1', function(req, res){
    var regex = new RegExp(req.body.query);
    usera1.find({size:regex}).then((result)=>{
        // res.status(200).json(result)
        res.render("c1", { records: result });
    })
});
app.post('/search/c2', function(req, res){
    var regex = new RegExp(req.body.query);
    usera1.find({size:regex}).then((result)=>{
        // res.status(200).json(result)
        res.render("c2", { records: result });
    })
});
app.post('/search/c3', function(req, res){
    var regex = new RegExp(req.body.query);
    usera1.find({size:regex}).then((result)=>{
        // res.status(200).json(result)
        res.render("c3", { records: result });
    })
});
app.post('/search/d1', function(req, res){
    var regex = new RegExp(req.body.query);
    usera1.find({size:regex}).then((result)=>{
        // res.status(200).json(result)
        res.render("d1", { records: result });
    })
});
app.post('/search/d2', function(req, res){
    var regex = new RegExp(req.body.query);
    usera1.find({size:regex}).then((result)=>{
        // res.status(200).json(result)
        res.render("d2", { records: result });
    })
});
app.post('/search/d3', function(req, res){
    var regex = new RegExp(req.body.query);
    usera1.find({size:regex}).then((result)=>{
        // res.status(200).json(result)
        res.render("d3", { records: result });
    })
});




app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});