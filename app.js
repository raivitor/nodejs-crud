var app = require('./config/express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('io', io);

http.listen(3000, function () {
    console.log("servidor rodando");
})

app.get("/", function (req, res) {
    res.send("Resposta da Home");
    // Você pode trocar a linha acima por:
    // res.render('"index")
    // lembre que pra funcionar a linha acima você tem que 
    // criar o index.ejs dentro da pasta views
});