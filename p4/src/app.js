export const axios = require('axios');

export const config = {
    // News API
    //f9e4674f82d64ccebbcf381589ae41f9
    //41610f8871c34842ae0c19cdea2c765a
    newsHeadlinesApi: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f9e4674f82d64ccebbcf381589ae41f9',
    newsChannelsApi: 'https://newsapi.org/v2/sources?apiKey=f9e4674f82d64ccebbcf381589ae41f9',
    searchNewsApi: 'https://newsapi.org/v2/everything?language=en&apiKey=f9e4674f82d64ccebbcf381589ae41f9&q=',
    newsChannelApi: 'https://newsapi.org/v2/everything?language=en&apiKey=f9e4674f82d64ccebbcf381589ae41f9&domains=',

    // JSON Bin
    myChannels: 'https://api.jsonbin.io/b/5dce05df9e3eb3638dc0843f/latest',
    updateMyChannels: 'https://api.jsonbin.io/b/5dce05df9e3eb3638dc0843f',
}