const users  = require('../models/users.js')


const createUser = async (req, res, next) => {
    try {
        const { name, photo, town, email, contact } = req.body;
        // console.log(req.body, 'BODY');
        const userFind = await users.findAll({ where: { email: email } });
        // console.log(userFind, 'REPETIDO');
        if(userFind.length) return res.send({ message: 'Cliente repit'});
        else {
            await users.create({ name, photo, email, town, contact });
            console.log(users, 'USER');
        };
        res.send({ message: 'User create'});
    } catch (error) {
        res.send(error);
    };
};

module.exports = { createUser };



// {
//     "name": "Marcos",
//     "photo": "caeciackla",
//     "description": "aeovinaeuvacvla",
//     "email": "marcos@gmail.com",
//     "town": "Gral Paz",
//     "contact": 74,
//     "profession": "Medico"
//   }