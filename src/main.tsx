import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRoutes.tsx";

function NoticiasProvider({ children }: { children: React.ReactNode }) {

  return <>{children}</>;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NoticiasProvider>
      <RouterProvider router={router} />
    </NoticiasProvider>
  </StrictMode>
);
