import { Outlet, Link } from "react-router";

export default function Home() {
  return (
    <>
      <nav>
        <Link to="/Main" style={{ marginRight: "10px" }}>
          Main
        </Link>
        <Link to="/Body" style={{ marginRight: "10px" }}>
          Body
        </Link>
      </nav>

      <Outlet></Outlet>
    </>
  );
}
