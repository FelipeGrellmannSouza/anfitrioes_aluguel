import Button from 'react-bootstrap/Button';
import './banner.css'
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <div className="banner">
            <h2>Veja todos os nossas acomodações</h2>
            <Link to={"/acomodacoes"}>
                <Button variant="danger" size="lg">
                    Ver Acomodações
                </Button>
            </Link>
        </div>
    );
}

export default Banner;