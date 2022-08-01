const {classes, students, mems} = require('../data/data.js')

const class_index = (req,res) => {
    return res.json(classes)
}

const class_details = (req,res) => {
    const classid = req.params
    const clas = classes.find( (clas) => {clas.id === Number(classid)} )

    if(!clas){
        return res.status(404).send('Class could not be found')
    }

    return res.json(clas)
}

const class_create_post = (req,res) => {
    const clas = req.body;
    if(!clas){
        return res.status(400).json({success: false, msg:'invalid'})
    }
    res.status(201).json({ success: true, data: clas}) 
}

const class_delete = (req,res) => {
    const id = req.params.id;
    const clas = classes.find((cl)=> cl.id===Number(id));
    if(!clas){
        return res.status(404)
        .json( {success: false, msg: 'class does not exist'})
    }

    const newClasses = classes.filter((cl)=> cl.id !==Number(id));
    return res.status(200).json({success:true, data: newClasses})
}

module.exports = {
    class_index,
    class_details,
    class_create_post,
    class_delete
}