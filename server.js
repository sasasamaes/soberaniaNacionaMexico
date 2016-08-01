var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Agenda de la Soberanía Nacional Estado de México' });
});

app.get('/foro-regionales', function (req, res) {
  res.render('index', { title: 'Foro Regional' });
});

app.get('/agenda', function (req, res) {
  res.render('index', { title: '10 puntos de la Agenda' });
});


app.listen(3000, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);

  console.log('Asamblea escuchando en el puerto 3000');
})