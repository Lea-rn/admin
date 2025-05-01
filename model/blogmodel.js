const db = require("../database.js");

//// add new blog to the list :


exports.addblogmodel = async (creator , blog_img , title , description) => {
    try {
        if (creator , blog_img , title , description) {
       const query = "INSERT INTO blogs (creator , blog_img , title , description ) VALUES (?, ?, ?, ?)" ;
       const [result] = await db.query(query, [creator , blog_img , title , description]);
       return result;
        }
        else {
            console.log("please insert data");
          }

    }catch (err){
    console.log(err)
    }

}



