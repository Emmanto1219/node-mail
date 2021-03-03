const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = Router();

router.post('/send-email', async (req, res) => {
    const { name, email, phone, message } = req.body;

    contentHTML = `
        <h1>Información del Usuario</h1>
        <ul>
            <li>Nombre: ${name}</li>
            <li>Email: ${email}</li>
            <li>Teléfono: ${phone}</li>
        </ul>
        <p>${message}</p>
    `;


    const transporter = nodemailer.createTransport({
        host: 'smtp.mail.com',
        port: 25,
        auth: {
          user: 'user@mail.com',
          pass: 'password'
        }
    });

    const info = await transporter.sendMail({
        from: "'Example Mail Server' <user@mail.com>",
        to: 'receiver@mail.com',
        subject: 'Ejemplo de mail',
        html: contentHTML
    });

    console.log('Mensaje Enviado', info.messageId);
    res.redirect('/success.html')
});

module.exports = router;