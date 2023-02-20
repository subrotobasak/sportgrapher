import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoImage from "../../images/logo.png";
import Logo from "../Logo/Logo"
import HoverButton from "../HoverButton/HoverButton";
import './Header.css';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <header className="header">
            <Navbar bg="dark" variant="dark" expand="lg" className="py-3 fixed-top">
                <Container>
                    <Navbar.Brand as = {Link} to = "/">
                        <Logo image={LogoImage} />

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                            <NavLink to="/about" className="nav-link">About</NavLink>
                            <NavLink to="/blog" className="nav-link">Blog</NavLink>
                            <NavLink to="/login" className="nav-link"><HoverButton button="Login" /></NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>


    );
};

export default Header;