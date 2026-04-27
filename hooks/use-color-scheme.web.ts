import { useEffect, useState } from "react";
import { useColorScheme as useNativeColorScheme } from "react-native";

export function useColorScheme() {
  const [scheme, setScheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setScheme(mediaQuery.matches ? "dark" : "light");

    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return useNativeColorScheme() ?? scheme;
}
