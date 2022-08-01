
const fs = require('fs');
const path = require("path");

const classdatapath = path.join(__dirname, '../../data/classes.json');
const studentdatapath = path.join(__dirname,'../../data/students.json');

const class_index = (req,res) => {
    fs.readFile(classdatapath, 'utf8', (err,data) =>{
        if(err) {console.log(err); return res.status(400).send({success:false});}
        res.send(JSON.parse(data));
    });
    //return res.json(classes)
}

const class_details = (req,res) => {
    const classid = req.params.id;
    //const clas = classes.find( (clas) => {clas.id === Number(classid)} )
    fs.readFile(classdatapath, 'utf8', (err,data) => {
        if(err) {console.log(err); return res.status(400).send({success:false});}
        //data = JSON.parse(data);
        data=JSON.parse(data);
        const clas = data.find(el => el.id === classid);
        if(!clas){
            return res.status(404).send('Class could not be found')
        }
        fs.readFile(studentdatapath, 'utf8', (err,data) =>{
            if(err)  {console.log(err); return res.status(400).send({success:false});}
            const students = JSON.parse(data).filter(el => el.classid==classid);
            res.send({students: students, ...clas});
        });
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
   /* fs.readFile(classdatapath, 'utf8', (err,classdata) => {
        if(err) throw err;
        clas = classdata[id];
        fs.readFile(studentdatapath, 'utf8', (err, studentdata) => {
            if(err) throw err;
            clas.studentids.array.forEach(st => {
                student = studentdata[st];
                fs.readFile()
                
                
            });
        })
    })*/
}

module.exports = {
    class_index,
    class_details,
    class_create_post,
    class_delete
}