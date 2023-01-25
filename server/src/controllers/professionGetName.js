const categories = require('../models/categories.js');
const Profession = require('../models/Profession.js');
const professionals = require('../models/professionals');

const professionalsGetName = async (req, res) => {
    // const { name } = req.query;
    try {
      const profeTotal = await professionals.findAll({
        include: [
          {
            model: Profession,
            attributes: ['profession'],
          }
        ]
    });
    console.log(profeTotal, 'PROFESSSS');
    res.send('HOLAAA')
        



  // if(name) {
  //     const professionalsName = await professionals.findAll({ where: { skills: 1 } });
  //     console.log(professionalsName, 'Profesional');
  //     // const filter = professionalsName.filter(pf => pf.name.toLowerCase() === name.toLowerCase());
  //     console.log(professionalsName, 'Profesional');
  //     res.send(professionalsName);
  //     if(!filter.length) return res.send({ message: 'Poffession not found'});
  // } else {
  //     const professionName = await professionals.findAll();
  //     res.send({ profe: professionName });
  // };
  } catch (error) {
    res.send(error);
  }
};

module.exports = { professionalsGetName };