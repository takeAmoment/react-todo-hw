import { Outlet } from "react-router-dom";
import { Header } from "../index";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
