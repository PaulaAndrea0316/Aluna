import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <h1 id="encabezado_productos">Ultimos Productos</h1>

      <section id="productos" className="container mt-5">
        <div className="row">
            {/*producto1*/}
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img
                className="card-img-top mx-auto"
                src="./images/arboldelavidaazul.jpeg"
                alt="Arbol de la vida"
              ></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto">
                  <a href="http://localhost:3000"></a>Arbol De La Vida
                </h5>
                <div className="rating mt-auto">
                  <div className="rating-outer"></div>
                  <div className="rating-inner"></div>
                </div>
                <span id="No_de_opiniones"> 5 Reviews</span>
              </div>
              <p className='cart-text'>$120.000</p><a href = 'http://localhost:3000' id = "view_btn" className='btn btn-block' >
                Ver detalle 
              </a>
            </div>
          </div>
          {/*producto2*/}
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img
                className="card-img-top mx-auto"
                src="./images/Japa_Mala_de_sandalo.jpeg"
                alt="Japa Mala de sandalo"
              ></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto">
                  <a href="http://localhost:3000"></a>Japa Mala De Sandalo
                </h5>
                <div className="rating mt-auto">
                  <div className="rating-outer"></div>
                  <div className="rating-inner"></div>
                </div>
                <span id="No_de_opiniones"> 4 Reviews</span>
              </div>
              <p className='cart-text'>$70.000</p><a href = 'http://localhost:3000' id = "view_btn" className='btn btn-block' >
                Ver detalle 
              </a>
            </div>
          </div>
           {/*producto3*/}
           <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img
                className="card-img-top mx-auto"
                src="./images/Japa_Mala_de_Semillas.jpeg"
                alt="Japa Mala de semillas"
              ></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto">
                  <a href="http://localhost:3000"></a>Japa Mala De Semillas
                </h5>
                <div className="rating mt-auto">
                  <div className="rating-outer"></div>
                  <div className="rating-inner"></div>
                </div>
                <span id="No_de_opiniones"> 5 Reviews</span>
              </div>
              <p className='cart-text'>$40.000</p><a href = 'http://localhost:3000' id = "view_btn" className='btn btn-block' >
                Ver detalle 
              </a>
            </div>
          </div>
           {/*producto4*/}
           <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img
                className="card-img-top mx-auto"
                src="./images/Japa_Mala_de_Tulasi.jpeg"
                alt="Japa Mala de Tulasi"
              ></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto">
                  <a href="http://localhost:3000"></a>Japa Mala De Tulasi
                </h5>
                <div className="rating mt-auto">
                  <div className="rating-outer"></div>
                  <div className="rating-inner"></div>
                </div>
                <span id="No_de_opiniones"> 8 Reviews</span>
              </div>
              <p className='cart-text'>$60.000</p><a href = 'http://localhost:3000' id = "view_btn" className='btn btn-block' >
                Ver detalle 
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
