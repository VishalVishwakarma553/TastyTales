import {create} from "zustand"
export interface CartItem {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    quantity: number; //Cart item with added quantity
}

export interface cartStore {
    cart: CartItem[];
    addToCart: (item: Omit<CartItem, "quantity">) => void; //This will omit item with quantity of type "CartItem"
    removeFromCart: (id: string) => void;
    increaseQuantity: (id:string) => void;
    decreaseQuantity: (id:string) => void;
    clearCart: () => void
}

export const useStore = create<cartStore>((set) => ({
    cart:[],
    addToCart: (item) =>
        set((state) =>{ 
        const existingItem = state.cart.find((cartItem) => cartItem.id === item.id)
        if(existingItem){
            return {
                cart: state.cart.map((cartItem) => cartItem.id === existingItem.id ? {...cartItem, quantity: cartItem.quantity+=1}: cartItem)
            }
        }else{
            return {
                cart: [...state.cart, {...item, quantity:1}]
            }
        }
        }),

    removeFromCart: (id) => 
        set((state) => ({
            cart: state.cart.filter((cartItem) => cartItem.id !== id)
        })),
    
    increaseQuantity: (id) => 
        set((state) => ({
            cart: state.cart.map((cartItem) => (cartItem.id === id? {...cartItem, quantity: cartItem.quantity+1}: cartItem) )
        })),

    decreaseQuantity: (id) => 
        set((state) => ({
            cart: state.cart.map((cartItem) => cartItem.id === id? {...cartItem, quantity: cartItem.quantity - 1}: cartItem).filter((item) => item.quantity > 0)

            // cartAfterDecreasedQuantity = state.cart.map((cartItem) => ({
            //     cartItem.id === id? {...cartItem, quantity: cartItem.quantity-1}: cartItem
            // }))
            // cart: cartAfterDecreasedQuantity.filter((item) => item.quantity > 0)
        })),

    clearCart: () => (
        set({cart: []})
    )
}))