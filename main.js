const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'Description goes here',
            image: './assets/images/socks_green.jpg',
            inventory: 100,
            onSale: true,
        };
    }
});