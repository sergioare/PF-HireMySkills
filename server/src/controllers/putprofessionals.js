const professionals = require("../models/professionals.js");

const putprofessionals = async (req, res) => {
  const { id, skills } = req.body;
  try {
    await professionals.update(
      { skills: skills },
      {
        where: {
          id: id,
        },
      }
    );
    res.send("updated successfully");
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = putprofessionals;
