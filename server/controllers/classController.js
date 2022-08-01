const {classes, students, mems} = require('../data/data.js')
const fs = require('fs');
const classdatapath = '../data/classes.json';
const studentdatapath = '../data/classes.json';
const memdatapath = '../data/mems.json';


const class_index = (req,res) => {
    fs.readFile(classdatapath, 'utf8', (err,data) =>{
        if(err) throw err;
        res.send(JSON.parse(data));
    });
    //return res.json(classes)
}

const class_details = (req,res) => {
    const classid = req.params.id;

    //const clas = classes.find( (clas) => {clas.id === Number(classid)} )
    fs.readFile(classdatapath, 'utf8', (err,data) => {
        if(err) throw err;
        const clas = data[classid] ;
        if(!clas){
            return res.status(404).send('Class could not be found')
        }
        res.send(JSON.parse(clas));
    })
    //return res.json(clas)
}

const class_create_post = (req,res) => {
    const clas = req.body;
    if(!clas){
        return res.status(400).json({success: false, msg:'invalid'})
    }

    fs.readFile(classdatapath, 'utf8', (err,data) =>{
        if(err) throw err;
        const newUserId = Date.now.toString;
        data[newUserId] = clas;

        fs.writeFile(JSON.stringify(data,null,2), () => {
            res.status(200).send(data[newUserId] );
        })
    })
    //res.status(201).json({ success: true, data: clas}) 
}

const class_delete = (req,res) => {
    const id = req.params.id;
    //const clas = classes.find((cl)=> cl.id===Number(id));
    /*if(!clas){
        return res.status(404)
        .json( {success: false, msg: 'class does not exist'})
    }

    const newClasses = classes.filter((cl)=> cl.id !== Number(id));
    return res.status(200).json({success:true, data: newClasses})*/
    fs.readFile(classdatapath, 'utf8', (err,classdata) => {
        if(err) throw err;
        clas = classdata[id];
        fs.readFile(classdatapath, 'utf8', (err, studentdata) => {
            if(err) throw err;
            clas.studentids.array.forEach(st => {
                student = studentdata[st];
                
                
            });
        })
    })
}

module.exports = {
    class_index,
    class_details,
    class_create_post,
    class_delete
}