import { ClerkProvider} from "@clerk/nextjs";
import { ReactNode } from "react";

export const ClerkProviderComponent = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      {children}
    </ClerkProvider>
  );
};
