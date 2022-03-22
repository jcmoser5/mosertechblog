const { User } = require('../models');
const bcrypt = require('bcrypt');
const password = 'password'
const hash = bcrypt.hashSync(password, 10);

const userData = [
    {
        username: 'Jon',
        password: 'hash'

    },
    {
        username: 'Guy',
        password: 'hash'
    },
    {
        username: 'Pal',
        password: 'hash'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers; 