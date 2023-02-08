const professionals = require("../models/professionals.js");

const getprofesinalsid = async (req, res) => {
  const { id } = req.params;
  try {
    const getid = await professionals.findByPk(id);
    res.send(getid);
  } catch (error) {
    res.send(error);
  }
};

const nombreincompleto = async (req, res) => {
  const { name } = req.query;
  const substring = name.toLowerCase();
  try {
    
    const getname = await professionals.findAll();
    const result = getname.filter(
      (person) => person.name.toLowerCase().indexOf(substring) == 0
    );
    res.send(result)
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = { getprofesinalsid, nombreincompleto };
