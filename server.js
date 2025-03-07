const express = require ('express');
const mongoose = require ('mongoose');

require('./models/librat')
require('dotenv').config();

app.use(express.json());

mongoose
.connect(process.env.MONGO_URI || "mongodb://localhot:27017/biblioteka")
.then(()=>console.log('Database is connected'))
.catch((err)=> console.log(`Database cannot connect because of ${err}`))

//post per me shtu users 
app.post("/libra", async (req,res)=>{
    try{
        const {name, email} = req.body;

        const newUser = new User({Titulli,Autori, Pages});
        await newUser.save() //run info edhe nese e qojn disa user te njejten koh

        res.status(201).json({message: "Book added", user: newUser});
    }catch (error) {
        res.status(400).json({error:error.message})
    }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`Server is running ne porten ${PORT}`));