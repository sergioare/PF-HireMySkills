const users = require('../models/users');

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await users.update({ deleted: true }, { where: { id: id } });
        res.send({ message: 'User delete' });
    } catch (error) {
        res.send({ message: error })
    }
}

module.exports = { deleteUser };