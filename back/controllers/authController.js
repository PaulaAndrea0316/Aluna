const User = require("../models/auth")
const ErrorHandler= require("../utils/errorHandler")
const catchAsyncErrors= require("../middleware/catchAsyncErrors");

//Registrar un nuevo usuario /api/usuario/registro

exports.registroUsuario= catchAsyncErrors(async (req, res, next) =>{
    const {nombre, email, password} = req.body;

    const user = await User.create({
        nombre,
        email,
        password,
        avatar:{
            public_id: "ANd9GcRsHdWtzChz4v37KsPtmqM6y5I1ukMBcxgxcg&usqp",
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsHdWtzChz4v37KsPtmqM6y5I1ukMBcxgxcg&usqp=CAU"
        }
    })

    res.status(201).json({
        success:true,
        user
    })
    })
    
