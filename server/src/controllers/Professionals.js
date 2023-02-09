const professionals = require("../models/professionals.js");
const products = require("../models/products.js");

const getprofesinalsid = async (req, res) => {
  const { id } = req.params;
  try {
    const getid = await professionals.findByPk(id, {
      include: products,
    });
    res.send(getid);
  } catch (error) {
    res.send(error);
  }
};

// const bynameprofessionals = async (req, res) => {
//   const { name } = req.query;
//   try {
//     const getname = await professionals.findAll({
//       where: {
//         name: name,
//       },
//     });
//     res.send(getname);
//   } catch (error) {
//     res.send(error);
//   }
// };
module.exports = { getprofesinalsid };
