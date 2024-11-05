import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isSignedIn: boolean;
  isLoaded: boolean;
}

const initialState: AuthState = {
  isSignedIn: false,
  isLoaded: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<AuthState>) => {
      state.isSignedIn = action.payload.isSignedIn;
      state.isLoaded = action.payload.isLoaded;
    },
    resetAuthState: (state) => {
      state.isSignedIn = false;
      state.isLoaded = true;
    },
  },
});

export const { setAuthState, resetAuthState } = authSlice.actions;
export default authSlice.reducer;
