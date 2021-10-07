// add http server
// -----------------------
const express = require('express');
const app = express();

const low     = require('lowdb');
const fs      = require('lowdb/adapters/FileSync');
const adapter = new fs('db.json');
const db      = low(adapter);

// configure express to serve static files from public directory
// ------------------------------------------------------------------
app.use(express.static('public'));

// init the data store
db.defaults({ posts: [], otherData: [] }).write();

// list posts
app.get('/data', function(req, res){     
    res.send(
        db.get('posts').value()
    );
});

// ----------------------------------------------------
// add post - test using:
//      curl http://localhost:3000/posts/ping/1/false
// ----------------------------------------------------
app.get('/posts/:title/:id/:published', function(req, res){
    const post = {
        'id': Number(req.params.id),
        'title': req.params.title,
        'publish': req.params.published === 'true' ? true : false,
    }

    db.get('posts').push(post).write();
    console.log(db.get('posts').value());
    res.send(db.get('posts').value());
});

// ----------------------------------------------------
// filter by published state - test using:
//      curl http://localhost:3000/published/true
// ----------------------------------------------------
app.get('/published/:boolean', function(req, res) {
    const boolean = req.params.boolean === 'true' ? true : false
    const data = db.get('posts').value().filter(data => data.publish === boolean);
    console.log(data);
    res.send(data);
});

// ----------------------------------------------------
// update published value - test using:
//      curl http://localhost:3000/published/1/true
// ----------------------------------------------------
// app.get('/published/:id/:boolean', function(req, res){
//     const boolean = req.params.boolean === 'true' ? true : false
//     db.get('posts').value().forEach(data => {
//         if (data.id === Number(req.params.id)) data.publish = boolean;
//     })
//     db.write();
//     console.log(db.get('posts').value());
//     res.send(db.get('posts').value());
// });

app.get('/published/:id/:boolean', function(req, res){
    const boolean = req.params.boolean === 'true' ? true : false
    db.get('posts')
        .find({id: Number(req.params.id)})
        .assign({publish: boolean})
        .write();
    console.log(db.get('posts').value());
    res.send(db.get('posts').value());
});

// ----------------------------------------------------
// delete entry by id - test using:
//      curl http://localhost:3000/delete/5
// ----------------------------------------------------
app.get('/delete/:id/', function(req, res){
    db.get('posts')
        .remove({id: Number(req.params.id)})
        .write();
    console.log(db.get('posts').value());
    res.send(db.get('posts').value());
});

// start server
// -----------------------
app.listen(3000, function() {
    console.log('Running on port 3000!');
});