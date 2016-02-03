'use strict'
var express = require('express')
var config = require('./config')
var nodemailer = require('nodemailer')
var bodyParser = require('body-parser')
var app = express()

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended: true } ))

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.mailer.auth.user,
    pass: config.mailer.auth.pass
  }
});

app.post('/', function(req, res) {

  var name = req.body.name
  var email = req.body.email
  var message = req.body.message

  var mailOptions = {
    from: 'website@hackforequality.mx', // sender address
    to: 'mexicocity@womenwhocode.com, ana@epicqueen.com', // list of receivers
    subject: 'Hack for Equality - Solicitud de Información', // Subject line
    text: 'Nombre: ' + name + ' ,Email: ' + email + ' ,Mensaje: ' +  message,
    html: '<a href="'+ email + '">' + name + '</a> ha enviado un mensaje usando la forma desde el sitio de Hack for Equality:<br/><br/>' + message
  };

  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });

  //Logging for heroku c:
  console.log('Name: ' + name + 'Email: ' + email + 'Message: ' + message)

}); //post to /

app.use('/bower_components', express.static(__dirname + '/public/bower_components'))
app.use('/assets', express.static(__dirname + '/public/assets'))

var port = process.env.PORT || 3000
var server = app.listen(port, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Life signals at http://%s:%s', host, port)
})