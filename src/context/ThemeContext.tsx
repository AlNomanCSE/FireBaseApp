import { createContext, ReactNode } from "react";

interface Theme {
  color: string;
}
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<Theme | undefined>(undefined);
export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <div>
      <ThemeContext.Provider value={{ color: "blue" }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
}
