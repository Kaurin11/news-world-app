import Axios from 'axios';

export const baseRequest = 'https://newsapi.org/v2';
export const topNewsUs = `${baseRequest}/top-headlines?country=us&apiKey=a418cd0fe92444819a4ef4a60486de87`;

export const getTopNewsUs = () => Axios.get(topNewsUs);

export const topNews = (country) => Axios.get(`${baseRequest}/top-headlines?country=${country}&apiKey=a418cd0fe92444819a4ef4a60486de87`);

export const categoriesNewsReq = (country,page,category) => Axios.get(`${baseRequest}/top-headlines?country=${country}&pageSize=5&page=${page}&category=${category}&apiKey=a418cd0fe92444819a4ef4a60486de87`);

export const newsForOneCategoriReq = (country,category) => Axios.get(`${baseRequest}/top-headlines?country=${country}&category=${category}&apiKey=a418cd0fe92444819a4ef4a60486de87`)

export const searchNewsReq = (country,terms) => Axios.get(`${baseRequest}/top-headlines?country=${country}&q=${terms}&apiKey=a418cd0fe92444819a4ef4a60486de87`);