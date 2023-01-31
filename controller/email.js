
var nodemailer = require('nodemailer');

function sendMail(name, email, phone ,message){
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
          user: process.env.user,
          pass: process.env.pass
        }
      });

      var emailBody = `
      Name : ${name}
      Email : ${email}
      Phone : ${phone}
      Message : ${message}
      `
      var mailOptions = {
        from: process.env.user,
        to: process.env.user,
        cc: process.env.businessPerson,
        subject: `[DepChip] Business Email from  ${name}`,
        text: emailBody
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

module.exports = {
    sendMail
}