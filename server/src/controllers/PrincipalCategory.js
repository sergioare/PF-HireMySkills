const GeneralCategories = require("../models/generalcategories.js");

const postGeneralCategory = async (req, res) => {
  let { id, typecategory } = req.body;

  await GeneralCategories.create({
    id,
    typecategory,
  })
    .then(() =>
      res.json({
        id,
        typecategory,
      })
    )
    .catch((err) => res.status(400).json({ message: err.message }));
  // } catch (error) {
  //   res.status(400).json({ message: error.message });
  // }
};

module.exports = postGeneralCategory;
