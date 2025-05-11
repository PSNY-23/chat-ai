import { ReactNode } from "react";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { ClerkProviderComponent } from "./ClearkProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='light' enableSystem={false} disableTransitionOnChange>
      <ClerkProviderComponent>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </ClerkProviderComponent>
    </ThemeProvider>
  );
}
