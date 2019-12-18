# Project 4
+ By: Chutian Gao
+ Production URL: <http://p4.charlieis.me>

Feedable News 2.0

## Improvements based on P3 peer review feedback
- On Search Results page, "Recent Searched Keywords" are linked to their result pages.
- Removed un-used assets.


## Outside resources
[News API](https://newsapi.org/docs)

[JSONBin.io](https://jsonbin.io/)

## Notes for instructor
Production app is up and runing on [Netlify](https://zen-mirzakhani-13df71.netlify.com).
There are 4 "pages", **Home**, **My Channels**, **Channel**, and **Search Results**. 

### Home page
5 top news are pulled from [News API](https://newsapi.org/docs) using **Axios**. By clicking on a news title, a modal window displaying news details will pop up. It has a button for adding the current news source to My Channles (stored in [JSONBin.io](https://jsonbin.io/)). The number of newly added channels will be shown and this is implemented by **Vuex**.

### My Channels and Channels
My Channels displays a list of news sources that are saved. Users can remove saved channels(news sources) from the list. Changes will be saved to [JSONBin.io](https://jsonbin.io/) as well.

By clicking on the news source domain link, users will be redirect to the Channel page. A list of the latest news, which come from this domain, will be displayed.

### Searching
Searching function is implemented on the navigation bar. In order to start a search, users need to enter at least 2 charactars in the text box. This is implemented by using **Vuelidate**. On the Search Results page, Recent search keywords are displayed and linked to the corresponding results. Recent search keywords are stored locally.

### Unit Test
Expect NewsList component to display at least one news.

### E2E Test
Covers all pages and channel saving function.