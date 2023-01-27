const Profession = require('../models/profession.js');

const professionsGetName = async (req, res) => {
    // const { name } = req.query;
  const { id } = req.params;
  try { 
    const profes = await Profession.findAll({
      where: { categoryId: id }
    })
    res.send(profes)
  } catch (error) {
    res.send(error);
  }
};

module.exports = { professionsGetName };


// const profeTotal = await professionals.findAll({
//   include: [
//     {
//       model: Profession,
//       attributes: ['profession'],
//     }
//   ]
// });
