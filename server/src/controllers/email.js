const nodemailer = require("nodemailer");
const { GMAIL_ADMIN, PASSWORD_ADMIN } = process.env;

async function pago(name, email) {
  //creacion y configuracion del envio de mail
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: GMAIL_ADMIN, // generated ethereal user
      pass: PASSWORD_ADMIN, // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  //mensaje que se envia al mail
  let informacion = await transporter.sendMail({
    from: `"HIREMYSKILLS 👾⚒️" <${GMAIL_ADMIN}>`, // sender address
    to: email, // list of receivers
    subject: "SUCCESSFUL PAYMENT ", // Subject line
    html: `Hello ${name} 🛒. Thank you very much for hiring a professional. We will be in contact with you shortly👌. <a href=''>Enter here to return to the site</a>`, // html body
  });
  return informacion;
}

async function newUser(name, email) {
  //creacion y configuracion del envio de mail

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: GMAIL_ADMIN, // generated ethereal user
      pass: PASSWORD_ADMIN, // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  //mensaje que se envia al mail
  let informacion = await transporter.sendMail({
    from: `"HIREMYSKILLS 👾⚒️" <${GMAIL_ADMIN}>`, // sender address
    to: email, // list of receivers
    subject: " BIENVENID@ A HIREMYSKILLS ", // Subject line
    html: `Hello ${name} . Thank you very much for joining HIREMYSKILLS 👏. <br></br>We invite you to browse our page and find the ideal service.  
         .<br></br> Remember that professionals are one click away from you ✍️📉 <br></br>
         <a href=''> Enter here to return to the site</a> - <br></br>
        `, // html body
  });
  return informacion;
}

module.exports = {
  pago,
  newUser,
};
