const pay = require("../models/pay.js");

const postPay = async (req, res) => {
  let { pay_total, pay_ref } = req.body;

  await pay
    .create({
      pay_total,
      pay_ref,
    })

    .catch((err) => res.status(400).json({ message: err.message }));
};

module.exports = postPay;
