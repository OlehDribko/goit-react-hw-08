export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const isRefreshing = (state) => state.auth.isRefreshing;
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
