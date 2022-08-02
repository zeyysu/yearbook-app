
const fs = require('fs');
const path = require("path");
const studentdatapath = path.join(__dirname,'../../data/students.json');
const memdatapath = path.join(__dirname,'../../data/mem.json');
const mem_index = (req,res) => {
    fs.readFile(memdatapath, 'utf8', (err,data) =>{
        if(err)  {console.log(err); return res.status(400).send({success:false});}
        res.send(JSON.parse(data));
    });
}

const mem_details = (req,res) => {
    const memid = req.params.id;
    fs.readFile(memdatapath, 'utf8', (err,data) => {
        if(err)  {console.log(err); return res.status(400).send({success:false});}
        data=JSON.parse(data);
        const mem =  data.find(el => el.id ===memid);
        if(!mem){
            return res.status(404).send('Entry could not be found')
        }
        res.send(mem);  
    })
}


const mem_create_post = (req,res) => {
    const mem = req.body;
    if(!mem){
        return res.status(400).json({success: false, msg:'invalid'})
    }

    fs.readFile(memdatapath, 'utf8', (err,data) =>{
        if(err){console.log(err); return res.status(400).send({success:false});}
        const newId =Date.now().toString();
        mem.id=newId;
        data=JSON.parse(data);
        data.push(mem);
        fs.writeFile( memdatapath , JSON.stringify(data,null,2), () => {
            res.status(200).send({success:true} );
        })
        
    })
    /*res.status(201).json({ success: true, data: clas}) */

}

const mem_delete = (req,res) => {
    const memid = req.params.id;
    fs.readFile(memdatapath, 'utf8', (err,data) =>{
        if(err){console.log(err); return res.status(400).send({success:false});}
        data=JSON.parse(data);
        let index =0;
        data.forEach(element => {
            console.log(element.id);
            console.log(memid);
            if(element.id===memid) 
            index++;
        });
        //const mem =  data.find(el => el.id ===memid);
       /* const index = data.findIndex(memid);
        data.splice(index,1);
        fs.writeFile(JSON.stringify(data,null,2), () => {
            res.status(200).send({success:true} );
        })*/
        res.send({});
    })
}

module.exports = {
    mem_index,
    mem_details,
    mem_create_post,
    mem_delete    
}