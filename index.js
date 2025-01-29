const express = require('express')
const app = express()
const port = 5000

const config = require('./config/key');

const mongoose = require('mongoose')

//mongoURI > key > dev.js/prod.js 순서로 가져옴
mongoose.connect(config.mongoURI)
    .then(() => console.log('MongoDB Connected...'))
    .catch( (err) => console.log(err))

app.get('/', (req, res) => res.send('Hello Worldaa 안녕하세요aa'))

app.post('/register', async(req,res) => {

    const user = new User(req.body)

    await user
        .save()
        .then(() => {
            res.status(200).json({
                success: true,
            });
        })
        .catch((err) => {
            console.log({
                success: false,
                err: err,
            });
        });
});

app.listen(port, () => console.log(`Example app listening on port ${port}`))