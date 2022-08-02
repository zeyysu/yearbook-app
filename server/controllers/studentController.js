
const fs = require('fs');
const path = require("path");
const studentdatapath = path.join(__dirname,'../../data/students.json');
const memdatapath = path.join(__dirname,'../../data/mem.json');
const student_index = (req,res) => {
    fs.readFile(studentdatapath, 'utf8', (err,data) =>{
        if(err)  {console.log(err); return res.status(400).send({success:false});}
        res.send(JSON.parse(data));
    });
}

const student_details = (req,res) => {
    const studentid = req.params.id;
    fs.readFile(studentdatapath, 'utf8', (err,data) => {
        if(err)  {console.log(err); return res.status(400).send({success:false});}
        data=JSON.parse(data);
        const student =  data.find(el => el.id === studentid);
        if(!student){
            return res.status(404).send('Student could not be found')
        }
        fs.readFile(memdatapath, 'utf8', (err,data) =>{
            if(err)  {console.log(err); return res.status(400).send({success:false});}
            const mems = JSON.parse(data).filter(el => el.stid==studentid);
            res.send({entries: mems, ...student});
        });
        
    })
}


const student_create_post = (req,res) => {
    const student = req.body;
    if(!student){
        return res.status(400).json({success: false, msg:'invalid'})
    }

    fs.readFile(studentdatapath, 'utf8', (err,data) =>{
        if(err) {console.log(err); return res.status(400).send({success:false});}
        const newId =Date.now().toString();
        student.id=newId;
        data=JSON.parse(data);
        data.push(student);

        fs.writeFile(studentdatapath, JSON.stringify(data,null,2), () => {
            res.status(200).send({success:true} );
        })
    })

}

const student_delete = (req,res) => {
    const studentid = req.params.id;
    fs.readFile(studentdatapath, 'utf8', (err,data) =>{
        if(err){console.log(err); return res.status(400).send({success:false});}
        data=JSON.parse(data);
        const index = data.findIndex((item) => {
            return item.id === studentid
          }); 
        data.splice(index,1);
        fs.writeFile(studentdatapath, JSON.stringify(data,null,2), () => {
            res.status(200).send({success:true} );
        });
        
    })
}

module.exports = {
    student_index,
    student_details,
    student_create_post,
    student_delete,
    
}