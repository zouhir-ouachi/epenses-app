import { GlobalContext } from "@/context/GlobalState";
import { useContext } from "react";

export function useGlobalContext() {
  const context = useContext(GlobalContext);

  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }

  return context;
}
