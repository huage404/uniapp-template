import { defineStore } from 'pinia';

const useUserStore = defineStore('user', {
    state() {
        return {
            welcome: 'Hello Uniapp'
        }
    },
    actions: {

    }
})

export default useUserStore;