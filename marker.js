var mongoose= require('mongoose');

//marker schema

var markerSchema = mongoose.Schema({ //model for the api
    position: {
        lat:{
            type: Number,
            required: true
        },
        lng:{
            type: Number,
            required: true
        }
    },
    message100:{
        type: String,
        required: true
    }
});//end model

var Marker = module.exports= mongoose.model('Marker', markerSchema);
//exports the schema 

//get marker function
module.exports.getMarkers= function(callback, limit){
    Marker.find(callback).limit(limit);
}

//add marker function
module.exports.addMarker = function(marker, callback){
    Marker.create(marker,callback);
}

//update maerker
module.exports.updateMarker = function(id, marker, options, callback){
    var query = {_id: id};
    var update = {
        position: {
            lat: marker.position.lat,
            lng: marker.position.lng
        },
        message100: marker.message100
    }
    
    Marker.findOneAndUpdate(query, update, options,callback);
}

//delete marker
module.exports.deleteMarker = function(id, callback){
    var query = {_id: id};
    Marker.remove(query,callback);
}