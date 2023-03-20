import axios from 'axios';

const URL = 'https://rickandmortyapi.com/api';

axios.defaults.baseURL = URL;

export const getCharacters= async (pageNumber) => {
const response = await axios(`/character/?page=${pageNumber}`);

return response.data.results;
};

export const getCharactersById = async (id) => {
const response = await axios(`/character/${id}`);

return response.data;
};
