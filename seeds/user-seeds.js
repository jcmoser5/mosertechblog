const { User } = require('../models');

const userData = [{
        username: 'Jon',
        password: 'jon'

    },
    {
        username: 'Guy',
        password: 'guy'
    },
    {
        username: 'Pal',
        password: 'pal'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers; 