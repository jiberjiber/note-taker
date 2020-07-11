// Dependencies
var express = require("express");
var path = require("path");
var fs = require("fs");

// Express setup
var app = express();
var PORT = process.env.PORT || 3000;

// JSON Data Parsing
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// HTML Routes
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./public", "index.html"));
});

app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "./public", "notes.html"));
});

// API Routes
app.get("/api/notes", function(req, res){
    res.send(JSON.parse(fs.readFileSync('./db/db.json', 'utf-8')));
});

app.post("/api/notes", function(req, res){
    var newNote = req.body;
    var db = JSON.parse(fs.readFileSync('./db/db.json','utf-8'));

    newNote.id = db.length + 1;
    db.push(newNote);

    fs.writeFileSync("./db/db.json", JSON.stringify(db));
});

app.delete("/api/notes/:id", function(req, res){
    var reqId = req.params.id;
    var db = JSON.parse(fs.readFileSync('./db/db.json','utf-8'));

    for(var i = 0; i < db.length; i++){
        if(db[i].id == reqId){
            console.log(`Deleting ${JSON.stringify(db[i])}`);
            db.splice(i,1);
        }
    }

    console.log(`New db: ${JSON.stringify(db)}`);

    fs.writeFileSync("./db/db.json", JSON.stringify(db));
    return true;
});





// Start Server
app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`);
});