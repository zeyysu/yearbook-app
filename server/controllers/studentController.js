
const fs = require('fs');
const path = require("path");
const studentdatapath = path.join(__dirname,'../../data/students.json');
const memdatapath = path.join(__dirname,'../../data/mem.json');
const student_index = (req,res) => {
    fs.readFile(studentdatapath, 'utf8', (err,data) =>{
        if(err)  {console.log(err); return res.status(400).send({success:false});}
        res.send(JSON.parse(data));
    });
    //return res.json(classes)
}

const student_details = (req,res) => {
    const studentid = req.params.id;
    /*const clas = classes.find( (clas) => {clas.id === Number(classid)} )

    if(!clas){
        return res.status(404).send('Class could not be found')
    }
    return res.json(clas)*/

    //const clas = classes.find( (clas) => {clas.id === Number(classid)} )
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
        if(err) throw err;
        const newUserId = Date.now.toString;
        data[newUserId] = student;

        fs.writeFile(JSON.stringify(data,null,2), () => {
            res.status(200).send(data[newUserId] );
        })
    })
    /*if(!clas){
        return res.status(400).json({success: false, msg:'invalid'})
    }
    res.status(201).json({ success: true, data: clas}) */

}

const student_delete = (req,res) => {
    /*const id = req.params.id;
    const clas = classes.find((cl)=> cl.id===Number(id));
    if(!clas){
        return res.status(404)
        .json( {success: false, msg: 'class does not exist'})
    }

    const newClasses = classes.filter((cl)=> cl.id !==Number(id));
    return res.status(200).json({success:true, data: newClasses})*/
}

module.exports = {
    student_index,
    student_details,
    student_create_post,
    student_delete,
    
}