
//-- tests file
/* const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;
 */


const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';


MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);


    //-- INSERT
    db.collection('users').insertOne({
        name: 'Damir',
        age: 26
    }, (error, result) => {
        if (error) {
            return console.log(error)
        }

        console.log(result.ops);
    });


    //--- FIND    
    
    db.collection('users').findOne({_id: new ObjectID("5f8a1b8c6968462728814672")}, (error, result) => {
    if (error) {
        return console.log(error + ' Unable to fetch');
    }

    console.log(result);
});


db.collection('users').find({ name: 'Damir' }).toArray((error, result) => {
    console.log(result);
})
    
db.collection('tasks').findOne({ _id: new ObjectID("5f8a1e2a3d8dfe473c581f16") }, (error, result) => {
        if (error) {
            return console.log(error + ' Unable to fetch');
        }

        console.log(result);
    })

db.collection('tasks').find({ completed: false }).toArray((error, result) => {
    console.log(result);
})



//-- UPDATE

db.collection('users').updateOne({
    _id: new ObjectID("5f8a122e78a18b23306b0d21")
}, {
    $inc: {
        age: 1
    }
}).then((response) => {
    console.log(response);

}).catch((error) => {
    console.log(error);
})



db.collection('tasks').updateMany({
    description: 'Enginge service'
}, {
    $set: {
        completed: false
    }
}).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
})



//-- DELETE

db.collection('users').deleteMany({
    age: 36
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})


db.collection('tasks').deleteOne({
    description: "Morning report"
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})


})



