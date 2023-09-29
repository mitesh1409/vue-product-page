const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            description: 'Description goes here',
            onSale: true,
            details: [
                '50% Cotton',
                '30% Wool',
                '20% Polyester',
            ],
            currentVariant: {
                id: 2234,
                color: 'green',
                image: './assets/images/socks_green.jpg',
                quantity: 50,
            },
            variants: [
                {
                    id: 2234,
                    color: 'green',
                    image: './assets/images/socks_green.jpg',
                    quantity: 50,
                },
                {
                    id: 2235,
                    color: 'blue',
                    image: './assets/images/socks_blue.jpg',
                    quantity: 0,
                },
            ],
            sizes: [
                'S', 'M', 'L', 'XL', 'XXL'
            ],
        };
    },

    methods: {
        addToCart() {
            this.cart += 1;
        },

        removeFromCart() {
            if (this.cart > 0) {
                this.cart -= 1;
            }
        },

        changeCurrentVariant(variantId) {
            const result = this.variants.filter((variant) => variant.id === variantId);
            if (result.length > 0) {
                this.currentVariant = result[0];
            }
        },

        inStock() {
            return this.currentVariant.quantity > 0 ? true : false;
        },
    },

    computed: {
        title() {
            return `${this.brand} ${this.product}`;
        }
    }
});