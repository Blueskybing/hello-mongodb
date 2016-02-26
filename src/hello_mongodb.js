/**
 * Created by bluesky on 16-2-22.
 */

/*var mongodb = require("mongodb");
var server = new mongodb.Server("localhost", 27017, {
    auto_reconnect: true
});
var conn = new mongodb.Db("test", server, {
    safe: true
});
conn.open(function (error, db) {
    if (error) throw error;
    db.collection("users", {
        safe: true
    }, function (err, collection) {
        if (err) throw err;
        collection.find().toArray(function (e, docs) {
            if (e) throw e;
            console.log(docs);
        });
    });
});*/


var mongodb = require('mongodb');
var server = new mongodb.Server('localhost', 27017, {auto_reconnect: true});
var db = new mongodb.Db('mydb', server, {safe: true});

db.open(function (err, db) {

    if (!err) {
        console.log('connect');
    } else {
        console.log(err);
    }
});


