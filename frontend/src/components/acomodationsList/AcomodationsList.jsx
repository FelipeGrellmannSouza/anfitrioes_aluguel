import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import './acomodationlist.css'

const AcomodationsList = ({ data }) => {
    return (
        <div className="containerCss container my-5">
            <div className="row justify-content-center g-4">
                {data.map((data) => (
                    <div key={data.id} className="col-12 col-md-6 col-lg-5 col-xl-4">
                        <Card className="h-100">
                            <Link to={`/acomodacoes/${data.id}`} >

                                <Card.Img
                                    variant="top"
                                    src={data.imagem}
                                    className="img-fluid"
                                    style={{ height: '270px', objectFit: 'cover' }}
                                />
                            </Link>

                            <Card.Body className="d-flex flex-column">
                                <Card.Title>{data.nome} - R${data.preco_noite}</Card.Title>
                                <div className="d-flex flex-row justify-content-between">
                                    <Card.Text>
                                        {data.localizacao}
                                    </Card.Text>
                                    <Button variant="danger" className="mt-auto" >
                                        Favoritar
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div >
    );
}
export default AcomodationsList