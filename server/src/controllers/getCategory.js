const categories = require("../models/categories")

const getCategory = async (req, res) => {
    try {
        const categoryes = await categories.findAll();
        res.send(categoryes);
    } catch (error) {
        res.send({ message: error });
    };
};

module.exports = { getCategory };