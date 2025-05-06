"use client";

import { MainLayout } from "./components/layout/MainLayout";
import Home from "@/app/pages/Home/page";
import SmoothScroll from "./components/SmoothScroll";

export default function App() {
  return (
    <>
      <SmoothScroll>
        <MainLayout>
          <Home />
        </MainLayout>
      </SmoothScroll>
    </>
  );
}
