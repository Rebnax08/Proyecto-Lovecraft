const express = require ('express');
const router = express.Router();
const cors = require ('cors');
const app = express ();
const deidades = require('./src/comonent/Dioses Lovecraftianos/router.js') 

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());


app.use('/api/v1', router);
app.use ('/api/v1/deidades', deidades)


//Routers

// router.get('/', (req, res) => {
//     res.send('<h1> Hello World <h1>');
// });

app.listen(3500, () => {
    console.log('Server Iniciado http://localhost:3500!');
});