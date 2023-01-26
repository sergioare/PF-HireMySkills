const nodemailer = require("nodemailer");

const createTrans = () => {
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.oi",
    port: 2525,
    auth: {
      user: "c864dbd70b9f16",
      pass: "28877eda0c6427",
    },
  });
  return transport;
};

const sendMail = async () => {
  const transporter = createTrans();
  const info = await transporter.sendMail({
    from: '"Fred Foo " <foo@example.com>',
    to: ["info@info.com", "test@test.com"],
    subject: "Bienvenido al correo multiple",
    html: <b>Hola mundo!!</b>,
  });

  console.log("Message sent: %s", info.messageId);

  return;
};

exports.sendMail = () => sendMail();
