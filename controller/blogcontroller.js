const blogmodel = require ("../model/blogmodel.js")

//// add new blog  :

exports.addblogcontroller = (req,res)=>{
blogmodel.addblogmodel(
    req.body.creator,
    req.body.blog_img,
    req.body.title,
    req.body.description

).then((result)=> {
    res.send(result)
})
}

