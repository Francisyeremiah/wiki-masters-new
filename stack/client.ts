import { HexclaveClientApp } from "@hexclave/next";

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://wiki-masters-new.vercel.app";

export const hexclaveClientApp = new HexclaveClientApp({
  tokenStore: "nextjs-cookie",
  urls: {
    default: {
      type: "handler-component",
    },
    afterSignIn: appUrl,
    // afterSignUp: appUrl,
    // afterSignOut: appUrl,
    // home: appUrl
  },
});
