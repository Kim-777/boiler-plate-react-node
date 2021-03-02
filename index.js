const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://ariwarabbang:asdf1234@boilerplate-shard-00-00.fhnli.mongodb.net:27017,boilerplate-shard-00-01.fhnli.mongodb.net:27017,boilerplate-shard-00-02.fhnli.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-5qnlri-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));



app.get('/', (req, res) => res.send('Hello World! 안녕하세여!!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));