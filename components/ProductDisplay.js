app.component(
    'product-display',
    {
        props: {
            premium: {
                type: Boolean,
                required: true,
            }
        },

        template:
        // Below is there for html syntax highlighting using es6-string-html extension.
        /*html*/
        `<div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img
                        :src="image"
                        alt="Socks"
                        :class="{ 'out-of-stock-img': !inStock }">
                </div>
                <div class="product-info">
                    <h1>{{ title }}</h1>

                    <p>{{ description }}</p>

                    <p>{{ stockInfo }}</p>

                    <p>Shipping: {{ shipping }} </p>

                    <p v-if="onSale">{{ onSaleInfo }}</p>

                    <product-details :details="details"></product-details>

                    <template v-for="(variant, index) in variants" :key="variant.id">
                        <div
                            @mouseover="updateVariant(index)"
                            class="color-circle"
                            :style="{ backgroundColor: variant.color }">
                        </div>
                    </template>

                    <div>
                        <select>
                            <option>Select</option>
                            <template v-for="size in sizes">
                                <option :value="size">{{ size }}</option>
                            </template>
                        </select>
                    </div>

                    <button
                        class="button"
                        :class="{ disabledButton: !inStock }"
                        :disabled="!inStock"
                        @click="addToCart">
                        Add to Cart
                    </button>
                    <button class="button" @click="removeFromCart">
                        Remove from Cart
                    </button>
                </div>
            </div>

            <review-list v-if="reviews.length" :reviews="reviews"></review-list>
            <review-form @review-submitted="addReview"></review-form>
        </div>`,

        data() {
            return {
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
                reviews: [],
            };
        },

        methods: {
            updateVariant(variantIndex) {
                this.selectedVariantIndex = variantIndex;
            },

            addToCart() {
                this.$emit('add-to-cart', this.variants[this.selectedVariantIndex].id);
            },

            removeFromCart() {
                this.$emit('remove-from-cart', this.variants[this.selectedVariantIndex].id);
            },

            addReview(review) {
                this.reviews.push(review);
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

            shipping() {
                return this.premium ? 'Free' : 2.99;
            }
        }
    }
);