const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: false}));

app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, 'public')));
app.set('port', 4000);

app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
})