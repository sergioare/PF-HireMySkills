const users = require('../models/users');

const getNameUser = async (req, res, next) => {
    const { name } = req.query;
    console.log(name, 'NAME');
    try {
        const newUser = await users.findAll();
        // const newUser = await users.findAll({ where: { name: name } });
        const filter = newUser.filter(us => us.name.toLowerCase() === name.toLowerCase())
        console.log(filter, 'Filter');
        res.send(filter);
    } catch (error) { 
        res.send(error);
    }
}

module.exports = { getNameUser };