// const Sequelize = require('../db/db');
const users = require('../models/users');

const getNameUser = async (req, res, next) => {
    const { name } = req.query;
    console.log(name, 'NAME');
    try {
        if(name) {
            const newUser = await users.findAll();
            // console.log(newUser, 'USERS');
            // const conincidencia = newUser.filter(us => us.name.toLowerCase().match(name.toLowerCase()));
            if (newUser) {
                const filter = newUser.filter(us => us.name.toLowerCase() === name.toLowerCase());
                // console.log(filter[0].deleted, 'DELETE');
                // if(filter[0].deleted === false) return res.send(filter);
                if(filter) {
                    const map = filter.map(us => {
                        if(us.deleted === false) return us
                    })
                    res.send(map);
                }
                else return res.send({ message: 'User is deleted' });
            } else {
                res.send({ message: 'There isn´t users' });
            };
            // const newUser = await users.findAll({ where: { name: name } });
        } else {
            const newUser = await users.findAll();
            // const filter = newUser.filter(us => us.deleted === false);
            // console.log(filter.deleted, 'Filter');
            res.send(newUser);
        };
    } catch (error) { 
        res.send(error);
    };
};

module.exports = { getNameUser };