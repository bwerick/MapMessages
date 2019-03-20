var express= require('express');
var app= express();
var bodyParser= require('body-parser');
var mongoose= require('mongoose');
//importing these libraries

app.use(bodyParser.json());

Marker = require('./models/marker');

//connecting to mongoose
mongoose.connect('mongodb://localhost/markers');
var db= mongoose.connection; //connect to database


app.get('/', function(req, res){ //landing page route
    res.send('Please use /api/markers');
});

//get all markers
app.get('/api/markers', function(req, res){ //route from apri genres page
    Marker.getMarkers(function(err, markers){
        if(err){
            throw err;
        }
        res.json(markers);
    });
});
//add a marker
app.post('/api/markers', function(req, res){ //route from api/markers page
    var marker = req.body;
    
    Marker.addMarker(marker, function(err, marker){
        if(err){
            throw err;
        }
        res.json(marker);
    });
});
//update marker
app.put('/api/markers/:_id', function(req, res){ //route from apri genres page
    var id = req.params._id;
    var marker = req.body;
    
    Marker.updateMarker(id, marker, {}, function(err, marker){
        if(err){
            throw err;
        }
        res.json(marker);
    });
});
//delete marker
app.delete('/api/markers/:_id', function(req, res){ //route from api page
    var id = req.params._id;
    
    
    Marker.deleteMarker(id, function(err, marker){
        if(err){
            throw err;
        }
        res.json(marker);
    });
});

app.listen(3000);  //local host port
console.log('Running on port 3000...'); 

