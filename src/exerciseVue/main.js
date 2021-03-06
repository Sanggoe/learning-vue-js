var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './vmSocks-green.jpg',
        altText: 'Green Socks replace text',
        inStock: false,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: './vmSocks-green.jpg'
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: './vmSocks-blue.jpg'
            }
        ],
        cart: 0
    },
    methods: {
        addToCart() {
            this.cart++
        },
        subToCart() {
            this.cart--
        },
        updateProduct(variantImage) {
            this.image = variantImage
        }
    }
});