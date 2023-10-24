//import React from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import CarWidget from './CarWidget';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Bienvenidos al Sistema de Stock del laboratorio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pedidos</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Reajustar Stock
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Dar de Alta</a></li>
                                <li><a className="dropdown-item" href="#">Dar de Baja</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Entrega Demorada</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Calificación de Proveedores</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
            <Nav className="me-auto">
                <NavLink className={({ isActive }) => isActive ? "link-active navlink" : "navlink"} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "link-active navlink" : "navlink"} to="/category/tablet">Tablets</NavLink>
                <NavLink className={({ isActive }) => isActive ? "link-active navlink" : "navlink"} to="/category/smartphones">Smartphones</NavLink>
                <NavLink className={({ isActive }) => isActive ? "link-active navlink" : "navlink"} to="/category/pc">Pc</NavLink>
                <NavLink className={({ isActive }) => isActive ? "link-active navlink" : "navlink"} to="/cart">Cart</NavLink>
            </Nav>
            <CarWidget />
        </nav>
    );
};

export default Navbar;

