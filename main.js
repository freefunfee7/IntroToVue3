// const product = 'Socks'
const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'This is a pair of warm, fuzzy socks',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.google.com',
            inStock: false,
            inventory: 0,
            onSale: true,
        }
    }
})