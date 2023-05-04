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
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green'},
                { id: 2235, color: 'blue'}
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        }
    }
})