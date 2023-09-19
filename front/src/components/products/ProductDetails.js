import React, { Fragment } from 'react'
import MetaData from "../layout/MetaData"


export const ProductDetails = () => {
  return (
    <Fragment>
        <MetaData title="Arbol de la vida Azul"></MetaData>
        <div className='row d-flex justify-content-around'>
             <div className='col-12 col-lg-5 img-fluid' id="imagen_producto">
                <img src = "../../images/productos/arboldelavidaazul.jpeg" alt = "imagen_producto" height = "450" width= "450"></img>
             </div>
             <div className='col-12 col-lg-5 mt-5'>
                <h3>Tela Hindu Arbol de la Vida</h3>
                <p id='producto_id'>Product #3233252</p>
             </div>

        </div>
    
    </Fragment>
  )
}
