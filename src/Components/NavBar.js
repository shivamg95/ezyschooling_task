import React from 'react'
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-dark fixed-top navbar-expand-sm navbar-light bg-dark shadow">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">BLOG</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    )
}
