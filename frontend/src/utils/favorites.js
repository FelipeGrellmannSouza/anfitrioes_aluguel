export const getFavorites = () => {
    const favs = localStorage.getItem('favorites');
    return favs ? JSON.parse(favs) : [];
};

export const saveFavorites = (favorites) => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const addFavorite = (acomodacao) => {
    const favorites = getFavorites();
    if (!favorites.some(item => item.id === acomodacao.id)) {
        favorites.push(acomodacao);
        saveFavorites(favorites);
    }
};

export const removeFavorite = (acomodacaoId) => {
    const favorites = getFavorites();
    const updatedFavorites = favorites.filter(item => item.id !== acomodacaoId);
    saveFavorites(updatedFavorites);
};
