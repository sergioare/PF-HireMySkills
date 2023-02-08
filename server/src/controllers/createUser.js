const users  = require('../models/users.js')
const jwt = require('jsonwebtoken');


const createUser = async (req, res,) => {
    try {
        const { name, photo, town, email, contact } = req.body;
        // console.log(req.body, 'BODY');
        const userFind = await users.findAll({ where: { email: email } });
        const userName = await users.findAll({ where: { name: name } });
        
        if(!name || !contact || !email) return res.send({ message: 'data required'});
        if(userFind.length || userName.length) return res.send({ message: 'Users repit'});
            await users.create({ name, photo, email, town, contact });
            const user = {
                email: email,
                name: name
            };
            const token = jwt.sign({ user: user }, process.env.SECRET_KEY, { expiresIn: '5d' });
        res.send({token , message: 'User create'});
    } catch (error) {
        res.send(error);
    };
};

module.exports = { createUser };



// {
//     "profession": "Marcos",
//     "photo": "caeciackla",
//     "description": "aeovinaeuvacvla",
//     "email": "marcos@gmail.com",
//     "town": "Gral Paz",
//     "contact": 74,
//     "profession": "Medico",
 //         "profession" : includes{
  //              modelo : profession 
//                    }
 //              
//   }  



// const createUsuario = async (req, res) => {
//     try {
//       // Obtener los datos del usuario
//       const { nombre, email } = req.body;
  
//       // Crear la profesión y la categoría asociadas
//       const profesion = await Profesion.create({
//         profesion: req.body.profesion.profesion,
//         categoria: {
//           typecategory: req.body.profesion.categoria.typecategory
//         }
//       }, {
//         include: [Categoria]
//       });
  
//       // Crear el usuario
//       const usuario = await Usuario.create({
//         nombre,
//         email,
//         profesionId: profesion.id
//       });
  
//       // Enviar la respuesta
//       res.status(201).json({
//         usuario,
//         profesion
//       });
//     } catch (error) {
//       res.status(500).json({
//         message: "Error al crear el usuario",
//         error
//       });
//     }
  //};