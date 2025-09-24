import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { ReactNode } from "react";

export const Route = createRootRoute({
  shellComponent: RootShellComponent
})

function RootShellComponent({ children }: { children: ReactNode }) {
  return (
    <html lang="en-US">
      <head>
        <HeadContent />
      </head>
      <body>
        <main>{children}</main>
        <Scripts />
      </body>
    </html>
  )
}
