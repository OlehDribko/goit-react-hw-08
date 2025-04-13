import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      emaile: null,
    },
    token: null,
    isLoggedIn: true,
    isRefreshing: false,
  },
});
export default authSlice.reducer;
