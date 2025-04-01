Redux ek predictable state container hai jo JavaScript applications ke liye use hota hai. Yeh application ke state ko manage karne me madad karta hai taaki state ka access har component ke paas ho.


### **Installation**:
npm install react-redux
npm install @reduxjs/toolkit


### **Redux ka Basic Concept**:
- **Store**: Yeh ek global object hota hai jo poori application ki state ko store karta hai.
- **Actions**: Yeh ek plain JavaScript object hote hain jo bataate hain ki state me kya change hona chahiye.
- **Reducers**: Yeh pure functions hote hain jo state ko modify karte hain based on action.
- **Dispatch**: Iska use karke hum actions ko trigger karte hain taaki state update ho.

### **Reducer Kya Hai?**
Reducer ek function hota hai jo state ko update karta hai. Jab bhi `useState` ya Redux me koi variable change karna ho, toh hum `dispatch` ka use karke ek action bhejte hain, jo reducer ke through state ko modify karta hai.

```javascript
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
```
Yeh reducer function `count` ko increase ya decrease karta hai based on action.

Koi bhi component is state ka access kar sakta hai aur usko modify kar sakta hai, is wajah se Redux ek centralized state management system hai jo sabhi components ko ek saath sync me rakhta hai.

####
Redux Toolkit me Slice Kya Hai?
Redux Toolkit (@reduxjs/toolkit) me slice ek tarika hai ek reducer aur uske actions ko ek saath define karne ka. Yeh Redux ke traditional approach se simple aur easy hota hai.

*###
Slice Ka Use
Ek Redux slice ek state ka ek part represent karta hai.

Yeh reducers aur actions ko ek hi jagah define karne deta hai.

Redux me alag-alag reducers likhne ki zaroorat nahi hoti, slice ke andar sab kuch ek saath define ho jata hai.

Example of a Redux Slice:

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", // Slice ka naam and unique hone chahiye
  initialState: { count: 0 }, // Initial state
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    }
  }
});

// Actions ko export karna
export const { increment, decrement, reset } = counterSlice.actions;

// Reducer ko export karna
export default counterSlice.reducer;
Slice ka Advantage:
Kam Code Likhna Padta Hai - Redux ke traditional action aur reducers alag-alag likhne se better hai.

Easy to Manage - Ek hi jagah state, actions aur reducers define ho jate hain.

Mutable Syntax - Directly state ko modify kar sakte hain, Redux Toolkit immer ka use karke isko internally handle karta hai.

