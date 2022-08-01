const express = require('express');
const bodyParser = require('body-parser');
const app=express();
const classRoutes = require('./routes/classRoutes');
const {classes, students, mems} = require('../data/data.js');

// static assets
//app.use(express.static('./methods-public'))
// parse form data
app.use(bodyParser.json());
//app.use(express.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: true }));
// parse json
app.use(express.json())


app.get('/', (req, res) => {
    res.json()
  })


//GET METHODS

app.use('/classes', classRoutes);

app.get('/api/students', (req,res) => {
    return res.json(students)
})

app.get('api/students/:studentID', (req,res) => {
    const studentid = req.params
    const student = students.find( (st) => {st.id === Number(studentid)} )

    if(!student){
        return res.status(404).send('Student could not be found')
    }

    return res.json(student)
})

app.get('/api/mems', (req,res) => {
    return res.json(mems)
})

app.get('api/mems/:memID', (req,res) => {
    const memid = req.params
    const mem = mems.find( (m) => {m.id === Number(memid)} )

    if(!mem){
        return res.status(404).send('Entry could not be found')
    }

    return res.json(mem)
})


app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})