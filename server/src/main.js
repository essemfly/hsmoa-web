import express from 'express';
import bodyParser from 'body-parser';
import api from './routes';


const path = require('path'); 
const app = express();
 
let port = 8080;
 
 
// SETUP MIDDLEWARE
app.use(bodyParser.json());
 
// SERVE STATIC FILES - REACT PROJECT
app.use('/', express.static(__dirname + '/../../build'));
 

// LOAD API FROM ROUTES
app.use('/api', api);

app.get('*', (req, res, next) => {
    if(req.path.split('/')[1] === 'static') return next();
    res.sendFile(path.resolve(__dirname + '/../../build/index.html'));
});


app.listen(port, () => {
    console.log('Express is listening on port', port);
});

