// const  { professional, profession, categoriprofe } = requires ("../db/db.js")
 
const getDBInfo = async () => {
    try{
   const getdb = await professional.findAll();
    res.send(getdb)
}catch(error){
    res.send(error)
}
  };

  module.exports = { getDBInfo }