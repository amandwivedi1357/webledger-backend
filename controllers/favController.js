const {favModel} = require('../models/fav')


const favourites = async(req,res)=>{
    // const {imageUrl,title,userId,prodId}={...req.body} ;
    let url = {...req.body}
   
    res.send(url)
try {
    const fav_Data = await favModel.find();
//  if(fav_Data.length!==0){
//      //await new_fav.save({favourite:[prodId]}) 
//      //await fav_Data.save({favourite:[prodId],userId:userId}) ;
//      res.send({msg:"Fav added Succesfully"}) 
//  }else{
//     // const newuser = new favModel({"msg":"hello"});
//     // await newuser.save();
//     // res.status(201).send({ msg: "new_Fav Succesfully Register" });
//     res.send(req.body)
    
//   //await fav_Data.save({favourite:[prodId],userId:userId}) ;
// //res.send({msg:"new_Fav added Succesfully"})  
// }
}
catch(error) {
   res.status(400).send({msg:error.msg}) 
}
}

module.exports = {favourites}