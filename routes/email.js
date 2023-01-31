let { sendMail } = require('../controller/email');
const express = require('express');
const router = new express.Router();

router.post('/send-mail', function (req, res) {
    let { name, email, phone, message } = req.body;
    try {
        if (!(name && email && phone && message)) {
            res.status(400).send({ message: "name, email,phone and message are required" });
            return;
        }
        sendMail(name, email, phone, message);
        res.status(200).send({ message: "Email Sent!" });
    } catch (error) {
        res.status(500).send("Internal Error Occurred");
    }
})

module.exports = router;