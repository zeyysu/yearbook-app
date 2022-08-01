const express = require('express');
const bodyParser = require('body-parser');
const app=express();
const classRoutes = require('./routes/classRoutes');
const studentRoutes = require('./routes/studentRoutes');
const memRoutes = require('./routes/memRoutes');
// static assets
//app.use(express.static('./methods-public'))
// parse form data
app.use(bodyParser.json());
//app.use(express.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: true }));
// parse json
app.use(express.json())


app.get('/', (req, res) => {
    return res.json({});
})
app.use('/classes', classRoutes);

app.use('/students', studentRoutes);

app.use('/mems', memRoutes);

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})