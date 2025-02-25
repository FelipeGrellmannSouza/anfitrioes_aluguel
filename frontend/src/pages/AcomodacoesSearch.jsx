import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AcomodationsList from '../components/acomodationsList/AcomodationsList';
import HeaderSearch from '../components/Header/header-search';

function AcomodacoesSearch() {
    const [acomodacoes, setAcomodacoes] = useState([]);
    const location = useLocation();
    const fullData = location.state?.data || [];


    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const local = queryParams.get('local');

        if (local) {
            const fetchAcomodacoes = async () => {
                try {
                    const response = await fetch(`http://127.0.0.1:5000/acomodacoes/search?local=${encodeURIComponent(local)}`);
                    const data = await response.json();
                    setAcomodacoes(data.acomodacoes);
                } catch (error) {
                    console.error('Erro ao buscar acomodações:', error);
                }
            };
            fetchAcomodacoes();
        }
    }, [location.search]);



    return (
        <>
            <HeaderSearch data={fullData} />
            <AcomodationsList data={acomodacoes} />
        </>

    );
}

export default AcomodacoesSearch;
