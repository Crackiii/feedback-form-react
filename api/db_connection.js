const Sequelize = require('sequelize');
const sequelize = new Sequelize('checkout', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection with database established successfully...');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


module.exports = { sequelize }