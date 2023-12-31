import React, { Fragment } from "react";
import "../../App.css"
import { Link } from "react-router-dom"
import Search from "./Search";

const Header = () => {
  return (
    <Fragment>
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <img src="../images/Aluna.png" alt="Aluna Store Logo"></img>
          </div>
        </div>

        <div className="col-12 col-md-4 mt-2 mt-md-0">
        {/*Aqui va buscar*/}
        <Search/>
        </div>
        {/*Boton Inicio Sesión*/}
        <Link to="/login" className="btn ml-4" id="login_btn">Login</Link>
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">     
           <div className="ml-4 dropdown d-inline">
              <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button"
              id="dropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span>Panel  de Control</span></Link>
                <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
                <Link className="dropdown-item" to="/dashboard">Adm. Productos</Link>
                <Link className="dropdown-item" to="/">Pedidos</Link>
                <Link className="dropdown-item" to="/">Mi cuenta</Link>
                <Link className="dropdown-item" to="/">Cerrar Sesion</Link>
                </div>
          </div>          
          <i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="true"></i>
          <span className="ml-1" id="cart_count">2</span>   
        </div>
      </nav>
    </Fragment>
  );
};
export default Header;
