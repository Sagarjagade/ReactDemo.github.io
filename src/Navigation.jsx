import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation()
{
    
    return(
        <>  
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
    crossorigin="anonymous"></script>
            
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
                                <NavLink exact className="nav-link "  to="/">Home</NavLink>
                                </li>

                                <li className="nav-item">
                                <NavLink exact className="nav-link "  to="/about">About</NavLink>
                                </li>

                                <li className="nav-item">
                                <NavLink exact className="nav-link "  to="/service">Service</NavLink>
                                </li>

                                <li className="nav-item">
                                <NavLink exact className="nav-link " to="/contact">Contact</NavLink>
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
