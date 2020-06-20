const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const port = process.env.API_PORT | 3001

const { User, Feedback } = require('./models/models')
const { avatars } = require('./avatars/avatars')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.post("/add_user", (req, res) => {

    User.findOne({ attributes: ['id', 'name', 'email', 'avatar'], where: { email: req.body.email } })
        .then(user => {
            if (user === null) {
                User.create({
                    email: req.body.email,
                    name: req.body.name,
                    avatar: avatars[Math.round(Math.random() * avatars.length)]
                }).then(newUser => {
                    Feedback.create({
                        comment: req.body.comment,
                        rating: req.body.rating,
                        ratedBy: newUser.id
                    }).then(() => res.send({ success: true, new_user: true, avatar: newUser.avatar }))
                })

            } else {
                Feedback.create({
                    comment: req.body.comment,
                    rating: req.body.rating,
                    ratedBy: user.id
                }).then(() => res.send({ success: true, new_user: false, avatar: user.avatar }))
            }
        })

})


app.get('/get_feedbacks', (req, res) => {
    Feedback.findAll({
        attributes: ['comment', 'rating', 'createdAt', 'ratedBy'],
        include: [{
            model: User,
            as: 'user',
            attributes: ['name', 'avatar'],
        }]
    })
        .then(feedbacks => res.send(feedbacks))
})





app.listen(port, () => { console.log(`RUNNING SERVER ON PORT ${port}`) })