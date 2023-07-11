const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
var XLSX = require("xlsx");
require("dotenv").config()

const PORT_NUMBER = process.env.PORT_NUMBER;


if(!process.env.MONGODB_ATLAS_URL || !PORT_NUMBER){
    console.log("FATAL ERROR: CANNOT CONNECT TO THE DATABASE.");
    process.exit(1);
}

const hostname = '127.0.0.1';
const port = process.env.PORT || PORT_NUMBER;

require("./conn");
const user = require("./form");


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

app.post('/newitem.ejs',(req, res) => {
    try {
        const Employee = new user({
            size: req.body.size,
            gct: req.body.gct,
            ht: req.body.ht,
            station: req.body.station
        })
        const saved =  Employee.save();
    } catch (error) {
        res.send(error);
    }
});


app.get('/station.ejs',async (req, res) => {
    res.render("station");
});

app.get('/diffrent.ejs', (req, res) => {
    user.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.render("diffrent", { records: data });
        };
    });
});



app.get('/a1.ejs', (req, res) => {
    user.find({}, function (err, data) {  
        if (err) {
            console.log(err);
        } else {
            res.render("a1", { records: data });
        };
    });
});


app.get('/a2.ejs', (req, res) => {
    user.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.render("a2", { records: data });
        };
    });
});

app.get('/a3.ejs', (req, res) => {
    user.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.render("a3", { records: data });
        };
    });
});

app.get('/b1.ejs', (req, res) => {
    user.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.render("b1", { records: data });
        };
    });
});

app.get('/b2.ejs', (req, res) => {
    user.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.render("b2", { records: data });
        };
    });
});

app.get('/b3.ejs', (req, res) => {
    user.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.render("b3", { records: data });
        };
    });
});
app.get('/c1.ejs', (req, res) => {
    user.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.render("c1", { records: data });
        };
    });
});

app.get('/c2.ejs', (req, res) => {
    user.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.render("c2", { records: data });
        };
    });
});

app.get('/c3.ejs', (req, res) => {
    user.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.render("c3", { records: data });
        };
    });
});
app.get('/d1.ejs', (req, res) => {
    user.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.render("d1", { records: data });
        };
    });
});

app.get('/d2.ejs', (req, res) => {
    user.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.render("d2", { records: data });
        };
    });
});

app.get('/d3.ejs', (req, res) => {
    user.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.render("d3", { records: data });
        };
    });
});

app.post('/generatesheet',async (req, res) => {
    var st = req.body.station;
    var wb = XLSX.utils.book_new();
    user.find({station: st},(err, data) => {
        if(err){
            console.log(err);
        } else {
            var temp = JSON.stringify(data);
            temp = JSON.parse(temp);
            var ws = XLSX.utils.json_to_sheet(temp);
            var now = new Date();
            var down = __dirname + '/'+st+'-'+ now.getDate() + "-"+ now.getMonth() + "-" + now.getFullYear() +'.xlsx'
            XLSX.utils.book_append_sheet(wb,ws,"sheet 1");
            XLSX.writeFile(wb,down);
            res.download(down);
        }
    });
});

app.post('/send',async (req, res) => {
    const dest = req.body.example;
    try {
        if(dest == "a1")
        {
            var newvalues = { $set: {station: "a1"} };
            user.updateOne({ size: req.body.size },newvalues, function(err) {
                if (err) {
                    console.log(err);
                }
            });
        }
        else if(dest == "a2")
        {
            var newvalues = { $set: {station: "a2"} };
            user.updateOne({ size: req.body.size },newvalues, function(err) {
                if (err) {
                    console.log(err);
                }
            });
        }
        else if (dest == "a3"){
            var newvalues = { $set: {station: "a3"} };
            user.updateOne({ size: req.body.size },newvalues, function(err) {
                if (err) {
                    console.log(err);
                }
            });
        }
        else if (dest == "b1"){
            var newvalues = { $set: {station: "b1"} };
            user.updateOne({ size: req.body.size },newvalues, function(err) {
                if (err) {
                    console.log(err);
                }
            });
        }
        else if (dest == "b2"){
            var newvalues = { $set: {station: "b2"} };
            user.updateOne({ size: req.body.size },newvalues, function(err) {
                if (err) {
                    console.log(err);
                }
            });
        }
        else if (dest == "b3"){
            var newvalues = { $set: {station: "b3"} };
            user.updateOne({ size: req.body.size },newvalues, function(err) {
                if (err) {
                    console.log(err);
                }
            });
        }
        else if (dest == "c1"){
            var newvalues = { $set: {station: "c1"} };
            user.updateOne({ size: req.body.size },newvalues, function(err) {
                if (err) {
                    console.log(err);
                }
            });
        }
        else if (dest == "c2"){
            var newvalues = { $set: {station: "c2"} };
            user.updateOne({ size: req.body.size },newvalues, function(err) {
                if (err) {
                    console.log(err);
                }
            });
        }
        else if (dest == "c3"){
            var newvalues = { $set: {station: "c3"} };
            user.updateOne({ size: req.body.size },newvalues, function(err) {
                if (err) {
                    console.log(err);
                }
            });
        }
        else if (dest == "d1"){
            var newvalues = { $set: {station: "d1"} };
            user.updateOne({ size: req.body.size },newvalues, function(err) {
                if (err) {
                    console.log(err);
                }
            });
        }
        else if (dest == "d2"){
            var newvalues = { $set: {station: "d2"} };
            user.updateOne({ size: req.body.size },newvalues, function(err) {
                if (err) {
                    console.log(err);
                }
            });
        }
        else if (dest == "d3"){
            var newvalues = { $set: {station: "d3"} };
            user.updateOne({ size: req.body.size },newvalues, function(err) {
                if (err) {
                    console.log(err);
                }
            });
        }
        else{
            // Used function will be implemented here
            var newvalues = { $set: {station: "used"} };
            user.updateOne({ size: req.body.size },newvalues, function(err) {
                if (err) {
                    console.log(err);
                }
            });
        }
    } catch (error) {
        res.send(error);
    }
    setTimeout(() => {
        res.redirect("/a1.ejs")
    }, 300);
})

app.post("/search",function(req,res){
    var regex = new RegExp(req.body.query);
    var st = new RegExp(req.body.station);
    user.find({$and:[{station: st},{size:regex}]} ).then((result)=>{
        res.render("search.ejs", { records: result }); 
    })
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});