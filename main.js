const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
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
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' },
            ],
            sizes: [
                'S', 'M', 'L', 'XL', 'XXL'
            ],
        };
    }
});