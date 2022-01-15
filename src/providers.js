import React from "react";
import { GithubProvider } from "./providers/github-provider";
import { ResetCSS } from "./global/resetCSS";
import App from "./App";

export function Providers() {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <App />
      </GithubProvider>
    </main>
  );
}
