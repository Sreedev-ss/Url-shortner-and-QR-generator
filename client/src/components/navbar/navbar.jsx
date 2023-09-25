import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {

    const location = useLocation()

    const navbarItems = [
        {
            name:'URL shortner',
            link:'/url-shortner'
        },
        {
        name:'QR Generator',
        link:'/qrcode-generator'
        }
        
    ]

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navbarItems.map((item)=>(
        <li className="navbar-item">
          <Link to={item.link} className={location.pathname === item.link? "navbar-link-active qr-generator-link":"navbar-link qr-generator-link"}>
            {item.name}
          </Link>
        </li>
             
             ))}
      </ul>
    </nav>
  );
};

export default Navbar;