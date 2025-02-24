import Header from '../components/Header/index';
import Footer from '../components/Footer/footer';
import { useEffect, useState } from 'react';
import AcomodationDetail from '../components/acomodationDetail/acomodationDetail.jsx';

function Details() {
    const id = window.location.href.split('/').pop();
    const [acomodacao, setAcomodacao] = useState(null);

    useEffect(() => {
        const fetchAcomodacao = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:5000/acomodacoes/${id}`);
                const data = await response.json();
                setAcomodacao(data);
                console.log(data); // Verifica os dados recebidos
            } catch (error) {
                console.error('Erro ao buscar a acomodação:', error);
            }
        };
        fetchAcomodacao();
    }, [id]);

    if (!acomodacao) {
        return (
            <>
                <Header />
                <div>Carregando...</div>
                <Footer />
            </>
        );
    }
    return (
        <>
            <Header />
            <AcomodationDetail data={acomodacao} />
            <Footer />
        </>
    );
}

export default Details;
