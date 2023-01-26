const router = require("express").Router();
const { createUser } = require("../controllers/sendMail");

//Envia mail cuando se crea usuario
router.post("/usuario", async (req, res) => {
  const { name, email } = req.body;
  try {
    const data = await createUser(name, email);
    res.status(200).json(data);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

module.exports = router;
