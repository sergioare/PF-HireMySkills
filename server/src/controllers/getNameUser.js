const users = require('../models/users');

const getNameUser = async (req, res, next) => {
    const { name } = req.query;
    // console.log(name, 'NAME');
    try {
        if(name) {
            const newUser = await users.findAll();
            if (newUser) {
                const filter = newUser.filter(us => us.name.toLowerCase() === name.toLowerCase());
                res.send(filter);
            } else {
                res.send({ message: 'User not found' });
            };
            // const newUser = await users.findAll({ where: { name: name } });
        } else {
            const newUser = await users.findAll();
            const filter = newUser.filter(us => us.deleted === false)
            console.log(filter.deleted, 'Filter');
            res.send(filter);
        };
    } catch (error) { 
        res.send(error);
    };
};

module.exports = { getNameUser };