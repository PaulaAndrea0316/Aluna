const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "250118b597fdc9",
          pass: "44d2916aca33e5"
        }
      });

      const mensaje={
        from: "Aluna Shop Store <noreply@alunashop.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)

    }

    module.exports= sendEmail;