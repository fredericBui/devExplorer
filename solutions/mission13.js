const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "<your_mailtrap_username>",
    pass: "<your_mailtrap_password>",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // send mail with defined transport object
    await transporter.sendMail({
      from: '"DevExplorer 📮" <contact@devexplorer.com>', // sender address
      to: "contact@client.com", // list of receivers
      subject: "Message from node mailer", // Subject line
      text: "Hello world !", // plain text body
      html: "<b>Hello world !</b>", // html body
    });
  
    console.log("Message successfully sent");
  }
  
  main().catch(console.error);