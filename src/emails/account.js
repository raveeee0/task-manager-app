const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRIP_API_KEY);

const sendWelcomeEmail = async (email, name) => {
    try {
        await sgMail.send({
            to: email,
            from: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx@gmail.com',
            subject: 'Welcome to the app',
            text: `Welcome to our app, ${name}. Let us know how you get along with our app`
        })
    } catch (error) {
        console.log(error);
    }
    console.log('New welcome email has been sent to ' + email);
}

const sendGoodbyeEmail = async (email, name) => {
    try {
        await sgMail.send({
            to: email,
            from: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx@gmail.com',
            subject: 'Sorry to see you go',
            text: `We're sorry you want to delete you account ${name}. Let us know went wrong with our app`
        })
    } catch (error) {
        console.log(error);
    }
    console.log('New cancelation email has been sent to ' + email);
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}
