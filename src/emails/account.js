const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'raveedahmed@hotmail.com',
        subject: 'Welcome to Task Manager',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'raveedahmed@hotmail.com',
        subject: 'Task Manager membership cancelation',
        text: `We are sorry, ${name}. Let me know how can we make it better.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}