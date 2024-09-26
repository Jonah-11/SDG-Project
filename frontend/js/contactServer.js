const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001; // Using a different port for the contact server

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST route to handle email submission
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // or another email service
        auth: {
            user: 'jonahjjed@gmail.com', // your email
            pass: 'your-email-password' // your email password
        }
    });

    // Email options
    const mailOptions = {
        from: email,
        to: 'your-email@gmail.com', // your email
        subject: `New message from ${name}`,
        text: message
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Message sent: ' + info.response);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Contact server is running on port ${PORT}`);
});
