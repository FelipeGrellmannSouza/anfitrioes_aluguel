import { useState, useEffect } from 'react'
import Footer from "../components/Footer/footer";
import HeaderSearch from '../components/Header/header-search';
import AcomodationsList from '../components/acomodationsList/AcomodationsList';

function Acomodacoes() {
    const [acomodacoes, setAcomodacoes] = useState([]);
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        fetchAcomodacoes()
    }, [])

    const fetchAcomodacoes = async () => {
        const response = await fetch(`${apiUrl}/acomodacoes`)
        const data = await response.json()
        setAcomodacoes(data.acomodacoes)
    }

    return (
        <>
            <HeaderSearch ></HeaderSearch>
            <AcomodationsList data={acomodacoes} />
            <Footer />
        </>
    );
}

export default Acomodacoes