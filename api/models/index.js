const { User, Feedback } = require('./models')

//Migrate the User Model
User.sync({ alter: true })

//Migrate the Feedback Model
Feedback.sync({ alter: true })


