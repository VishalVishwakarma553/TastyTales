import React, { Suspense } from "react";
import MenuPage from "@/components/menu/MenuPage";
import MenuSkeleton from "@/components/menu/MenuSkeleton";

export default function Page() {
  return (
    <Suspense fallback={<MenuSkeleton />}>
      <MenuPage />
    </Suspense>
  );
}
