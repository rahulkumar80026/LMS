import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setToken(state, value) {
      state.token = value.payload;
    },

    setSignupData(state, value) {
      state.setSignupData = value.payload;
    },

    setLoading(state, value) {
      state.setLoading = value.payload;
    },
  },
});

export const { setToken,setLoading, setSignupData } = authSlice.actions;

export default authSlice.reducer;
