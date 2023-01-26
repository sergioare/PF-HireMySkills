const users = require('../models/users');


const getIdUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        // console.log(id, 'IDIDIDI');
        const getUsers = await users.findOne({ 
            where: { id },
            // attributes: ['photo', 'email']  // Trae la propiedades solicitadas => photo: "maefnaejeaae", email: "martin@gmail.com"
        });
        // console.log(getUsers, 'USER');
        res.send(getUsers);       
    } catch (error) {
        res.send(error);
    }
}

module.exports = { getIdUser };