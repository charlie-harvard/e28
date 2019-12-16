import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import NewsList from '@/components/NewsList.vue'

describe('NewsList.vue', () => {
    it('lists news content snapshot', () => {
        
        let articles = [{
            source: {id: null, name: "Marketwatch.com"},
            author: "Leslie Albrecht",
            title: "How to get Disney+, Apple TV+, Amazon Prime Video or Netflix for ‘free’ — and what to know before you sign up - MarketWatch",
            description: "Your cellphone plan or new TV could come with discounted or free video streaming.",
            url: "https://www.marketwatch.com/story/how-to-get-disney-apple-tv-amazon-prime-video-or-netflix-for-free-and-what-to-know-before-you-sign-up-2019-12-16",
            urlToImage: "http://s.marketwatch.com/public/resources/MWimages/MW-HW945_stream_ZG_20191213153931.jpg",
            publishedAt: "2019-12-16T14:20:00Z",
            content: "TV and movie fans are floating on a sea of streaming video subscription services."
        }]
        
        const wrapper = mount(NewsList, {
            propsData : { articles }
        })

        expect(wrapper.text()).to.include(articles[0].title);
        expect(wrapper.text()).to.include(articles[0].author);
        expect(wrapper.text()).to.include(articles[0].description);
    })
})