const db = require("../database.js");


//// get list of food model :



exports.getFoodModel = async () => {
  try {
    const [food] = await db.query('SELECT * FROM recette');
    return food;
  } catch (err) {
    console.error(err);
    return [];
  }
};

//// add new food to the list :



exports.addfoodmodel = async ( name, description, price,category , img) => {
  try {
    if (img && name && description && price && category) {
      const query = "INSERT INTO recette (name, description,price, category,  image ) VALUES (?, ?, ?,?,?)";
      const [result] = await db.query(query, [name, description, price , category , img]);
      return result;
    } else {
      console.log("please insert data");
    }
  } catch (err) {
    console.log(err);
  }
};

//// search by name  :



exports.searchFoodModel = async (name) => {
  try {
    const [result] = await db.query('SELECT * FROM recette WHERE Name LIKE ?', [`%${name}%`]);
    return result;
  } catch (err) {
    console.error(err);
    return [];
  }
};




//// update a specific information food :

// exports.updatefoodmodel = async (image, name, description, id) => {
//   try {
//     if ((image, name, description)) {
//       const result = await db.updateOne(
//         { _id: id },
//         { Image: image, Name: name, Description: description }
//       );
//       return result;
//     } else {
//       console.log("please insert data");
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };




exports.updateFoodModel = async (image, name, description ,  id) => {
  try {
    if (image && name && description && price && category) {
      const [result] = await db.query(
        'UPDATE recette SET Image = ?, Name = ?, Description = ? , Price = ? , Category = ? WHERE id = ?',
        [image, name, description ,price , category ,  id]
      );
      return result;
    } else {
      console.log("Please provide all the required data (image, name, description).");
      return null;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
};


//// delete a specific food by id :

// exports.deletefoodmodel = async (id) => {
//   try {
//     const result = db.deleteOne({ _id: id });
//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// };



exports.deleteFoodModel = async (id) => {
  try {
    const [result] = await db.query('DELETE FROM recette WHERE id = ?', [id]);
    return result;
  } catch (err) {
    console.error(err);
    return null;
  }
};




//// serach by category : 

// exports.categoryfoodmodel = async (category)=>{
//   try{
//     const result = await db.find({category:category});
   
//     return result

//   } catch(err){
//     console.log(err)
//   }
// }




exports.categoryFoodModel = async (category) => {
  try {
    const [result] = await db.query('SELECT * FROM recette WHERE category = ?', [category]);
    return result;
  } catch (err) {
    console.error(err);
    return [];
  }
};
