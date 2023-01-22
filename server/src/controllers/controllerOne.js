const { Professional, Profession } = require("../db/db.js");

const getDBInfo = async () => {
  try {
    const getdb = await Professional.findAll();
    res.send(getdb);
  } catch (error) {
    res.send(error);
  }
};

const CreateDbprofesiona = (data) => {};

module.exports = {
  getDBInfo,
};
