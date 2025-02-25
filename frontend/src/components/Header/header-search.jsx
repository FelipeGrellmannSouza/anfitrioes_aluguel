import { useEffect, useState } from 'react';
import { Navbar, Dropdown, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function MyNavbar() {
    const [acomodacoes, setAcomodacoes] = useState([]);
    useEffect(() => {
        fetchAcomodacoes()
    }, [])

    const fetchAcomodacoes = async () => {
        const response = await fetch('http://127.0.0.1:5000/acomodacoes');
        const data = await response.json();
        setAcomodacoes(data.acomodacoes);
        console.log(data.acomodacoes);
    }

    const navigate = useNavigate();

    const locais = acomodacoes.map((item) => item.localizacao);
    const locaisUnicos = [...new Set(locais)];

    const handleSelect = (local) => {
        const localEncoded = encodeURIComponent(local);
        navigate(`/acomodacoes/search?local=${localEncoded}`, { state: { acomodacoes } });
    };


    return (
        <Navbar expand="xl" className="bg-body-tertiary border-bottom">
            <Container fluid className='justify-content-between'>
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
                <Dropdown>
                    <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" style={{ width: '200px' }}>
                        Buscar local
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ width: '200px', textAlign: 'center' }}>
                        {/* Não esta funcionando */}

                        <Dropdown.Item as={Link} to="/acomodacoes">
                            Todos os Locais
                        </Dropdown.Item>
                        {locaisUnicos.map((local) => (
                            < Dropdown.Item
                                href="#/action-1"
                                key={local}
                                onClick={() => handleSelect(local)}
                            >
                                {local}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <Link to={'/acomodacoes/favoritos'}>
                    <Button style={{ width: '160px' }} variant="danger" className="d-flex align-items-center my-2 my-lg-0 justify-content-center" >
                        Favoritos
                    </Button>
                </Link>


            </Container>
        </Navbar >
    );
}

export default MyNavbar;