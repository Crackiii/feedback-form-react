const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const port = 3001
const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors())

app.post("/add_user", (req, res) => {
    res.send(req.body)
})



app.listen(port, () => { console.log("RUNNING SERVER...") })