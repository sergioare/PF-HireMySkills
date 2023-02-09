const professionals = require("../models/professionals.js");

const getFilters = async (req, res) => {
    const { filters } = req.query; 
    // console.log(abc, 'ABC');
    try {
        const allProfessionals = await professionals.findAll();
        // console.log(allProfessionals[0].name[0], 'PROFESS');
        if(filters === 'az') {
            const filter1 = allProfessionals.sort((a, b) => {
                if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                else return -1;
            });
            // console.log(filter1, 'FILTER!');
            return res.send(filter1);
        };
        if(filters === 'za') {
            const filter = allProfessionals.sort((a, b) => {
                if(a.name.toLowerCase() > b.name.toLowerCase()) return -1; 
                else return 1;
            });
            return res.send(filter);
        };
        if(filters === 'max') {
            const filterRat1 = allProfessionals.sort((a, b) => {
                if(a.rating === b.rating) return 1;
                else return -1;
            });
            // console.log(filter1, 'FILTER!');
            return res.send(filterRat1);
        };
        if(filters === 'min') {
            const filterRat = allProfessionals.sort((a, b) => {
                if(a.rating === b.rating) return -1;
                else return 1;
            });
            // console.log(filterRat, 'FILTER!');
            return res.send(filterRat);
        };
        // res.send(allProfessionals);
    } catch (error) {
        res.send({ message: error });
    };
};

module.exports = { getFilters };