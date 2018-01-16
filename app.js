var app = require('./config/express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('io', io);

var porta = process.env.PORT || 3000;
var server = http.listen(porta, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});

app.get("/", function (req, res) {
    res.send("Resposta da Home");
    // Você pode trocar a linha acima por:
    // res.render('"index")
    // lembre que pra funcionar a linha acima você tem que 
    // criar o index.ejs dentro da pasta views
});