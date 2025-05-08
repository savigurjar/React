import { useSelector } from "react-redux";
import { Link } from "react-router";
export default function RestHeader() {
  const counter = useSelector((state) => state.cartslice?.count ?? 0);

  return (
    <div className="w-full py-4 px-8 bg-gray-100 text-lg shadow-md">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <p className="ml-[100px] text-orange-600 font-bold text-2xl">Swiggy</p>
        <nav className="flex gap-6 text-gray-800 font-medium">
          <p className="hover:text-orange-500 cursor-pointer">Corporate</p>
          <p className="hover:text-orange-500 cursor-pointer">Search</p>
          <p className="hover:text-orange-500 cursor-pointer">Offers</p>
          <p className="hover:text-orange-500 cursor-pointer">Help</p>
          <p className="hover:text-orange-500 cursor-pointer">
            <Link to="/Checkout">
            Cart ({counter})</Link>
          </p>
        </nav>
      </div>
    </div>
  );
}
