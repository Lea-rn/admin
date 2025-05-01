const reclamationModel = require("../model/reclamationmodel")

///// get reclamations :: 



exports.getreclamationscontroller = (req,res)=>{
 reclamationModel.getReclamationmodel().then((list)=>{
    res.send(list) ; 
 })
}