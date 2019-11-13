export const axios = require('axios');

export const config = {
    newsHeadlinesApi: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=41610f8871c34842ae0c19cdea2c765a',
    newsChannelsApi: 'https://newsapi.org/v2/sources?apiKey=41610f8871c34842ae0c19cdea2c765a',
    searchNewsApi: 'https://newsapi.org/v2/everything?apiKey=41610f8871c34842ae0c19cdea2c765a&q=',
}

export let library = {
    savedChannels: [],
    readLaters: [],
    readNext: null,
    articlesCache: [],
}