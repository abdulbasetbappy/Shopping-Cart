import { defineStore } from 'pinia';
import products from "~~/data";

export const useCartStore = defineStore('cart', {
    state:()=>({
        cartContent:{},
    }),
    getters:{
        formattedCart(){
            return Object.keys(this.cartContent).map((productId) =>{
                const product = this.cartContent[productId];
                const productDetails = products.find((p) => p.id === product.productId);
                return{
                    id:productId,
                    image:productDetails.image,
                    name:productDetails.name,
                    price:productDetails.price,
                    quantity:product.quantity,
                    cost:product.quantity * productDetails.price
                }
            })

        },
        productsTotal() {
            return Object.keys(this.cartContent).reduce((acc, id) => {
              return acc + this.cartContent[id].quantity;
            }, 0);
          },
          total() {
            return Object.keys(this.cartContent).reduce((acc, id) => {
              const product = products.find((p) => p.id === id);
              if (product) {
                return acc + product.price * this.cartContent[id].quantity;
              }
              return acc + 0;
            }, 0);
          },

    },
    actions:{
        add(productId) {
            if (this.cartContent.hasOwnProperty(productId)) {
              this.cartContent[productId] = {
                productId,
                quantity: this.cartContent[productId].quantity + 1,
              };
            } else {
              this.cartContent[productId] = {
                productId,
                quantity: 1,
              };
            }
          },
          remove(productId) {
            if (!this.cartContent[productId]) {
              return;
            }
            this.cartContent[productId].quantity -= 1;
      
            if (this.cartContent[productId].quantity === 0) {
              delete this.cartContent[productId];
            }
          },
          removeProduct(productId) {
            delete this.cartContent[productId];
          },
    }
});