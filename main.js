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
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'}
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
            cart: 0,
            activeClass: false
        }
    },

    methods: {
        addToCart() {
            this.cart += 1
        },

        decreToCart() {
            if (this.cart > 0) {
                this.cart -= 1
            } else {
                this.cart = 0
            }
        },
        
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})