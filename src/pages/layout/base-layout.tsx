import { Header } from "../../components/header";
import { Outlet } from "react-router";

export function BaseLayout() {
  return (
    <>
      <Header />

      <Outlet />
    </>
  )
}