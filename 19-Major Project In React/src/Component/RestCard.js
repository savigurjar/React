// RestCard.jsx
import { Link } from "react-router";
export default function RestCard({ restInfo }) {
  return (
    <Link to={"/city/delhi/" + restInfo?.info?.id}>
      <div className="max-w-[280px] mb-1">
        <div className=" p-4 w-72 hover:scale-105 transition-transform duration-200">
          <img
            className="w-full h-48 object-cover rounded-lg"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${restInfo?.info?.cloudinaryImageId}`}
            alt={restInfo?.info?.name}
          />
          <div className="mt-3">
            <div className="font-bold text-xl text-gray-900 truncate">
              {restInfo?.info?.name}
            </div>
            <div className="flex gap-4 text-gray-600 mt-1 text-sm font-semibold">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="green"
                  className="w-5 h-5 mr-1"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span>{restInfo?.info?.avgRating}</span>
              </div>
              <span>{restInfo?.info?.sla?.slaString}</span>
            </div>
            <div className="text-gray-500 text-lg mt-1 h-7 overflow-hidden">
              {restInfo?.info?.cuisines.join(" ")}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
