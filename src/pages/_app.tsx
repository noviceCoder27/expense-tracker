import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <Head>
        <title>Expense Tracker</title>
      </Head>
      <Component {...pageProps} />
    </ClerkProvider>
    
  )
}
