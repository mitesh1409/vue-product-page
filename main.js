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
            selectedVariantIndex: 0,
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

        updateVariant(variantIndex) {
            this.selectedVariantIndex = variantIndex;
        },
    },

    computed: {
        title() {
            return `${this.brand} ${this.product}`;
        },

        inStock() {
            return this.variants[this.selectedVariantIndex].quantity > 0 ? true : false;
        },

        stockInfo() {
            if (this.variants[this.selectedVariantIndex].quantity > 10) {
                return 'In Stock';
            }

            if ((this.variants[this.selectedVariantIndex].quantity > 0) &&
                (this.variants[this.selectedVariantIndex].quantity <= 10)) {
                return 'Almost sold out!';
            }

            return 'Out of stock';
        },

        onSaleInfo() {
            return `${this.brand} ${this.product} is on sale!`;
        },

        image() {
            return this.variants[this.selectedVariantIndex].image;
        },
    }
});