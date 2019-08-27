require('dotenv').config()

var sesAccessKey = process.env.SES_ACCESS_KEY
var sesSecretKey = process.env.SES_SECRET_KEY

exports.handler = function(event, context, callback) {
  var nodemailer = require('nodemailer')
  var smtpTransport = require('nodemailer-smtp-transport')

  var transporter = nodemailer.createTransport(
    smtpTransport({
      service: 'Gmail',
      auth: {
        user: sesAccessKey,
        pass: sesSecretKey,
      },
    })
  )

  const requestBody = JSON.parse(event.body)
  console.log(requestBody)

  const text = `From: ${requestBody.from}
  Subject: ${requestBody.subject}\n
  ${requestBody.text}
  `

  var mailOptions = {
    from: requestBody.from,
    bcc: 'kristi@crunchyhomecreations.com',
    to: 'support@crunchyhomecreations.com',
    subject: `[SUPPORT REQUEST] ${requestBody.subject}`,
    text: text,
  }

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      const response = {
        statusCode: 500,
        body: JSON.stringify({
          error: error.message,
        }),
      }
      callback(null, response)
    }
    console.log(info)
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: `Email processed succesfully!`,
      }),
    }
    callback(null, response)
  })
}
