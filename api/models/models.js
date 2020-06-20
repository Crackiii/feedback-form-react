const Sequelize = require('sequelize');

const sequelize = new Sequelize('checkout', 'root', '', {
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


const Model = Sequelize.Model;

class User extends Model{}
User.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    name: {
        type: Sequelize.STRING,
        defaultValue: "",
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
},{ sequelize, modelName: 'user' })

// User.sync({ alter: true })



class Feedback extends Model{}
Feedback.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comment: {
        type: Sequelize.STRING
    },
    rating: {
        type: Sequelize.INTEGER
    },
    ratedBy: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
}, {sequelize, modelName: 'feedback'})

// Feedback.sync({alter: true})




module.exports = {User, Feedback}