const users = require('../models/users');


const getIdUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        // console.log(id, 'IDIDIDI');
        const getUsers = await users.findAll({ where: { id: id } });
        // console.log(getUsers, 'USER')
        var obj= {
            id: getUsers[0].id,
            name: getUsers[0].name,
            photo: getUsers[0].email,
            email: getUsers[0].email,
            town: getUsers[0].town,
            contact: getUsers[0].contact
        }
        res.send(obj);       
    } catch (error) {
        res.send(error);
    }
}

module.exports = { getIdUser };