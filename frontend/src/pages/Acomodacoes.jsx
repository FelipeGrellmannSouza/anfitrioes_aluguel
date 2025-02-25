import { useState, useEffect } from 'react'
import Footer from "../components/Footer/footer";
import Header from "../components/Header";
import HeaderSearch from '../components/Header/header-search';
import AcomodationsList from '../components/acomodationsList/AcomodationsList';

function Acomodacoes() {
    const [acomodacoes, setAcomodacoes] = useState([]);
    useEffect(() => {
        fetchAcomodacoes()
    }, [])


    const fetchAcomodacoes = async () => {
        const response = await fetch('http://127.0.0.1:5000/acomodacoes')
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