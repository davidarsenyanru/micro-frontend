import { defineStore } from 'pinia';

interface Product {
    id: number;
    name: string;
    price: number;
}

interface CartItem {
    id: number;
    price: number;
    quantity: number;
}

export const useStore = defineStore('cart', {
    state: (): { products: Product[]; cart: CartItem[] } => ({
        products: [
            {
                id: 1,
                name: 'Product 1',
                price: 20
            },
            {
                id: 2,
                name: 'Product 2',
                price: 210
            },
            {
                id: 3,
                name: 'Product 3',
                price: 10
            },
            {
                id: 4,
                name: 'Product 4',
                price: 150
            },
            {
                id: 5,
                name: 'Product 5',
                price: 290
            }
        ],
        cart: [],
    }),
    actions: {
        updateCart(productUpdate: CartItem): void {
            const index = this.cart.findIndex((product) => product.id === productUpdate.id);

            if (index !== -1) {
                this.cart[index].quantity = productUpdate.quantity;
            } else {
                this.cart.push(productUpdate);
            }
        },
        isInCart(id: number): boolean {
            return this.cart.some(product => product.id === id);
        },
        getQuantityById(id: number): number {
            const product = this.cart.find(product => product.id === id);
            return product ? product.quantity : 0;
        }
    },
    getters: {
        totalItemsInCart: (state): number => {
            return state.cart.reduce((total, product) => total + product.quantity, 0);
        },
        totalPriceInCart: (state): number => {
            return state.cart.reduce((total, product) => total + product.price * product.quantity, 0);
        },
    },
});
