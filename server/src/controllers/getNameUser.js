const users = require('../models/users');

const getNameUser = async (req, res, next) => {
    const { name } = req.query;
    // console.log(name, 'NAME');
    try {
        if(name) {
            const newUser = await users.findAll();
            if (newUser) {
                const filter = newUser.filter(us => us.name.toLowerCase() === name.toLowerCase());
                // console.log(filter, 'Filter');
                res.send(filter);
            } else {
                res.send({ message: 'User not found' });
            };
            // const newUser = await users.findAll({ where: { name: name } });
        } else {
            const newUser = await users.findAll();
            res.send(newUser);
        };
    } catch (error) { 
        res.send(error);
    };
};

module.exports = { getNameUser };