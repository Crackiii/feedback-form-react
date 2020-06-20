const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const port = 3001
const {User, Feedback} = require('./models/models')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors())

app.post("/add_user", (req, res) => {




    User.create({
        name: req.body.name,
        email: req.body.email
    }).then(res => {
        console.log("RESPONSE --- ", res)
    })

    res.send(req.body)

})


User.findOne({ where: {email: 'ahmad.nadim2012'} }).then(project => {
    console.log(project.dataValues)
  })



// Feedback.create({
//     comment: "Simle Comment",
//     rating: 3,
//     ratedBy: 1
// }).then(res => {
//     console.log(res)
// })


app.listen(port, () => { console.log("RUNNING SERVER...") })