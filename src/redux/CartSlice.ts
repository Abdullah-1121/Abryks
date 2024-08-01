import { createSlice , PayloadAction } from "@reduxjs/toolkit";
 interface cartitem {
    name:string,
    price:number,
    id:string,
    quantity:number
 }
 interface state {
    items:cartitem[],
    totalAmount:number,
    totalQuantity:number
 }
 let items :any[]=[]
 const initialState:state={
    items,
    totalAmount:0,
    totalQuantity:0
 }
 const cart = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addProduct : (state,action:PayloadAction<cartitem>)=>{
            let newItem = action.payload;
            let existingItem = state.items.find(item => item.id == newItem.id)
            if(existingItem){
                existingItem.quantity+=newItem.quantity;
                existingItem.price+=newItem.price*newItem.quantity
                
            }else{
                state.items.push(newItem)
            }
            state.totalQuantity += newItem.quantity;
      state.totalAmount += newItem.price * newItem.quantity;
        },
        removeProduct:(state,action)=>{
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id.id);
      
            if (existingItem) {
              // Update the total quantity and amount of the cart
              state.totalQuantity -= existingItem.quantity;
              state.totalAmount -= existingItem.price * existingItem.quantity;
              // Remove the item from the cart
              state.items = state.items.filter(item => item.id !== id);
      
            
            }
        },
        addOne:(state,action:PayloadAction<cartitem>)=>{
            const prod = action.payload;
            const existingItem = state.items.find(item => item.id === prod.id);
            if(existingItem){
                existingItem.quantity++;
                existingItem.price+=prod.price;
                state.totalQuantity++
                state.totalAmount += prod.price;
            }

            },
            removeOne:(state,action:PayloadAction<cartitem>)=>{
                const prod = action.payload;
            const existingItem = state.items.find(item => item.id === prod.id);
            if(existingItem){
                existingItem.quantity--;
                state.totalQuantity--
                state.totalAmount -=prod.price;
            }

            }
        }
    
 })
 export const { addProduct , removeProduct , addOne , removeOne} = cart.actions;
export default cart.reducer;
