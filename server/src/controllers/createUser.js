const users  = require('../models/users.js')


const createUser = async (req, res, next) => {
    try {
        const { name, photo, town, email, contact } = req.body;
        // console.log(req.body, 'BODY');
        const userFind = await users.findAll({ where: { email: email } });
        const userName = await users.findAll({ where: { name: name } });
        console.log(userName, 'REPETIDO');
        console.log(userFind, 'REPETIDO');

        if(!name || !contact || !email) return res.send({ message: 'data required'});
        if(userFind.length || userName.length) return res.send({ message: 'Users repit'});
            await users.create({ name, photo, email, town, contact });
            console.log(users, 'USER');
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