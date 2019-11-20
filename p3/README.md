# Project 3 Feedable News
+ By: Chutian Gao
+ Production URL: <http://p3.charlieis.me>

There are 4 "pages", **Home**, **My Channels**, **Search Results**, and **Channel**. 

On the Home page, I pull 5 top news using NewsAPI. On a popup window, I display news details and provide a button for user to add the current news source(domain). 

On the My Channels page, I display a list of news sources that are saved on JSONBin.io. Users can remove saved channel(news source) from that list. And I use JSONBin API to update the remote JSON instance.

By clicking on the news source domain link, Channel page shows up. A list of latest news on this domain will display on this new page.

Searching function is implemented on the navigation bar. It utilizes NewsAPI to display 20 related news on Search Results page.

Finally, on Search Results page, I use localStorage to store users recent search keywords.

## Outside resources
[News API](https://newsapi.org/docs)

[JSONBin.io](https://jsonbin.io/)

## Notes for instructor
Since I am using NewsAPI's "Developer" plan, the Feedable app can only send up to 500 requests per day. 
