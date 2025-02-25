import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary border-bottom">
            <Container fluid>
                <Link to={"/"}>
                    <Navbar.Brand>
                        <img
                            src="https://anfitrioesdealuguel.com.br/wp-content/uploads/2022/05/logomarca_png.png"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to={"/"} className='text-decoration-none'>
                            <Nav.Link href='#action1'>Home</Nav.Link>
                        </Link>
                        <Link to={"/acomodacoes"} className='text-decoration-none'>
                            <Nav.Link href='#action1'>Acomodações</Nav.Link>

                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Header;

