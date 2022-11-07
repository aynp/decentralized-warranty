import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      desiredChainId={1}
      authConfig={{
        // Set this to your domain to prevent signature malleability attacks.
        domain: "example.com",
        authUrl: "/api/auth",
      }}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
