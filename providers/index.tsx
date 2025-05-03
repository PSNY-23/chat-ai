import { ReactNode } from "react";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { ClerkProviderComponent } from "./ClearkProvider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ClerkProviderComponent>
      <ConvexClientProvider>{children}</ConvexClientProvider>
    </ClerkProviderComponent>
  );
}
