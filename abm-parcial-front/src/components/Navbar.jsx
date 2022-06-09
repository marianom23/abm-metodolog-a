import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Home
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink 
                        className={() => 'nav-item nav-link'}
                        to="/agregar"
                    >
                        Agregar Instrumento
                    </NavLink>
                    <NavLink 
                        className={() => 'nav-item nav-link'}
                        to="/grilla"
                    >
                        Grilla
                    </NavLink>                                     
                </div>
            </div>
        </nav>
    )
}