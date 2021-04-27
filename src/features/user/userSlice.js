//redux configuration
import { createSlice } from "@reduxjs/toolkit";


//when the app starts keep it in blank
const initialState = {
    name: "",
    email: "",
    photo: "",
  };


//when you log in 
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      setUserLoginDetails: (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.photo = action.payload.photo;
      },
  
      setSignOutState: (state) => {
        state.name = null;
        state.email = null;
        state.photo = null;
      },
    },
  });
  


  export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

  //get access
  export const selectUserName = (state) => state.user.name;
  export const selectUserEmail = (state) => state.user.email;
  export const selectUserPhoto = (state) => state.user.photo;
  
  export default userSlice.reducer;