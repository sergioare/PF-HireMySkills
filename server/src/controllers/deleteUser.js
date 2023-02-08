const users = require('../models/users');

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const userDelete = await users.findByPk(id);
        // console.log(userDelete, 'DELETE');
        if(userDelete.deleted === false) {
            await users.update({ deleted: true }, { where: { id: id } });
            res.send({ message: 'User is already deleted' });
        }
        if(userDelete.deleted === true) {
            await users.update({ deleted: false }, { where: { id: id } });
            res.send({ message: 'User is active' });
        };
        
    } catch (error) {
        res.send({ message: error });
    };
};

module.exports = { deleteUser };