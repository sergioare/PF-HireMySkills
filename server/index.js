
const server = require('./src/server.js');
// const * as dotenv from 'dotenv';
dotenv.config();


const PORT = process.env.PORT || 5000;

(async function startServer(){
  try{
    server.listen(PORT, ()=> console.log(`Server running on port http://localhost:${PORT}`))
  }catch(error){
    console.log('Unable to initiate', error)
  }
})();

// function laCajaDePandora(numero) {
//   // proximamente escribiremos codigo aqui
// }

// obj = {
//   name,
//   age,
// };

