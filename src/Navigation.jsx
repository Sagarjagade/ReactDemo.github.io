import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation()
{
    
    return(
        <>  
           
            
       <div classNameName="container-fluid ">
          <div classNameName="row">  
                        <nav className="navbar navbar-expand-lg  bg-light">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand" to="/">Navbar</NavLink>


                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>

                            
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <Link exact className="nav-link "  to="/">Home</Link>
                                </li>

                                <li className="nav-item">
                                <Link exact className="nav-link "  to="/about">About</Link>
                                </li>

                                <li className="nav-item">
                                <Link exact className="nav-link "  to="/service">Service</Link>
                                </li>

                                <li className="nav-item">
                                <Link exact className="nav-link " to="/contact">Contact</Link>
                                </li>
                    </ul>
                  
                    </div>
                </div>
                </nav>
        </div>
    </div>
          
               
        </>
    );
}

export default Navigation;
