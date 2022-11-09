import React from "react";
import logo from "../images/logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img class="logo" src={logo} /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto  mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/" class="nav-link active">Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/favorite" class="nav-link" href="#">Favorite</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/register">Add Contact</Link>
                            </li>

                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar