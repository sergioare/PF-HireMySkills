const { Client } = require('../db/db')


const createClient = async (req, res, next) => {
    const { name, img, adress, mail, contac } = req.body;
    console.log(req.body, 'BODY');
    try {
        const client = await Client.findAll({ where: { mail: mail } });
        if(client.length > 0) res.send({ message: 'Cliente repit'});
        else {
            const newClient = await Client.create({ name, img, mail, adress, contac });
        };
    } catch (error) {
        res.send(error);
    };
};

module.exports = { createClient  };