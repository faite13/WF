const {Router} = require('express');
const router = Router();
const nodemailer = require('nodemailer');
const sendgrid = require('nodemailer-sendgrid-transport');
const keys = require('../keys');

const transporter = nodemailer.createTransport(sendgrid({
    auth: {
        api_key: keys.email
    }
}));

router.post('/', (req, res) => {
    transporter.sendMail({
        to: req.body.email,
        from: 'faiteforever@gmail.com',
        subject: 'Розсилка Whole Foods',
        html: `
            <h1>Вітаємо, ви підписались на новини Whole Foods!</h1>
        `
    });
    res.redirect(req.get('referer'));
});
module.exports = router;



