const nodemailer = require("nodemailer");

const createUser = () => {
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c864dbd70b9f16",
      pass: "28877eda0c6427",
    },
  });
  return transport;
};

const sendMail = async () => {
  const transporter = createUser();
  const info = await transporter.sendMail({
    from: '"Fred Foo " <foo@example.com>',
    to: ["info@info.com", "test@test.com"],
    subject: "Bienvenido al correo multiple",
    html: "Hola mundo!!",
  });

  console.log("Message sent: %s", info.messageId);

  return;
};

exports.sendMail = () => sendMail();
