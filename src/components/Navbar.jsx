import React from "react";
import {Link, NavLink} from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
        <Link className="navbar-brand navbar-left" to={"/"}><img src={"/img/cel.png"} alt={"Logo cel"} width={180} /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to={"/"}>Inicio</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to={"/category/Motorola"}>Motorola</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to={"/category/Samsung"}>Samsung</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to={"/category/Iphone"}>Iphone</NavLink>
            </li>
        </ul>
        <div className="col-md-6">
        <CartWidget />
    </div>
        </div>
    </div>
    </nav>

    </div>
    )
}

export default Navbar;