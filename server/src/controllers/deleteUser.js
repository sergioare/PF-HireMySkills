const users = require('../models/users');

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const userDelete = await users.findByPk(id);
        console.log(userDelete, 'DELETE');
        if(userDelete.deleted === true) return res.send({ message: 'User no found' });
        else {
            await users.update({ deleted: true }, { where: { id: id } });
            res.send({ message: 'User is already deleted' });
        }
    } catch (error) {
        res.send({ message: error });
    };
};

module.exports = { deleteUser };