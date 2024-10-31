import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function AppLayout() {
  return (
    <>
      <Header />
      <main className="px-7 py-12">
        <div className="container mx-auto max-w-7xl">
          <Outlet />
        </div>
      </main>
    </>
  );
}
