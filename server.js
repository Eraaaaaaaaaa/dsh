const express = require ('express');
const mongoose = require ('mongoose');
const app = express()
const Librat = require('./models/librat')

require('dotenv').config();

app.use(express.json());

mongoose
.connect(process.env.MONGO_URI || "mongodb://localhost:27017/biblioteka")
.then(()=>console.log('Database is connected'))
.catch((err)=> console.log(`Database cannot connect because of ${err}`))

//post per me shtu users 
app.post("/libra", async (req,res)=>{
    try{
        const {Titulli, Autori, Pages} = req.body;

        const newBook = new Librat ({Titulli, Autori, Pages});/*  */
        await newBook.save() //run info edhe nese e qojn disa user te njejten koh

        res.status(201).json({message: "Book added", user: newBook});
    }catch (error) {
        res.status(400).json({error:error.message})
    }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`Server is running ne porten ${PORT}`));