
const fs = require('fs');
const path = require("path");

const classdatapath = path.join(__dirname, '../../data/classes.json');
const studentdatapath = path.join(__dirname,'../../data/students.json');

const class_index = (req,res) => {
    fs.readFile(classdatapath, 'utf8', (err,data) =>{
        if(err) {console.log(err); return res.status(400).send({success:false});}
        res.send(JSON.parse(data));
    });
    
}

const class_details = (req,res) => {
    const classid = req.params.id;

    fs.readFile(classdatapath, 'utf8', (err,data) => {
        if(err) {console.log(err); return res.status(400).send({success:false});}
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
}

const class_create_post = (req,res) => {
    const clas = req.body;
    if(!clas){
        return res.status(400).json({success: false, msg:'invalid'})
    }

    fs.readFile(classdatapath, 'utf8', (err,data) =>{
        if(err)  {console.log(err); return res.status(400).send({success:false});}
        const newId =Date.now().toString();
        clas.id=newId;
        data=JSON.parse(data);
        data.push(clas);
        fs.writeFile(classdatapath, JSON.stringify(data,null,2), () => {
            res.status(200).send({success:true}  );
        })
    })
}

const class_delete = (req,res) => {
    const id = req.params.id;
    fs.readFile(classdatapath, 'utf8', (err,data) =>{
        if(err){console.log(err); return res.status(400).send({success:false});}
        data=JSON.parse(data);
        const index = data.findIndex((item) => {
            return item.id === id
          }); 
        data.splice(index,1);
        fs.writeFile(classdatapath, JSON.stringify(data,null,2), () => {
            res.status(200).send({success:true} );
        });
        
    })
}

const class_update = (req,res) => {
    const cl = req.body;
    fs.readFile(classdatapath, 'utf8', (err,data) =>{
        if(err){console.log(err); return res.status(400).send({success:false});}
        data=JSON.parse(data);
        const index = data.findIndex((item) => {
            return item.id === cl.id
          }); 
        data[index] = cl;
        fs.writeFile(classdatapath, JSON.stringify(data,null,2), () => {
            res.status(200).send({success:true} );
        });
        
    })
}

module.exports = {
    class_index,
    class_details,
    class_create_post,
    class_delete,
    class_update
}