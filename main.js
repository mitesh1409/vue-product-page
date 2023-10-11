const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
        };
    },

    methods: {
        addToCart(productId) {
            this.cart.push(productId);
        },

        removeFromCart(productId) {
            const index = this.cart.indexOf(productId);
            if (index >= 0) {
                this.cart.splice(index, 1);
            }
        },
    },

    computed: {
        cartItemsCount() {
            return this.cart.length;
        }
    }
});