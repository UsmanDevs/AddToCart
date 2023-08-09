// import { createSlice } from "@reduxjs/toolkit";


// const cartSlice = createSlice({
//     name: 'cart',
//     initialState:[],
//     reducers : {
//         add(state , action){
//             const newItem = action.payload
//             const existItem = state.find(item => item.id === newItem.id)
//             if(!existItem){
//                 state.push(newItem)
//             }
//         },
//         remove(state , action){
//             return state.filter((item)=> item.id !== action.payload)
//         }
//     }

// })

// export const {add , remove } = cartSlice.actions
// export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add(state , action){
            const newItem = action.payload
            const existItem = state.find(item => item.id === newItem.id)
            if(!existItem){
                state.push(newItem)
            }
        },
        remove(state , action){
            return state.filter((item)=> item.id !== action.payload)
        }
    }
})

export const {add , remove} = cartSlice.actions
export default cartSlice.reducer