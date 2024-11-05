import { RootState } from "..";

export const selectIsSignedIn = (state: RootState) => state.auth.isSignedIn;
export const selectIsAuthLoaded = (state: RootState) => state.auth.isLoaded;
