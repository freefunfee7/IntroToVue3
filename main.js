const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
        }
    },
    methods: {
        // updateCart() {
        //     this.cart += 1
        // },
        updateCart(id) {
            this.cart.push(id)
        },

        removeById(id) {
            index = this.cart.indexOf(id)
            if (index > -1) {
                this.cart.splice(index, 1)
            }
        }
    }
})
// const product = 'Socks'
// const app = Vue.createApp({
//     data() {
//         return {
//             product: 'Socks',
//             brand: 'Vue Mastery New',
//             description: 'This is a pair of warm, fuzzy socks',
//             // image: './assets/images/socks_green.jpg',
//             url: 'https://www.google.com',
//             // inStock: false,
//             inventory: 0,
//             onSale: true,
//             details: ['50% cotton', '30% wool', '20% polyester'],
//             variants: [
//                 { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
//                 { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
//             ],
//             sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
//             cart: 0,
//             activeClass: false,
//             selectedVariant: 0,
//             onSale: false,
//         }
//     },

//     methods: {
//         addToCart() {
//             this.cart += 1
//         },

//         decreToCart() {
//             if (this.cart > 0) {
//                 this.cart -= 1
//             } else {
//                 this.cart = 0
//             }
//         },
        
//         updateImage(variantImage) {
//             this.image = variantImage
//         },

//         updateVariant(index) {
//             this.selectedVariant = index
//         }
//     },

//     computed: {
//         title() {
//             return this.brand + ' ' + this.product
//         },
//         image() {
//             return this.variants[this.selectedVariant].image
//         },
//         inStock() {
//             return this.variants[this.selectedVariant].quantity
//         },
//         sale() {
//             if (this.onSale) {
//                 return this.brand + ' ' + this.product + ' is on sale.'
//             }
//             return ''
//         }
//     }
// })