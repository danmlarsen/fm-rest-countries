import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function AppLayout() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr]">
      <Header />
      <main className="px-7 py-12">
        <div className="container mx-auto max-w-7xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
