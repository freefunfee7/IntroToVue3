app.component('product-display', {
    template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <!-- <img v-bind:src="image" alt=""> -->
                <!-- <img 
                    :src="image" 
                    alt=""
                    :class="[inStock ? '' : 'out-of-stock-img']"
                > -->
            <img 
                :src="image" 
                alt=""
                :class="{ 'out-of-stock-img': !inStock }"
            >
            </div>
            <div class="product-info">
                <!-- <h1>{{ brand + ' ' + product }}</h1> -->
                <h1>{{ title }}</h1>
                <p>{{ sale }}</p>
                <!-- <a :href="url">link</a> -->
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>

                <p>Shipping: {{ shipping }}</p>

                <!-- <p v-show="inStock">In Stock</p> -->
                <!-- <p v-if="inventory > 10">In Stock</p>
                <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
                <p v-else>Out of Stock</p>
                <p v-show="onSale">On Sale</p> -->

                <!--
                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>
                -->
                <product-details :details="details"></product-details>

                <!-- <div v-for="variant in variants" :key="variant.id" @mouseover="updateImage(variant.image)">{{ variant.color }}</div> -->

                <!-- <div
                    v-for="variant in variants"
                    :key="variant.id"
                    @mouseover="updateImage(variant.image)"
                    class="color-circle"
                    :style="{ backgroundColor: variant.color }"
                >
                </div> -->
                <div
                    v-for="(variant, index) in variants"
                    :key="variant.id"
                    @mouseover="updateVariant(index)"
                    class="color-circle"
                    :style="{ backgroundColor: variant.color }"    
                >

                </div>

                <!-- <ul>
                    <li v-for="size in sizes">{{ size }}</li>
                </ul> -->
                <!-- <ul>
                    <li v-for="(size, index) in sizes" :key="index">{{ index }}:{{ size }}</li>
                </ul> -->
                <!-- <div v-for="size in sizes">{{ size }}</div> -->

                <!-- <button class="button" v-on:click="addToCart">Add to Cart</button> -->
                <button 
                    class="button"
                    :class="{ disabledButton: !inStock }"
                    :disabled="!inStock"
                    @click="addToCart"
                >
                    Add to Cart
                </button>

                <!-- <button class="button" @click="decreToCart">Decrement to Cart</button> -->
            </div>
        </div>
    </div>`,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery New',
            description: 'This is a pair of warm, fuzzy socks',
            // image: './assets/images/socks_green.jpg',
            url: 'https://www.google.com',
            // inStock: false,
            inventory: 0,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
            // cart: 0,
            activeClass: false,
            selectedVariant: 0,
            onSale: false,
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
        },

        updateVariant(index) {
            this.selectedVariant = index
        }
    },

    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' is on sale.'
            }
            return ''
        },
        shipping() {
            if (this.premium) {
                return 'Free'
            }
            return 2.99
        }
    },

    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
})