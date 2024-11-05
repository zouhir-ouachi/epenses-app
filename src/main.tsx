import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ClerkProvider, ClerkLoading, ClerkLoaded } from "@clerk/clerk-react";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import Loader from "./components/Loader.tsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <Provider store={store}>
          <ClerkLoading>
            <Loader />
          </ClerkLoading>
          <ClerkLoaded>
            <App />
          </ClerkLoaded>
        </Provider>
      </ClerkProvider>
    </Suspense>
  </StrictMode>
);
