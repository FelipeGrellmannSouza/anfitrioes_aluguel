import { useState, useEffect } from 'react';
import Heart from '../../imgs/heart.png'
import RedHeart from '../../imgs/heartred.png'
import Button from 'react-bootstrap/esm/Button';

function FavoriteButton({ acomodacao }) {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorite(favorites.some(item => item.id === acomodacao.id));
    }, [acomodacao.id]);

    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (favorites.some(item => item.id === acomodacao.id)) {
            //remove
            const updatedFavorites = favorites.filter(item => item.id !== acomodacao.id);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            setIsFavorite(false);
        } else {
            //adiciona
            favorites.push(acomodacao);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            setIsFavorite(true);
        }
    };

    if (isFavorite) {
        return (
            <Button variant="secondary-outline" className="mt-auto" onClick={toggleFavorite}>
                <img style={{ width: 30 }} src={RedHeart} alt="" />
            </Button>
        );
    } else {
        return (
            <Button variant="secondary-outline" className="mt-auto" onClick={toggleFavorite}>
                <img style={{ width: 30 }} src={Heart} alt="" />
            </Button>
        );
    }
}

export default FavoriteButton;

