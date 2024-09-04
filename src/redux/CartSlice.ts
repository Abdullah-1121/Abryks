import { createSlice } from "@reduxjs/toolkit";
let cartItems:any[]=[];

const roundToTwoDecimals = (num:number) => Math.round(num * 100) / 100;

const initialState = {
    cartItems,
    totalAmount: 0,
    totalQuantity: 0,
}

const cart = createSlice({
    name: "cart",
    initialState :initialState,
    reducers: {
        addToCart: (state, action) => {
         
            const product = action.payload.products;
                                //Deubugging.....
            // Checking the syntax and type of the product
            // console.log(product);
            // console.log(typeof product);
            // console.log(product._id)
            // console.log('Product ID:', JSON.stringify(product.id));

            // Check existing product in cart
            const existingProd = state.cartItems.find(item => item._id === product._id);
//             console.log('state.Cartitems' )
//             console.log(state.cartItems)
//             console.log('Existing Product:', existingProd);
//             console.log('Product ID:', existingProd?._id);
// console.log('Product Quantity:', existingProd?.quantity);

            if (existingProd) {
                existingProd.quantity += 1;
                // console.log(`Existing product updated:`, existingProd);
            } else {
                // console.log('new Product')
                state.cartItems.push({ ...product, quantity: 1 });
                // console.log('Pushed new product:', { ...product, quantity: 1 });
                // console.log('Cart items after push:', state.cartItems);
            }

            state.totalQuantity += 1;
            state.totalAmount =roundToTwoDecimals(state.totalAmount+product.price) ;
            // console.log('Total Quantity:', state.totalQuantity);
            // console.log('Total Amount:', state.totalAmount);
        },
        removeProduct:(state,action)=>{
            let productId = action.payload._id;

            // console.log(productId)
            let productIndex = state.cartItems.findIndex((item)=>item._id==productId);
            // console.log(productIndex)
            if(productIndex!==-1){
                let product = state.cartItems[productIndex];
                // console.log('Prodct to be removed is ' )
                // console.log(product.quantity)
               
                // console.log(`total Quantity = ${state.totalQuantity} product qunatity =${product.quantity}`)
                state.totalQuantity-=product.quantity;
                
                // console.log(state.totalQuantity);
                // console.log(product.quantity)
                // // state.totalAmount-=product.price*product.quantity;
                
                let deductedPrice = product.price*product.quantity;
                // console.log(`deducted price = ${deductedPrice}`);
                // console.log(`${state.totalAmount}= ${state.totalAmount}-${deductedPrice}`)
                state.totalAmount=roundToTwoDecimals(state.totalAmount-deductedPrice);
                
                // console.log(state.totalAmount)

                
                 state.cartItems.splice(productIndex,1);
                // console.log(del)
            }
            
      

        },
        Addone:(state,action)=>{
           
            let productID = action.payload._id;
            // console.log(productID)
            // console.log(typeof productID);
        
            let productIndex = state.cartItems.findIndex((item)=>item._id==productID);
            // console.log(productIndex)
            if(productIndex!==-1){
                let product = state.cartItems[productIndex];
                state.totalQuantity+=1;
                product.quantity+=1;
                
                state.totalAmount=roundToTwoDecimals(state.totalAmount+product.price);
            }
            
            
                
                
            
            
            



        },  loadCart: (state, action) => {
            state.cartItems = action.payload.cartItems;
            console.log(action.payload.cartItems)
            state.totalQuantity = action.payload.totalQuantity;
            state.totalAmount = action.payload.totalAmount;
          },
        removeOne:(state,action)=>{
            let productID = action.payload._id;
            // console.log(productID)
           
            
            let productIndex = state.cartItems.findIndex((item)=>item._id==productID);
            if(productIndex!==-1){
                let product = state.cartItems[productIndex];
                // console.log(product.quantity)
                if(product.quantity==1){
                    state.cartItems.splice(productIndex,1);
                    
                    state.totalQuantity-=1;
                    if(state.totalAmount<=0){
                        state.totalAmount=0;
                    }else{
                        state.totalAmount=roundToTwoDecimals(state.totalAmount-product.price);

                    }

                }else{
                    state.totalQuantity-=1;
                    product.quantity-=1;
                    state.totalAmount=roundToTwoDecimals(state.totalAmount-product.price);

                }
                
            }




        },
        

        
       
            }
        })
        export const { addToCart,  removeProduct, Addone, removeOne ,loadCart } = cart.actions;
        export default cart.reducer;
// // import { createSlice , PayloadAction } from "@reduxjs/toolkit";
// // //  interface cartitem {
// // //     name:string,
// // //     price:number,
// // //     id:string,
// // //     quantity:number
// // //  }
// // //  interface state {
// // //     items:cartitem[],
// // //     totalAmount:number,
// // //     totalQuantity:number
// // //  }
// // let items : any[]=[]
 
// //  const initialState={
// //     items,
// //     totalAmount:0,
// //     totalQuantity:0
// //  }
// //  const cart = createSlice({
// //     name:'cart',
// //     initialState:initialState,
// //     reducers:{
// //         addProduct : (state,action)=>{
// //             let newItem = action.payload;
// //             let existingItem = state.items.find(item => item.id == newItem.id)
// //             if(existingItem){
// //                 existingItem.quantity+=newItem.quantity;
// //                 existingItem.price+=newItem.price*newItem.quantity
                
// //             }else{
// //                 state.items.push(newItem)
// //             }
// //             state.totalQuantity += newItem.quantity;
// //       state.totalAmount += newItem.price * newItem.quantity;
// //         },
// //         removeProduct:(state,action)=>{
// //             const id = action.payload;
// //             const existingItem = state.items.find(item => item.id === id.id);
      
// //             if (existingItem) {
// //               // Update the total quantity and amount of the cart
// //               state.totalQuantity -= existingItem.quantity;
// //               state.totalAmount -= existingItem.price * existingItem.quantity;
// //               // Remove the item from the cart
// //               state.items = state.items.filter(item => item.id !== id);
      
            
// //             }
// //         },
// //         addOne:(state,action:PayloadAction<string>)=>{
// //             // const prod = action.payload;
// //             // const existingItem = state.items.find(item => item.id === prod.id);
// //             // if(existingItem){
// //             //     existingItem.quantity++;
// //             //     existingItem.price+=prod.price;
// //             //     state.totalQuantity++
// //             //     state.totalAmount += prod.price;
// //             // }
// //             const id = action.payload;
// //             const existingItem = state.items.find(item => item.id === id);
// //             if (existingItem) {
// //               existingItem.quantity += 1;
// //               state.totalQuantity += 1;
// //               state.totalAmount += existingItem.price;
// //             }

// //             },
// //             removeOne:(state,action:PayloadAction<string>)=>{
// //             //     const prod = action.payload;
// //             // const existingItem = state.items.find(item => item.id === prod.id);
// //             // if(existingItem){
// //             //     existingItem.quantity--;
// //             //     state.totalQuantity--
// //             //     state.totalAmount -=prod.price;
// //             // }
// //             const id = action.payload;
// //             const existingItem = state.items.find(item => item.id === id);
// //             if (existingItem && existingItem.quantity > 0) {
// //               existingItem.quantity -= 1;
// //               state.totalQuantity -= 1;
// //               state.totalAmount -= existingItem.price;

// //             }
// //         }
// //     }
    
// //  })
// //  export const { addProduct , removeProduct , addOne , removeOne} = cart.actions;
// // export default cart.reducer;
// import { createSlice } from "@reduxjs/toolkit";

// // Helper function to round numbers to two decimal places
// const roundToTwoDecimals = (num:number) => Math.round(num * 100) / 100;

// // Load initial state from localStorage or set to default values
// const initialState = {
//         cartItems,
//         totalAmount: 0,
//         totalQuantity: 0,
//     }

// const cartSlice = createSlice({
//     name: "cart",
//     initialState,
//     reducers: {
//         addToCart: (state, action) => {
//             const product = action.payload.products;
//             const existingProd = state.cartItems.find(item => item._id === product._id);

//             if (existingProd) {
//                 existingProd.quantity += 1;
//             } else {
//                 state.cartItems.push({ ...product, quantity: 1 });
//             }

//             state.totalQuantity += 1;
//             state.totalAmount = roundToTwoDecimals(state.totalAmount + product.price);

//             // Sync to localStorage
//             localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
//             localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
//             localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
//         },
//         removeProduct: (state, action) => {
//             const productId = action.payload._id;
//             const productIndex = state.cartItems.findIndex(item => item._id === productId);

//             if (productIndex !== -1) {
//                 const product = state.cartItems[productIndex];
//                 state.totalQuantity -= product.quantity;
//                 state.totalAmount = roundToTwoDecimals(state.totalAmount - product.price * product.quantity);

//                 state.cartItems.splice(productIndex, 1);

//                 // Sync to localStorage
//                 localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
//                 localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
//                 localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
//             }
//         },
//         Addone: (state, action) => {
//             const productID = action.payload._id;
//             const productIndex = state.cartItems.findIndex(item => item._id === productID);

//             if (productIndex !== -1) {
//                 const product = state.cartItems[productIndex];
//                 state.totalQuantity += 1;
//                 product.quantity += 1;
//                 state.totalAmount = roundToTwoDecimals(state.totalAmount + product.price);

//                 // Sync to localStorage
//                 localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
//                 localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
//                 localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
//             }
//         },
//         removeOne: (state, action) => {
//             const productID = action.payload._id;
//             const productIndex = state.cartItems.findIndex(item => item._id === productID);

//             if (productIndex !== -1) {
//                 const product = state.cartItems[productIndex];

//                 if (product.quantity === 1) {
//                     state.cartItems.splice(productIndex, 1);
//                 } else {
//                     product.quantity -= 1;
//                 }

//                 state.totalQuantity -= 1;
//                 state.totalAmount = roundToTwoDecimals(state.totalAmount - product.price);

//                 // Sync to localStorage
//                 localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
//                 localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
//                 localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
//             }
//         },
//         loadCart: (state, action) => {
//             state.cartItems = action.payload.cartItems;
//             state.totalQuantity = action.payload.totalQuantity;
//             state.totalAmount = action.payload.totalAmount;
//         }
//     }
// });

// export const { addToCart, removeProduct, Addone, removeOne, loadCart } = cartSlice.actions;
// export default cartSlice.reducer;
