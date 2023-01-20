const users = require('../models/users');


const getIdUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id, 'IDIDIDI');
        const getUsers = await users.findAll({ where: { id: id } });
        console.log(getUsers)
        res.send(getClient);       
    } catch (error) {
        res.send(error);
    }
}

module.exports = { getIdUser };