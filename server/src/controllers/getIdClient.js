// import { Client } from '../db';

const getUdClient = async (req, res, next) => {
    try {
        // const { name } = req.params;
        const getClient = await Client.findAll({ where: { id: id } });
        res.json(getClient)        
    } catch (error) {
        res.send(error);
    }
}

module.exports = { getUdClient };