import { ReactNode } from "react";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { ClerkProviderComponent } from "./ClearkProvider";
import { ThemeProvider } from "./ThemeProvider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      <ClerkProviderComponent>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </ClerkProviderComponent>
    </ThemeProvider>
  );
}
