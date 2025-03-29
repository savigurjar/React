import { Outlet, Link } from "react-router";
export default function Detail() {
  return (
    <>
      <nav>
        <Link to="/Detail" style={{ marginRight: "10px" }}>Detail</Link>
        <Link to="Hello" style={{ marginRight: "10px" }}>Hello</Link>
        <Link to="Hii" style={{ marginRight: "10px" }}>Hii</Link>
      </nav>
      <h1>Detail Page</h1>
      <Outlet></Outlet>
    </>
  );
}
