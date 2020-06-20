const Sequelize = require('sequelize');
const { sequelize } = require('../db_connection')

const Model = Sequelize.Model;

//Creating User model
class User extends Model { }
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
    avatar: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
}, { sequelize, modelName: 'user' })


//Creating Feedback model
class Feedback extends Model { }
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
}, { sequelize, modelName: 'feedback' })

User.hasMany(Feedback, { foreignKey: 'ratedBy' })
Feedback.belongsTo(User, { foreignKey: 'ratedBy' });


module.exports = { User, Feedback }