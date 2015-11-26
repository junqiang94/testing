var port = process.env.port || 1337;
var Datastore = require('nedb');
var db = new Datastore({ filename: "doc/databasesystem.txt", autoload: true });
var Promise = require('asyncawait/node_modules/bluebird');
var await = require('asyncawait/await');
var async = require('asyncawait/async');
//var test = async(function () {
//    var arr = [];
//    var count = 0;
//    var doc = {};
//    while (count > -1) {
//        doc['_id'] = count++;
//        await(insertDB(doc));        //console.log(count);
//    }
//});
//test();
function insertDB(obj) {
    var promise = new Promise(function (resolve, reject) {
        db.insert(obj, function (err, newDoc) {
            if (!err) {
                resolve();
            }
            else {
                resolve(err);
                console.log(err);
            }
        });
    });
    return promise;
}
function loadDB() {
    //db.loadDatabase(function (err) {    // Callback is optional
    //    // Now commands will be executed
    //    if (!err)
    //        console.log("load success");
    //    else
    //        console.log(err);
    //});
    //var doc = {
    //    _id: 9
    //    , hello: 'omg'
    //    , n: 5
    //    , today: new Date()
    //    , nedbIsAwesome: true
    //    , notthere: null
    //    , notToBeSaved: undefined  // Will not be saved
    //    , fruits: ['apple', 'orange', 'pear']
    //    , infos: { name: 'nedb' }
    //}
    //db.insert([{ _id: 'id1', planet: 'Mars', system: 'solar', inhabited: false, satellites: ['Phobos', 'Deimos'] },
    //    { _id: 'id2', planet: 'Earth', system: 'solar', inhabited: true, humans: { genders: 2, eyes: true } },
    //    { _id: 'id3', planet: 'Jupiter', system: 'solar', inhabited: false },
    //    { _id: 'id4', planet: 'Omicron Persei 8', system: 'futurama', inhabited: true, humans: { genders: 7 } },
    //    { _id: 'id5', completeData: { planets: [{ name: 'Earth', number: 3 }, { name: 'Mars', number: 2 }, { name: 'Pluton', number: 9 }] } }]
    //    , function (err, newDoc) {
    //        if (!err)
    //            console.log("insert success");
    //        else
    //            console.log(err);
    //    });
    //db.find({ system: 'solar' }, function (err, docs) {
    //    if (!err)
    //        console.log(docs);
    //    else
    //        console.log(err);
    //});
    db.find({ name: /JALAN USJ 6/ }, function (err, docs) {
        if (!err)
            console.log(docs);
        else
            console.log(err);
    });
    //db.find({ "completeData.planets.name": "Mars" }, function (err, docs) {
    //    if (!err)
    //        console.log(docs);
    //    else
    //        console.log(err);
    //});
    //db.find({ "completeData.planets.0.name": "Earth" }, function (err, docs) {
    //    if (!err)
    //        console.log(docs);
    //    else
    //        console.log(err);
    //});
    //db.find({}, function (err, docs) {
    //    if (!err)
    //        console.log(docs);
    //    else
    //        console.log(err);
    //});
}
loadDB();
//# sourceMappingURL=server.js.map