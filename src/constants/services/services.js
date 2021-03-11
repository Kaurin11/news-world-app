import Axios from 'axios';

export const baseRequest = 'https://newsapi.org/v2';
export const topNewsUs = `${baseRequest}/top-headlines?country=us&apiKey=a418cd0fe92444819a4ef4a60486de87`;

export const getTopNewsUs = () => Axios.get(topNewsUs);

// ideja , da country=us se menja na klik, kada kliknem da bude gb da mi promen taj coutnry na gb,
// tako sto cu mu proslediti string gb kkao parametar (iz url ,match.params?)
// export const topNewsUs = `${baseRequest}/top-headlines?country=${country}&apiKey=a418cd0f...`;
//ide ovo ispod
export const topNews = (country) => Axios.get(`${baseRequest}/top-headlines?country=${country}&apiKey=a418cd0fe92444819a4ef4a60486de87`);

export const categoriesNewsReq = (country,category) => Axios.get(`${baseRequest}/top-headlines?country=${country}&category=${category}&apiKey=a418cd0fe92444819a4ef4a60486de87`)

