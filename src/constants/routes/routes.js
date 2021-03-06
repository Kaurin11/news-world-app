export const mainViewUrl = () => '/mainView';

export const topNewsUrl = () => `${mainViewUrl()}/topNews`;

export const newsInfoUrl = () => `${mainViewUrl()}/newsInfo`;

export const newsInfoUrls = (content,title,urlToImage) => `${mainViewUrl()}/newsInfo?${content}&title=${title}&urlToImage=${urlToImage}`;

export const categoriesNewsUrl = () => `${mainViewUrl()}/:categoriesNews`;
export const generateCategoriesNewsUrl = (categoriesNews) =>  categoriesNewsUrl().replace(":categoriesNews", categoriesNews);

export const searcheNewsUrl = () => `${mainViewUrl()}/searchNews`;

export const categoriesUrls = () => `${mainViewUrl()}/categories/:page`;
export const generateCategoriesUrls = (page) => categoriesUrls().replace(":page", page);


export const catUrl = (page) => `${mainViewUrl()}/categories?page=${page}`;
export const expanUrl = () => '/expand';
