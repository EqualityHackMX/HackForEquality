module.exports = {
  mailer: {
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD
    },
    defaultFromAddress: 'Hack for Equality <hello@hackforequality.mx>'
    }
}