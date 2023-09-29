const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            description: 'Description goes here',
            image: './assets/images/socks_green.jpg',
            inventory: 100,
            onSale: true,
            details: [
                '50% Cotton',
                '30% Wool',
                '20% Polyester',
            ],
            variants: [
                {
                    id: 2234,
                    color: 'green',
                    image: './assets/images/socks_green.jpg',
                },
                {
                    id: 2235,
                    color: 'blue',
                    image: './assets/images/socks_blue.jpg',
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

        showVariantImage(image) {
            this.image = image;
        },

        inStock() {
            return this.inventory > 0 ? true : false;
        },
    },

    computed: {
        title() {
            return `${this.brand} ${this.product}`;
        }
    }
});