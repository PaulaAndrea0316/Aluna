const producto = require("../models/productos")
const fetch = (url) => import('node-fetch').then(({ default: fetch }) => fetch(url)); //Usurpación del require


//Ver la lista de productos
exports.getProducts = async (req, res, next) => {
  const productos = await producto.find();
  if (!productos){
    return res.status(404).json({
      success:false,
      error:true
    })
  }

  res.status(200).json({
    success: true,
    cantidad: productos.length,
    productos,
  })
}

//Ver un producto por ID
exports.getProductById = async (req, res, next) => {
  const product = await producto.findById(req.params.id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "No Encontramos Este Producto",
    })
  }
  res.status(200).json({
    success: true,
    message: "Aqui debajo encuentras información de tu producto:",
    product,
  })
}

//Update un producto
exports.updateProduct = async (req, res, next) => {
  let product = await producto.findById(req.params.id); //Variable de tipo modificable
  if (!product) {
    // verifico que el producto no exista para finalizar el proceso
    return res.status(404).json({
      success: false,
      message: "No encontramos este producto",
    })
  }
  // si el objeto existia, entonces si ejecuto la actualizacion
   product = await producto.findByIdAndUpdate(req.params.id, req.body, {
    new: true, //Valido solo los atributos nuevos o actualizados
    runValidators: true,
  })
  //Respondo Ok si el producto si se actualizó
  res.status(200).json({
    success: true,
    message: "Producto actualizado correctamente",
    product,
  })
}


//Eliminar un producto
exports.deleteProduct= async (req, res, next)=>{
    const product = await producto.findById(req.params.id) //Variable de tipo modificable
    if (!product) { // verifico que el producto no exista para finalizar el proceso
          return res.status(404).json({
          success: false,
          message: "No encontramos este producto",
        })
    }
    await product.deleteOne();//Eliminamos el proceso
    res.status(200).json({
        success:true,
        message:"Producto eliminado correctamente",
    })
}
//Crear nuevo producto /api/productos
exports.newProduct = async (req, res, next) => {
  const product = await producto.create(req.body);

  res.status(201).json({
    success: true,
    product,
  })
}


//HABLEMOS DE FETCH
//Ver todos los productos
function verProductos() {
  fetch('http://localhost:4000/api/productos')
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.error(err))
}
//verProductos();llamamos al metodo para probar la consulta
//Ver por id
function verProductoPorID(id) {
  fetch('http://localhost:4000/api/producto/' + id)
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.error(err))
}

//verProductoPorID('64eedf25164a8cee02ebe67c'); //Probamos el metodo con un id




