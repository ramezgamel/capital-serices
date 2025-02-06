import { Outlet } from "react-router";
import Header from "../shared/Header";

export default function UserLayout() {
  return (
    <>
      <Header />
      <main className="md:px-20 lg:px-28 py-2 px-4">
        <Outlet />
      </main>
    </>
  );
}
