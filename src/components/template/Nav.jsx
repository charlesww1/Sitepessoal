import './Nav.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default props =>
    <aside className="menu-area">
         <Router>   
            <nav className="menu">
                    <i href="#home" className="icon1"> Inicio </i>
                    <i className="icon2"> Sobre </i>
                    <i className="icon3"> Currículo </i>
                    <i className="icon3"> Contato </i>
            </nav>
        </Router>
    </aside>