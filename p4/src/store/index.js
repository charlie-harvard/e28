import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        newChannelCount: 0
    },
    mutations: {
        setNewChannelCount(state, payload) {
            state.newChannelCount = payload;
        },
        updateNewChannelCount(state, payload) {
            let newCount = state.newChannelCount + payload;
            if(newCount <= 0 ){
                newCount = 0;
            }
            state.newChannelCount = newCount;
        }
    }
})