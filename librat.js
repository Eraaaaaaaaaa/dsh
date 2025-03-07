const mongoose= require('mongoose')

//krijimi i modelit
const UserSchema = new mongoose.Schema ({
    Titulli: {type: String, required: true},
    Autori: {type: String, required: true},
    Pages: {type:Number, required: false}
})

const Librat = mongoose.model("Librat", UserSchema);
module.exports= Librat;