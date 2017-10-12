const nodemailer = require('nodemailer');
let smptConfig = {
    pool: true,
    host: 'smtp.rambler.ru',
    port: 465,
    secure: true,
    auth: {
        user: 'postmanpechkin@lenta.ru',
        pass: '14882280q',
    }
};
let transporter = nodemailer.createTransport(smptConfig);

transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take our messages');
    }
});
const message = {
    from: 'postmanpechkin@lenta.ru',
    to: 'pablodecortes@gmail.com',
    subject: 'Твой батя',
    text: 'Plaintext version of the message',
    html: '<p>Сына, я научился слать емейлы. Щас заспамлю. P.S. Ты уволен</p>'
};
transporter.sendMail(message)
    .then(transporter.close);