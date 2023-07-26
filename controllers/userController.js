const User=require('../models/user_model')


 const signup=(req,res)=>{
const data={
    firstname:'Youssef',
    lastname:'Fathallah',
    email:'fathallahomar350@gmail.com',
    password:'123456789',
    bio:'Web-Devloper',
    picture:'',
    birthdate : new Date()
        }

        const _user = new User(data);
_user.save().then((createduser)=>{
    res.status(200).json({mes:'User added successfully!!'})
}).catch(
    (err)=>{
     res.status(400).json({mes:'problem while adding the user!x! '})
    }
)

}

module.exports= {signup}