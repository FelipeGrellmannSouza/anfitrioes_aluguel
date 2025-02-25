import React, { useEffect, useState } from 'react';
import AcomodationsList from '../acomodationsList/AcomodationsList';
import Header from '../Header/index';
import Footer from '../Footer/footer';

function Favoritos() {
    const [favoritos, setFavoritos] = useState([]);


    useEffect(() => {
        //pegar os dados do localstorage
        const favoritosSalvos = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavoritos(favoritosSalvos);
    }, []);

    return (
        <div>
            <Header />
            {favoritos.length > 0 ? (
                <div style={{ minHeight: 589, textAlign: 'center' }}>
                    <AcomodationsList data={favoritos} />
                </div>

            ) : (
                <div className='Container'>
                    <h1 style={{ minHeight: 589, textAlign: 'center' }}>Você não tem acomodações favoritas.</h1>

                </div>
            )
            }
            <Footer />
        </div >
    );
}

export default Favoritos;
